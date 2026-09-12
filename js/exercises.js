const Exercises = {
  activeLesson: null,
  currentStepIdx: 0,
  selectedOptionIdx: null,
  selectedSlotChip: null,
  isCurrentStepCorrect: false,

  correctAnswersCount: 0,
  skippedAnswersCount: 0,

  startLesson(lessonId) {
    this.activeLesson = null;
    for (const mod of LessonsData) {
      const found = mod.lessons.find(l => l.id === lessonId);
      if (found) { this.activeLesson = found; break; }
    }
    if (!this.activeLesson) return;

    this.currentStepIdx = 0;
    this.correctAnswersCount = 0;
    this.skippedAnswersCount = 0;

    document.getElementById('completion-screen').classList.add('hidden');
    document.getElementById('lesson-screen').classList.remove('hidden');
    UI.renderCurrentStep();
  },

  selectOption(idx, btnElement) {
    this.selectedOptionIdx = idx;
    document.querySelectorAll('.option-card').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
    document.getElementById('btn-step-action').disabled = false;
  },

  selectSlotChip(chipValue, btnElement) {
    this.selectedSlotChip = chipValue;
    document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');

    const slotEl = document.getElementById('active-slot');
    if (slotEl) {
      slotEl.innerText = chipValue;
      slotEl.classList.add('filled');
    }
    document.getElementById('btn-step-action').disabled = false;
  },

  checkInputState() {
    const btn = document.getElementById('btn-step-action');
    const inputChallenge = document.getElementById('challenge-input');

    if (inputChallenge && inputChallenge.value.trim().length > 0) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  },

  skipStep() {
    this.skippedAnswersCount++;
    this.nextStep();
  },

  handleStepAction() {
    const step = this.activeLesson.steps[this.currentStepIdx];
    const sheet = document.getElementById('feedback-sheet');

    if (['intro', 'explanation', 'code_breakdown'].includes(step.type)) {
      this.nextStep();
      return;
    }

    this.isCurrentStepCorrect = false;

    if (step.type === 'interactive_slot') {
      this.isCurrentStepCorrect = this.selectedSlotChip === step.correctAnswer;
    } else if (step.type === 'quiz' || step.type === 'output_quiz' || step.type === 'true_false') {
      if (this.selectedOptionIdx === null) return;
      this.isCurrentStepCorrect = this.selectedOptionIdx === step.correct;
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
      this.correctAnswersCount++;
    } else {
      UI.playSound('wrong');
      sheet.className = 'feedback-sheet wrong';
      document.getElementById('fb-title').innerHTML = '✕ Ainda não.';
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
        Progress.addXP(100);
        Progress.completeLesson(this.activeLesson.id);
        UI.showCompletionScreen(this.activeLesson, this.correctAnswersCount, this.activeLesson.steps.length);
      } else {
        Progress.resetHearts();
        UI.exitLesson();
      }
    }
  }
};
