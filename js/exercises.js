const Exercises = {
  activeLesson: null,
  currentStepIdx: 0,
  selectedOptionIdx: null,
  userPlacedBlocks: [],
  isCurrentStepCorrect: false,

  startLesson(lessonId) {
    this.activeLesson = null;
    for (const mod of LessonsData) {
      const found = mod.lessons.find(l => l.id === lessonId);
      if (found) { this.activeLesson = found; break; }
    }
    if (!this.activeLesson) return;

    this.currentStepIdx = 0;
    document.getElementById('lesson-screen').classList.remove('hidden');
    UI.renderCurrentStep();
  },

  selectOption(idx, btnElement) {
    this.selectedOptionIdx = idx;
    document.querySelectorAll('.option-card').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
    document.getElementById('btn-step-action').disabled = false;
  },

  renderBlocksWidget(available) {
    const palette = document.getElementById('blocks-palette');
    const dropZone = document.getElementById('drop-zone');
    const btn = document.getElementById('btn-step-action');
    if (!palette || !dropZone) return;

    palette.innerHTML = '';
    available.forEach(text => {
      if (!this.userPlacedBlocks.includes(text)) {
        const b = document.createElement('button');
        b.className = 'code-block-btn';
        b.innerText = text;
        b.onclick = () => { this.userPlacedBlocks.push(text); this.renderBlocksWidget(available); };
        palette.appendChild(b);
      }
    });

    dropZone.innerHTML = '';
    this.userPlacedBlocks.forEach((text, i) => {
      const b = document.createElement('button');
      b.className = 'code-block-btn';
      b.style.borderColor = 'var(--primary)';
      b.innerText = text;
      b.onclick = () => { this.userPlacedBlocks.splice(i, 1); this.renderBlocksWidget(available); };
      dropZone.appendChild(b);
    });

    if (btn) btn.disabled = this.userPlacedBlocks.length === 0;
  },

  checkInputState() {
    const btn = document.getElementById('btn-step-action');
    const inputBlank = document.getElementById('blank-input');
    const inputChallenge = document.getElementById('challenge-input');

    if (inputBlank && inputBlank.value.trim().length > 0) {
      btn.disabled = false;
    } else if (inputChallenge && inputChallenge.value.trim().length > 0) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  },

  skipStep() {
    this.nextStep();
  },

  handleStepAction() {
    const step = this.activeLesson.steps[this.currentStepIdx];
    const sheet = document.getElementById('feedback-sheet');

    if (['intro', 'explanation', 'code_breakdown', 'summary'].includes(step.type)) {
      this.nextStep();
      return;
    }

    if (step.type === 'completion') {
      Progress.addXP(50);
      Progress.completeLesson(this.activeLesson.id);
      UI.exitLesson();
      return;
    }

    this.isCurrentStepCorrect = false;

    if (step.type === 'quiz' || step.type === 'output_quiz' || step.type === 'true_false') {
      if (this.selectedOptionIdx === null) return;
      this.isCurrentStepCorrect = this.selectedOptionIdx === step.correct;
    } else if (step.type === 'fill_blank') {
      const val = document.getElementById('blank-input').value.trim();
      this.isCurrentStepCorrect = val.toLowerCase() === step.correctAnswer.toLowerCase();
    } else if (step.type === 'blocks') {
      this.isCurrentStepCorrect = this.userPlacedBlocks.join('') === step.correctOrder.join('');
    } else if (step.type === 'code_challenge') {
      const val = document.getElementById('challenge-input').value.trim();
      this.isCurrentStepCorrect = step.correctKeywords.every(k => val.includes(k));
    }

    const fbBtn = document.getElementById('btn-feedback-action');

    if (this.isCurrentStepCorrect) {
      UI.playSound('correct');
      sheet.className = 'feedback-sheet correct';
      document.getElementById('fb-title').innerHTML = '✓ Correto!';
      document.getElementById('fb-text').innerText = step.explanation || 'Você compreendeu a lógica!';
      fbBtn.innerText = 'Continuar';
      Progress.addXP(10);
    } else {
      UI.playSound('wrong');
      sheet.className = 'feedback-sheet wrong';
      document.getElementById('fb-title').innerHTML = '✕ Quase!';
      document.getElementById('fb-text').innerText = step.explanation || 'Confira a explicação e tente novamente.';
      fbBtn.innerText = 'Tentar novamente';
      Progress.decrementHeart();
    }
  },

  handleFeedbackAction() {
    const sheet = document.getElementById('feedback-sheet');
    sheet.className = 'feedback-sheet';

    if (this.isCurrentStepCorrect) {
      this.nextStep();
    } else {
      UI.renderCurrentStep();
    }
  },

  nextStep() {
    this.currentStepIdx++;
    if (this.currentStepIdx < this.activeLesson.steps.length && Progress.state.hearts > 0) {
      UI.renderCurrentStep();
    } else {
      if (Progress.state.hearts > 0) {
        Progress.completeLesson(this.activeLesson.id);
      } else {
        Progress.resetHearts();
      }
      UI.exitLesson();
    }
  }
};

