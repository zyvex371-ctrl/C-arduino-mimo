const Exercises = {
  activeLesson: null,
  currentStepIdx: 0,

  selectedOptionIdx: null,
  selectedSlotChip: null,

  isCurrentStepCorrect: false,
  correctAnswersCount: 0,

  // Quantidade de atividades que realmente possuem resposta.
  assessedActivitiesCount: 0,

  // Termos já explorados na anatomia interativa.
  activeAnatomyTokens: [],


  /*
   * ==========================================================
   * INICIAR LIÇÃO
   * ==========================================================
   */

  startLesson(lessonId) {
    let foundLesson = null;

    for (const module of LessonsData) {
      const found =
        module.lessons.find(
          lesson => lesson.id === lessonId
        );

      if (found) {
        foundLesson = found;
        break;
      }
    }

    if (!foundLesson) {
      console.error(
        'Lição não encontrada:',
        lessonId
      );
      return;
    }

    this.activeLesson = foundLesson;

    this.currentStepIdx = 0;

    this.selectedOptionIdx = null;
    this.selectedSlotChip = null;

    this.isCurrentStepCorrect = false;
    this.correctAnswersCount = 0;
    this.assessedActivitiesCount = 0;

    this.activeAnatomyTokens = [];


    const completionScreen =
      document.getElementById(
        'completion-screen'
      );

    const lessonScreen =
      document.getElementById(
        'lesson-screen'
      );

    if (completionScreen) {
      completionScreen.classList.add(
        'hidden'
      );
    }

    if (lessonScreen) {
      lessonScreen.classList.remove(
        'hidden'
      );
    }


    UI.renderCurrentStep();
  },


  /*
   * ==========================================================
   * SELECIONAR ALTERNATIVA
   * ==========================================================
   */

  selectOption(
    index,
    buttonElement
  ) {

    /*
     * Se já existe feedback aberto,
     * não permite mudar a resposta.
     */
    const feedback =
      document.getElementById(
        'feedback-sheet'
      );

    if (
      feedback &&
      (
        feedback.classList.contains('correct') ||
        feedback.classList.contains('wrong')
      )
    ) {
      return;
    }


    this.selectedOptionIdx =
      index;


    document
      .querySelectorAll(
        '.option-card'
      )
      .forEach(button => {
        button.classList.remove(
          'selected'
        );
      });


    if (buttonElement) {
      buttonElement.classList.add(
        'selected'
      );
    }


    const actionButton =
      document.getElementById(
        'btn-step-action'
      );

    if (actionButton) {
      actionButton.disabled = false;
      actionButton.innerText =
        'Verificar';
    }
  },


  /*
   * ==========================================================
   * SELECIONAR CHIP
   * ==========================================================
   */

  selectSlotChip(
    chipValue,
    buttonElement
  ) {

    const feedback =
      document.getElementById(
        'feedback-sheet'
      );

    if (
      feedback &&
      (
        feedback.classList.contains('correct') ||
        feedback.classList.contains('wrong')
      )
    ) {
      return;
    }


    this.selectedSlotChip =
      chipValue;


    document
      .querySelectorAll(
        '.chip-btn'
      )
      .forEach(button => {
        button.classList.remove(
          'selected'
        );
      });


    if (buttonElement) {
      buttonElement.classList.add(
        'selected'
      );
    }


    const slot =
      document.getElementById(
        'active-slot'
      );

    if (slot) {
      slot.innerText =
        chipValue;

      slot.classList.add(
        'filled'
      );
    }


    const actionButton =
      document.getElementById(
        'btn-step-action'
      );

    if (actionButton) {
      actionButton.disabled = false;
      actionButton.innerText =
        'Verificar';
    }
  },


  /*
   * ==========================================================
   * INPUT DO DESAFIO
   * ==========================================================
   */

  checkInputState() {

    const button =
      document.getElementById(
        'btn-step-action'
      );

    const input =
      document.getElementById(
        'challenge-input'
      );

    if (!button || !input) {
      return;
    }


    const hasText =
      input.value.trim().length > 0;


    button.disabled =
      !hasText;
  },


  /*
   * ==========================================================
   * PULAR
   * ==========================================================
   */

  skipStep() {

    if (
      !this.activeLesson
    ) {
      return;
    }


    const step =
      this.activeLesson.steps[
        this.currentStepIdx
      ];

    if (!step) {
      return;
    }


    /*
     * Etapas de explicação/anatomia
     * não podem ser puladas.
     */
    if (
      [
        'intro',
        'explanation',
        'interactive_anatomy'
      ].includes(step.type)
    ) {
      return;
    }


    /*
     * Pular não conta como acerto.
     *
     * Também não tira vida.
     */
    this.isCurrentStepCorrect =
      false;


    this.advanceToNextStep();
  },


  /*
   * ==========================================================
   * VERIFICAR ETAPA
   * ==========================================================
   */

  handleStepAction() {

    if (
      !this.activeLesson
    ) {
      return;
    }


    const step =
      this.activeLesson.steps[
        this.currentStepIdx
      ];

    if (!step) {
      return;
    }


    /*
     * Etapas puramente educativas.
     */
    if (
      [
        'intro',
        'explanation'
      ].includes(step.type)
    ) {
      this.advanceToNextStep();
      return;
    }


    /*
     * Anatomia precisa ser explorada
     * antes de continuar.
     */
    if (
      step.type ===
      'interactive_anatomy'
    ) {

      const allExplored =
        Array.isArray(
          step.tokens
        ) &&
        step.tokens.every(
          (_, index) =>
            this.activeAnatomyTokens.includes(
              index
            )
        );


      if (!allExplored) {
        return;
      }


      this.isCurrentStepCorrect =
        true;

      this.showCorrectFeedback(
        step
      );

      return;
    }


    /*
     * A partir daqui temos atividades
     * avaliativas.
     */
    let answered = false;

    this.isCurrentStepCorrect =
      false;


    /*
     * ======================================================
     * SLOT
     * ======================================================
     */

    if (
      step.type ===
      'interactive_slot'
    ) {

      if (
        this.selectedSlotChip === null
      ) {
        return;
      }

      answered = true;

      this.isCurrentStepCorrect =
        this.selectedSlotChip ===
        step.correctAnswer;
    }


    /*
     * ======================================================
     * QUIZ
     * ======================================================
     */

    else if (
      step.type === 'quiz' ||
      step.type === 'output_quiz' ||
      step.type === 'true_false'
    ) {

      if (
        this.selectedOptionIdx === null
      ) {
        return;
      }

      answered = true;

      this.isCurrentStepCorrect =
        this.selectedOptionIdx ===
        step.correct;
    }


    /*
     * ======================================================
     * DESAFIO DE CÓDIGO
     * ======================================================
     */

    else if (
      step.type ===
      'code_challenge'
    ) {

      const input =
        document.getElementById(
          'challenge-input'
        );

      if (!input) {
        return;
      }


      const value =
        this.normalizeCode(
          input.value
        );


      if (!value) {
        return;
      }

      answered = true;


      /*
       * Método preferencial:
       * correctAnswer
       *
       * Método compatível:
       * correctKeywords
       */

      if (
        typeof step.correctAnswer ===
        'string'
      ) {

        this.isCurrentStepCorrect =
          value ===
          this.normalizeCode(
            step.correctAnswer
          );

      }

      else if (
        Array.isArray(
          step.correctKeywords
        )
      ) {

        this.isCurrentStepCorrect =
          step.correctKeywords.every(
            keyword =>
              value.includes(
                this.normalizeCode(
                  keyword
                )
              )
          );

      }

      else {

        /*
         * Sem regra de validação,
         * não aprovamos automaticamente.
         */
        this.isCurrentStepCorrect =
          false;
      }
    }


    /*
     * Tipo desconhecido.
     */
    else {

      console.warn(
        'Tipo de exercício não reconhecido:',
        step.type
      );

      return;
    }


    if (!answered) {
      return;
    }


    /*
     * Conta a atividade somente uma vez
     * como atividade avaliada.
     *
     * Uma tentativa errada + outra correta
     * continua sendo UMA atividade.
     */
    if (
      !step._countedAsAssessed
    ) {

      step._countedAsAssessed =
        true;

      this.assessedActivitiesCount++;
    }


    /*
     * ======================================================
     * CORRETO
     * ======================================================
     */

    if (
      this.isCurrentStepCorrect
    ) {

      this.correctAnswersCount++;

      this.showCorrectFeedback(
        step
      );

    }


    /*
     * ======================================================
     * ERRADO
     * ======================================================
     */

    else {

      this.showWrongFeedback(
        step
      );
    }
  },


  /*
   * ==========================================================
   * NORMALIZAR CÓDIGO
   * ==========================================================
   */

  normalizeCode(value) {

    return String(value || '')
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/\s*([(),;=+\-*/<>])\s*/g, '$1')
      .toLowerCase();
  },


  /*
   * ==========================================================
   * FEEDBACK CORRETO
   * ==========================================================
   */

  showCorrectFeedback(step) {

    const sheet =
      document.getElementById(
        'feedback-sheet'
      );

    const title =
      document.getElementById(
        'fb-title'
      );

    const text =
      document.getElementById(
        'fb-text'
      );

    const button =
      document.getElementById(
        'btn-feedback-action'
      );


    if (!sheet) {
      return;
    }


    UI.playSound('correct');


    sheet.className =
      'feedback-sheet correct';


    if (title) {
      title.innerText =
        '✓ Perfeito!';
    }


    if (text) {

      text.innerText =
        step.explanation ||
        'Você acertou o conceito!';
    }


    if (button) {
      button.innerText =
        'Continuar';
    }
  },


  /*
   * ==========================================================
   * FEEDBACK ERRADO
   * ==========================================================
   */

  showWrongFeedback(step) {

    const sheet =
      document.getElementById(
        'feedback-sheet'
      );

    const title =
      document.getElementById(
        'fb-title'
      );

    const text =
      document.getElementById(
        'fb-text'
      );

    const button =
      document.getElementById(
        'btn-feedback-action'
      );


    if (!sheet) {
      return;
    }


    UI.playSound('wrong');


    /*
     * Perde uma vida, mas a lição continua.
     */
    Progress.decrementHeart();


    sheet.className =
      'feedback-sheet wrong';


    if (title) {
      title.innerText =
        '✕ Ainda não!';
    }


    if (text) {

      text.innerText =
        step.wrongExplanation ||
        step.explanation ||
        'Revise o conceito e tente novamente.';
    }


    if (button) {
      button.innerText =
        'Tentar novamente';
    }
  },


  /*
   * ==========================================================
   * BOTÃO DO FEEDBACK
   * ==========================================================
   */

  handleFeedbackAction() {

    const sheet =
      document.getElementById(
        'feedback-sheet'
      );


    if (
      !this.isCurrentStepCorrect
    ) {

      /*
       * ERRADO:
       *
       * fecha feedback
       * recria exercício
       * permite tentar novamente
       *
       * NÃO avança.
       */
      if (sheet) {
        sheet.className =
          'feedback-sheet';
      }

      this.selectedOptionIdx =
        null;

      this.selectedSlotChip =
        null;

      UI.renderCurrentStep();

      return;
    }


    /*
     * CORRETO:
     * agora sim avança.
     */
    if (sheet) {
      sheet.className =
        'feedback-sheet';
    }


    this.advanceToNextStep();
  },


  /*
   * ==========================================================
   * AVANÇAR
   * ==========================================================
   */

  advanceToNextStep() {

    if (
      !this.activeLesson
    ) {
      return;
    }


    this.currentStepIdx++;


    if (
      this.currentStepIdx <
      this.activeLesson.steps.length
    ) {

      this.isCurrentStepCorrect =
        false;

      this.selectedOptionIdx =
        null;

      this.selectedSlotChip =
        null;

      this.activeAnatomyTokens =
        [];

      UI.renderCurrentStep();

      return;
    }


    /*
     * ======================================================
     * LIÇÃO TERMINADA
     * ======================================================
     */

    const lessonId =
      this.activeLesson.id;


    /*
     * XP é dado UMA vez ao terminar.
     */
    Progress.addXP(100);

    Progress.completeLesson(
      lessonId
    );


    /*
     * Mostra a tela de conclusão
     * fora da contagem de etapas.
     */
    UI.showCompletionScreen(
      this.activeLesson,
      this.correctAnswersCount,
      this.assessedActivitiesCount
    );
  }
};
