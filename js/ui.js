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
    if (!container) return;

    container.innerHTML = '';
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
        let statusIcon = '🔒';

        if (isDone) { statusClass = 'completed'; statusIcon = '✅ Concluída'; }
        else if (isUnlocked) { statusClass = 'unlocked'; statusIcon = '▶ Começar'; }

        const clickAction = isUnlocked ? `onclick="Exercises.startLesson('${lesson.id}')"` : '';

        modHtml += `
          <div class="lesson-node ${statusClass}" ${clickAction}>
            <div class="node-left">
              <span class="node-tag">${lesson.tag}</span>
              <span class="node-title">${lesson.title}</span>
            </div>
            <span style="font-size:0.85rem; font-weight:800;">${statusIcon}</span>
          </div>
        `;

        prevLessonDone = isDone;
      });

      modHtml += `</div></div>`;
      container.innerHTML += modHtml;
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
    const sheet = document.getElementById('feedback-sheet');
    
    sheet.className = 'feedback-sheet';
    Exercises.selectedOptionIdx = null;
    Exercises.userPlacedBlocks = [];

    btn.disabled = true;

    const isInformative = ['intro', 'explanation', 'code_breakdown', 'summary', 'completion'].includes(step.type);
    if (isInformative) {
      skipBtn.classList.add('hidden');
      btn.disabled = false;
    } else {
      skipBtn.classList.remove('hidden');
    }

    const totalSteps = Exercises.activeLesson.steps.length;
    const pct = Math.round(((Exercises.currentStepIdx + 1) / totalSteps) * 100);
    document.getElementById('lesson-progress-fill').style.width = pct + '%';
    document.getElementById('step-counter').innerText = `ETAPA ${Exercises.currentStepIdx + 1} DE ${totalSteps}`;

    let html = `
      <span class="step-badge">${step.badge || 'Aprender'}</span>
      <div class="step-title">${step.title}</div>
      <div class="step-text">${step.text || ''}</div>
    `;

    if (step.code) {
      html += `<div class="code-snippet">${step.code}</div>`;
    }

    if (step.type === 'code_breakdown' && step.breakdown) {
      btn.innerText = 'Entendi →';
      html += `<div class="breakdown-grid">`;
      step.breakdown.forEach(item => {
        html += `
          <div class="breakdown-card">
            <div class="breakdown-token">${item.token}</div>
            <div class="breakdown-label">${item.label}</div>
          </div>
        `;
      });
      html += `</div>`;
    } else if (step.type === 'summary' && step.summaryItems) {
      btn.innerText = 'Continuar →';
      html += `<div class="summary-card">`;
      step.summaryItems.forEach(item => {
        html += `<div class="summary-item">${item}</div>`;
      });
      html += `</div>`;
    } else if (step.type === 'completion') {
      btn.innerText = 'CONTINUAR PARA A PRÓXIMA LIÇÃO →';
      html += `
        <div class="completion-card">
          <div class="completion-icon">🎉</div>
          <div style="font-size:1.4rem; font-weight:800; color:#fff;">${step.title}</div>
          <div style="font-size:1rem; color:var(--text-muted); font-weight:600;">"${step.subtitle || Exercises.activeLesson.title}"</div>
          <div class="completion-xp-tag">+50 XP GANHOS</div>
          <div style="width:100%; height:12px; background:var(--editor-bg); border-radius:6px; overflow:hidden; border:1px solid var(--panel-border); margin:10px 0;">
            <div style="width:100%; height:100%; background:linear-gradient(90deg, var(--primary), var(--secondary));"></div>
          </div>
          <div class="summary-card" style="width:100%; margin-bottom:0; text-align:left;">
      `;
      if (step.summaryItems) {
        step.summaryItems.forEach(item => {
          html += `<div class="summary-item">${item}</div>`;
        });
      }
      html += `</div></div>`;
    } else if (step.type === 'intro' || step.type === 'explanation') {
      btn.innerText = 'Continuar';
    } else if (step.type === 'quiz' || step.type === 'output_quiz' || step.type === 'true_false') {
      btn.innerText = 'Verificar';
      html += `<div class="options-stack">`;
      step.options.forEach((opt, idx) => {
        html += `<button class="option-card" onclick="Exercises.selectOption(${idx}, this)">${opt}</button>`;
      });
      html += `</div>`;
    } else if (step.type === 'fill_blank') {
      btn.innerText = 'Verificar';
      const templateWithInput = step.codeTemplate.replace('___', `<input type="text" id="blank-input" class="inline-code-input" placeholder="?" autocomplete="off" oninput="Exercises.checkInputState()">`);
      html += `<div class="fill-input-area">${templateWithInput}</div>`;
    } else if (step.type === 'blocks') {
      btn.innerText = 'Verificar';
      html += `
        <div class="answer-drop-zone" id="drop-zone"></div>
        <div class="blocks-container" id="blocks-palette"></div>
      `;
    } else if (step.type === 'code_challenge') {
      btn.innerText = 'Verificar';
      html += `
        <div class="fill-input-area">
          <input type="text" id="challenge-input" class="inline-code-input" style="width:100%; text-align:left;" placeholder="${step.placeholder}" autocomplete="off" oninput="Exercises.checkInputState()">
        </div>
      `;
    }

    body.innerHTML = html;

    if (step.type === 'blocks') {
      Exercises.renderBlocksWidget(step.available);
    }
  },

  exitLesson() {
    document.getElementById('lesson-screen').classList.add('hidden');
    document.getElementById('feedback-sheet').className = 'feedback-sheet';
  }
};
