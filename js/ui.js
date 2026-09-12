const UI = {
  audioCtx: new (window.AudioContext || window.webkitAudioContext)(),

  playSound(type) {
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.connect(gain); gain.connect(this.audioCtx.destination);

    if (type === 'correct') {
      osc.frequency.setValueAtTime(523.25, this.audioCtx.currentTime);
      osc.frequency.setValueAtTime(659.25, this.audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.3);
      osc.start(); osc.stop(this.audioCtx.currentTime + 0.3);
    } else {
      osc.frequency.setValueAtTime(220, this.audioCtx.currentTime);
      osc.frequency.setValueAtTime(164.81, this.audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.4);
      osc.start(); osc.stop(this.audioCtx.currentTime + 0.4);
    }
  },

  switchView(viewId, btn) {
    document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`view-${viewId}`).classList.remove('hidden');

    document.querySelectorAll('.nav-item button, .mobile-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
  },

  renderModules() {
    const container = document.getElementById('modules-container');
    const fullContainer = document.getElementById('full-curriculum-container');
    if (container) container.innerHTML = '';
    if (fullContainer) fullContainer.innerHTML = '';

    let prevLessonDone = true;

    LessonsData.forEach(mod => {
      let modHtml = `
        <div class="module-card">
          <div class="module-header">${mod.title}</div>
          <div class="module-desc">${mod.desc}</div>
          <div class="lessons-tree">
      `;

      mod.lessons.forEach(lesson => {
        const isDone = Progress.state.completedLessons.includes(lesson.id);
        const isUnlocked = isDone || prevLessonDone;

        let statusClass = 'locked';
        let actionText = '🔒 Bloqueado';

        if (isDone) { 
          statusClass = 'completed'; actionText = '✓ Concluída'; 
        } else if (isUnlocked && Progress.state.lastCompleted) {
           statusClass = 'unlocked'; actionText = '▶ Começar';
        } else if (isUnlocked) {
          statusClass = 'unlocked'; actionText = '→ Continuar';
        }

        const clickAction = isUnlocked ? `onclick="Exercises.startLesson('${lesson.id}')"` : '';

        modHtml += `
          <div class="lesson-node ${statusClass}" ${clickAction}>
            <div class="node-left">
              <span class="node-tag">${lesson.tag}</span>
              <span class="node-title">${lesson.title}</span>
            </div>
            <span class="node-action" style="color: ${isDone ? 'var(--success)' : isUnlocked ? 'var(--primary)' : 'var(--text-muted)'}">${actionText}</span>
          </div>
        `;

        prevLessonDone = isDone;
      });

      modHtml += `</div></div>`;
      
      // Dashboard exibe apenas o primeiro módulo ou resumo rápido se desejado, 
      // mas na Trilha (fullContainer) exibe tudo completo.
      if (container && mod.id === 'mod1') container.innerHTML += modHtml;
      if (fullContainer) fullContainer.innerHTML += modHtml;
    });
  },

  renderBadges() {
    const container = document.getElementById('badges-container');
    if (!container) return;
    container.innerHTML = '';

    const badgesData = [
      { id: 'b1', name: 'Primeiro Compilador', desc: 'Completou a primeira lição de C++' },
      { id: 'b2', name: 'Engenheiro de Hardware', desc: 'Configurou um pino digital com sucesso' },
      { id: 'b3', name: 'Mestre da Robótica', desc: 'Completou o módulo de saídas digitais' }
    ];

    badgesData.forEach(b => {
      const isUnlocked = Progress.state.unlockedBadges.includes(b.id) || Progress.state.completedLessons.length > 0;
      container.innerHTML += `
        <div class="project-card" style="opacity: ${isUnlocked ? '1' : '0.4'}">
          <div class="project-body">
            <div style="font-size:2rem; margin-bottom:10px;">🏆</div>
            <div class="project-title">${b.name}</div>
            <div class="project-desc">${b.desc}</div>
            <div style="font-size:0.8rem; font-weight:800; color:${isUnlocked ? 'var(--primary)' : 'var(--text-muted)'}">
              ${isUnlocked ? 'DESBLOQUEADO' : 'BLOQUEADO'}
            </div>
          </div>
        </div>
      `;
    });
  },

  renderCurrentStep() {
    const step = Exercises.activeLesson.steps[Exercises.currentStepIdx];
    const body = document.getElementById('lesson-body');
    const btn = document.getElementById('btn-step-action');
    const skipBtn = document.getElementById('btn-skip-step');
    
    document.getElementById('feedback-sheet').className = 'feedback-sheet';
    Exercises.selectedOptionIdx = null;
    Exercises.selectedSlotChip = null;

    btn.disabled = true;

    const isInformative = ['intro', 'explanation', 'interactive_anatomy'].includes(step.type);
    if (isInformative) {
      skipBtn.classList.add('hidden');
      btn.disabled = false;
    } else {
      skipBtn.classList.remove('hidden');
    }

    const totalSteps = Exercises.activeLesson.steps.length;
    document.getElementById('lesson-progress-fill').style.width = Math.round(((Exercises.currentStepIdx + 1) / totalSteps) * 100) + '%';
    document.getElementById('step-counter').innerText = `ETAPA ${Exercises.currentStepIdx + 1} DE ${totalSteps}`;

    let html = `
      <span class="step-badge ${step.badgeType || 'type-info'}">${step.badge || 'Aprender'}</span>
      <div class="step-title">${step.title}</div>
      <div class="step-text">${step.text || ''}</div>
    `;

    if (step.code) {
      html += `<div class="code-snippet">${step.code}</div>`;
    }

    if (step.type === 'interactive_anatomy') {
      btn.innerText = 'Entendi →';
      html += `<div class="interactive-anatomy-area"><div class="anatomy-code-line">`;
      step.tokens.forEach((t, idx) => {
        html += `<span class="anatomy-token" onclick="UI.selectAnatomyToken(${idx})">${t.label}</span>`;
      });
      html += `</div>`;
      step.tokens.forEach((t, idx) => {
        html += `
          <div class="anatomy-explanation-box" id="anat-exp-${idx}">
            <div class="anatomy-exp-title">${t.expTitle}</div>
            <div class="anatomy-exp-text">${t.expText}</div>
          </div>
        `;
      });
      html += `</div>`;
    } else if (step.type === 'interactive_slot') {
      btn.innerText = 'Verificar';
      html += `
        <div class="code-slot-area">
          <span>${step.codeBefore || ''}</span>
          <span class="active-code-slot" id="active-slot">___</span>
          <span>${step.codeAfter || ''}</span>
        </div>
        <div class="chip-palette">
      `;
      step.chips.forEach(chip => {
        html += `<button class="chip-btn" onclick="Exercises.selectSlotChip('${chip}', this)">${chip}</button>`;
      });
      html += `</div>`;
    } else if (step.type === 'code_challenge') {
      btn.innerText = 'Verificar';
      html += `<div class="fill-input-area">`;
      // A referência visual foi removida daqui propositalmente para evitar que apenas copiem o código acima.
      html += `<input type="text" id="challenge-input" class="inline-code-input" placeholder="Digite o código aqui..." autocomplete="off" oninput="Exercises.checkInputState()"></div>`;
    } else if (step.type === 'quiz' || step.type === 'true_false' || step.type === 'output_quiz') {
      btn.innerText = 'Verificar';
      html += `<div class="options-stack">`;
      step.options.forEach((opt, idx) => {
        html += `<button class="option-card" onclick="Exercises.selectOption(${idx}, this)">${opt}</button>`;
      });
      html += `</div>`;
    } else if (step.type === 'intro' || step.type === 'explanation') {
      btn.innerText = 'Continuar';
    }

    body.innerHTML = html;
  },

  selectAnatomyToken(idx) {
    document.querySelectorAll('.anatomy-token').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.anatomy-explanation-box').forEach(el => el.classList.remove('show'));
    
    document.querySelectorAll('.anatomy-token')[idx].classList.add('active');
    document.getElementById(`anat-exp-${idx}`).classList.add('show');
  },

  showCompletionScreen(lesson, correctCount, totalSteps) {
    document.getElementById('lesson-screen').classList.add('hidden');
    const compScreen = document.getElementById('completion-screen');
    const container = document.getElementById('completion-container');
    compScreen.classList.remove('hidden');

    let learnedHtml = '';
    if (lesson.learnedConcepts) {
      lesson.learnedConcepts.forEach(c => { learnedHtml += `<li class="learned-item">✓ ${c}</li>`; });
    }

    const nextTarget = Progress.getNextUncompletedLesson();
    const nextLessonTitle = nextTarget && nextTarget.lesson ? nextTarget.lesson.title : 'Todas as trilhas concluídas!';

    container.innerHTML = `
      <div class="completion-badge-icon">🎉</div>
      <div class="completion-hero-title">Lição Concluída!</div>
      <div class="completion-lesson-name">${lesson.title}</div>
      
      <div class="completion-stats-grid">
        <div class="stat-box"><div class="stat-val">+100 XP</div><div class="stat-lbl">Recompensa</div></div>
        <div class="stat-box"><div class="stat-val">${correctCount}/${totalSteps}</div><div class="stat-lbl">Acertos da Aula</div></div>
      </div>

      <div class="learned-card">
        <div class="learned-title">O que você aprendeu:</div>
        <ul class="learned-list">${learnedHtml}</ul>
      </div>

      <div style="width:100%; text-align:left; font-size:0.85rem; font-weight:700; color:var(--text-muted);">
        PRÓXIMA LIÇÃO: <span style="color:var(--primary);">${nextLessonTitle}</span>
      </div>

      <button class="btn-action-primary" style="margin-top:10px;" onclick="UI.exitCompletionAndContinue()">Continuar trilha →</button>
    `;
  },

  exitCompletionAndContinue() {
    document.getElementById('completion-screen').classList.add('hidden');
    Progress.updateUI();
    this.switchView('dashboard', document.getElementById('nav-dash'));
  },

  exitLesson() {
    document.getElementById('lesson-screen').classList.add('hidden');
    document.getElementById('feedback-sheet').className = 'feedback-sheet';
    Progress.updateUI();
  }
};
