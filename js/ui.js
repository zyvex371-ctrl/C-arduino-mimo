const UI = {
  audioCtx: new (window.AudioContext || window.webkitAudioContext)(),
  
  // Audio omitted for brevity, keep the existing playSound function
  playSound(type) { /* same as before */ },
  switchView(viewId, btn) { /* same as before */ },

  renderModules() {
    const container = document.getElementById('modules-container');
    if (!container) return;
    container.innerHTML = '';

    let prevLessonDone = true;

    LessonsData.forEach(mod => {
      let modHtml = `<div class="module-card"><div class="module-header">${mod.title}</div><div class="module-desc">${mod.desc}</div><div class="lessons-tree">`;

      mod.lessons.forEach(lesson => {
        const isDone = Progress.state.completedLessons.includes(lesson.id);
        const isUnlocked = isDone || prevLessonDone;

        let statusClass = 'locked';
        let actionText = '🔒 Bloqueado';

        // LÓGICA RIGOROSA DE STATUS DA HOME (Única Fonte de Verdade)
        if (isDone) { 
          statusClass = 'completed'; 
          actionText = '✓ Concluída'; 
        } else if (isUnlocked && Progress.state.lastCompleted) {
           // Se acabou de liberar a próxima, é "Começar"
           statusClass = 'unlocked'; 
           actionText = '▶ Começar';
        } else if (isUnlocked) {
          // Se não terminou, mas não acabou de voltar da tela de conclusão (já tinha começado a trilha antes)
          statusClass = 'unlocked'; 
          actionText = '→ Continuar';
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
      container.innerHTML += modHtml;
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

    // Se é informativo, não exibe o Pular e libera o botão principal
    const isInformative = ['intro', 'explanation', 'interactive_anatomy'].includes(step.type);
    if (isInformative) { skipBtn.classList.add('hidden'); btn.disabled = false; } 
    else { skipBtn.classList.remove('hidden'); }

    const totalSteps = Exercises.activeLesson.steps.length;
    document.getElementById('lesson-progress-fill').style.width = Math.round(((Exercises.currentStepIdx + 1) / totalSteps) * 100) + '%';
    document.getElementById('step-counter').innerText = `${Exercises.currentStepIdx + 1} DE ${totalSteps}`;

    let html = `
      <span class="step-badge ${step.badgeType || 'type-info'}">${step.badge || 'Aprender'}</span>
      <div class="step-title">${step.title}</div>
      <div class="step-text">${step.text || ''}</div>
    `;

    // 1. ANATOMIA INTERATIVA (Novo)
    if (step.type === 'interactive_anatomy') {
      btn.innerText = 'Entendi →';
      html += `<div class="interactive-anatomy-area"><div class="anatomy-code-line" id="anatomy-tokens">`;
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
    } 
    // 2. SLOTS (Mantido)
    else if (step.type === 'interactive_slot') {
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
    } 
    // 3. DIGITAÇÃO (Melhorado: Campo vazio e Referência acima)
    else if (step.type === 'code_challenge') {
      btn.innerText = 'Verificar';
      html += `<div class="fill-input-area">`;
      if (step.referenceCode) {
        html += `<div class="typing-reference">${step.referenceCode}</div>`;
      }
      html += `<input type="text" id="challenge-input" class="inline-code-input" placeholder="Digite o código aqui..." autocomplete="off" oninput="Exercises.checkInputState()"></div>`;
    }
    // QUIZ PADRÃO
    else if (step.type === 'quiz' || step.type === 'true_false' || step.type === 'output_quiz') {
      btn.innerText = 'Verificar';
      html += `<div class="options-stack">`;
      step.options.forEach((opt, idx) => {
        html += `<button class="option-card" onclick="Exercises.selectOption(${idx}, this)">${opt}</button>`;
      });
      html += `</div>`;
    } 
    else if (step.type === 'intro' || step.type === 'explanation') {
      btn.innerText = 'Continuar';
      if (step.code) html += `<div class="code-snippet">${step.code}</div>`;
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

    container.innerHTML = `
      <div class="completion-badge-icon">🎉</div>
      <div class="completion-hero-title">Lição Concluída!</div>
      <div class="completion-lesson-name">${lesson.title}</div>
      <div class="completion-stats-grid">
        <div class="stat-box"><div class="stat-val">+100 XP</div><div class="stat-lbl">Recompensa</div></div>
        <div class="stat-box"><div class="stat-val">${correctCount}/${totalSteps}</div><div class="stat-lbl">Acertos</div></div>
      </div>
      <div class="learned-card">
        <div class="learned-title">O que você aprendeu:</div>
        <ul class="learned-list">${learnedHtml}</ul>
      </div>
      <button class="btn-action-primary" onclick="UI.exitCompletionAndContinue()">Continuar trilha →</button>
    `;
  },

  exitCompletionAndContinue() {
    document.getElementById('completion-screen').classList.add('hidden');
    Progress.state.lastCompleted = true; // Sinaliza que acabou de terminar
    Progress.updateUI();
    this.switchView('dashboard', document.getElementById('nav-dash'));
  },

  exitLesson() {
    document.getElementById('lesson-screen').classList.add('hidden');
    document.getElementById('feedback-sheet').className = 'feedback-sheet';
    Progress.state.lastCompleted = false; // Usuário saiu no meio, não acabou de terminar
    Progress.updateUI();
  }
};
