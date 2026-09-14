const Exercises = {
  activeLesson: null,
  currentStepIdx: 0,

  selectedOptionIdx: null,
  selectedSlotChip: null,

  isCurrentStepCorrect: false,
  correctAnswersCount: 0,

  assessedActivitiesCount: 0,
  assessedStepIndices: [],

  activeAnatomyTokens: [],


  /* ==========================================================
     INICIAR LIÇÃO
  ========================================================== */

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
        "Lição não encontrada:",
        lessonId
      );

      return;
    }


    /* ----------------------------------------------------------
       RESET COMPLETO DA LIÇÃO
    ---------------------------------------------------------- */

    this.activeLesson =
      foundLesson;

    this.currentStepIdx =
      0;

    this.selectedOptionIdx =
      null;

    this.selectedSlotChip =
      null;

    this.isCurrentStepCorrect =
      false;

    this.correctAnswersCount =
      0;

    this.assessedActivitiesCount =
      0;

    this.assessedStepIndices =
      [];

    this.activeAnatomyTokens =
      [];


    /* ----------------------------------------------------------
       REMOVE ESTADOS TEMPORÁRIOS DAS ETAPAS
       
       Isso evita que uma etapa fique marcada como respondida
       quando o usuário abre a mesma lição novamente.
    ---------------------------------------------------------- */

    if (
      Array.isArray(
        foundLesson.steps
      )
    ) {

      foundLesson.steps.forEach(
        step => {

          delete step._countedAsAssessed;
          delete step._answeredCorrectly;

        }
      );
    }


    /* ----------------------------------------------------------
       FECHA TELA DE CONCLUSÃO
    ---------------------------------------------------------- */

    const completionScreen =
      document.getElementById(
        "completion-screen"
      );

    const lessonScreen =
      document.getElementById(
        "lesson-screen"
      );


    if (completionScreen) {

      completionScreen.classList.add(
        "hidden"
      );
    }


    if (lessonScreen) {

      lessonScreen.classList.remove(
        "hidden"
      );
    }


    /* ----------------------------------------------------------
       RENDERIZA PRIMEIRA ETAPA
    ---------------------------------------------------------- */

    if (
      typeof UI.renderCurrentStep ===
      "function"
    ) {

      UI.renderCurrentStep();

    } else {

      console.error(
        "UI.renderCurrentStep() não está disponível."
      );
    }
  },


  /* ==========================================================
     SELECIONAR ALTERNATIVA
  ========================================================== */

  selectOption(
    index,
    buttonElement
  ) {

    const feedback =
      document.getElementById(
        "feedback-sheet"
      );


    /*
     * Se existe feedback aberto,
     * não permite alterar a resposta.
     */

    if (
      feedback &&
      (
        feedback.classList.contains(
          "correct"
        ) ||
        feedback.classList.contains(
          "wrong"
        )
      )
    ) {

      return;
    }


    this.selectedOptionIdx =
      index;


    document
      .querySelectorAll(
        ".option-card"
      )
      .forEach(button => {

        button.classList.remove(
          "selected"
        );
      });


    if (buttonElement) {

      buttonElement.classList.add(
        "selected"
      );
    }


    const actionButton =
      document.getElementById(
        "btn-step-action"
      );


    if (actionButton) {

      actionButton.disabled =
        false;

      actionButton.innerText =
        "Verificar";
    }
  },


  /* ==========================================================
     SELECIONAR CHIP
  ========================================================== */

  selectSlotChip(
    chipValue,
    buttonElement
  ) {

    const feedback =
      document.getElementById(
        "feedback-sheet"
      );


    if (
      feedback &&
      (
        feedback.classList.contains(
          "correct"
        ) ||
        feedback.classList.contains(
          "wrong"
        )
      )
    ) {

      return;
    }


    this.selectedSlotChip =
      String(chipValue);


    document
      .querySelectorAll(
        ".chip-btn"
      )
      .forEach(button => {

        button.classList.remove(
          "selected"
        );
      });


    if (buttonElement) {

      buttonElement.classList.add(
        "selected"
      );
    }


    const slot =
      document.getElementById(
        "active-slot"
      );


    if (slot) {

      slot.innerText =
        String(chipValue);

      slot.classList.add(
        "filled"
      );
    }


    const actionButton =
      document.getElementById(
        "btn-step-action"
      );


    if (actionButton) {

      actionButton.disabled =
        false;

      actionButton.innerText =
        "Verificar";
    }
  },


  /* ==========================================================
     INPUT DE CÓDIGO
  ========================================================== */

  checkInputState() {

    const button =
      document.getElementById(
        "btn-step-action"
      );

    const input =
      document.getElementById(
        "challenge-input"
      );


    if (!button || !input) {
      return;
    }


    const hasText =
      input.value.trim().length > 0;


    button.disabled =
      !hasText;


    if (hasText) {

      button.innerText =
        "Verificar";
    }
  },


  /* ==========================================================
     PULAR ETAPA
  ========================================================== */

  skipStep() {

    if (!this.activeLesson) {
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
     * Etapas educativas não podem ser puladas.
     */

    if (
      [
        "intro",
        "explanation",
        "interactive_anatomy"
      ].includes(step.type)
    ) {

      return;
    }


    this.isCurrentStepCorrect =
      false;


    this.advanceToNextStep();
  },


  /* ==========================================================
     BOTÃO PRINCIPAL DA ETAPA
  ========================================================== */

  handleStepAction() {

    if (!this.activeLesson) {
      return;
    }


    const step =
      this.activeLesson.steps[
        this.currentStepIdx
      ];


    if (!step) {
      return;
    }


    /* ----------------------------------------------------------
       INTRO / EXPLICAÇÃO
    ---------------------------------------------------------- */

    if (
      [
        "intro",
        "explanation"
      ].includes(step.type)
    ) {

      this.advanceToNextStep();

      return;
    }


    /* ----------------------------------------------------------
       ANATOMIA INTERATIVA
    ---------------------------------------------------------- */

    if (
      step.type ===
      "interactive_anatomy"
    ) {

      const allExplored =
        Array.isArray(step.tokens) &&
        step.tokens.length > 0 &&
        step.tokens.every(
          (_, index) =>
            this.activeAnatomyTokens
              .includes(index)
        );


      /*
       * Ainda não explorou todos os elementos.
       */

      if (!allExplored) {
        return;
      }


      this.isCurrentStepCorrect =
        true;


      /*
       * Só conta a atividade uma vez.
       */

      if (
        !this.assessedStepIndices
          .includes(
            this.currentStepIdx
          )
      ) {

        this.assessedStepIndices.push(
          this.currentStepIdx
        );

        this.assessedActivitiesCount++;
      }


      this.showCorrectFeedback(
        step
      );


      return;
    }


    /* ----------------------------------------------------------
       DEMAIS EXERCÍCIOS
    ---------------------------------------------------------- */

    let answered =
      false;


    this.isCurrentStepCorrect =
      false;


    /* ----------------------------------------------------------
       SLOT
    ---------------------------------------------------------- */

    if (
      step.type ===
      "interactive_slot"
    ) {

      if (
        this.selectedSlotChip ===
        null
      ) {

        return;
      }


      answered =
        true;


      this.isCurrentStepCorrect =
        String(
          this.selectedSlotChip
        ) ===
        String(
          step.correctAnswer
        );
    }


    /* ----------------------------------------------------------
       QUIZ
    ---------------------------------------------------------- */

    else if (
      step.type === "quiz" ||
      step.type === "output_quiz" ||
      step.type === "true_false"
    ) {

      if (
        this.selectedOptionIdx ===
        null
      ) {

        return;
      }


      answered =
        true;


      this.isCurrentStepCorrect =
        Number(
          this.selectedOptionIdx
        ) ===
        Number(
          step.correct
        );
    }


    /* ----------------------------------------------------------
       DESAFIO DE CÓDIGO
    ---------------------------------------------------------- */

    else if (
      step.type ===
      "code_challenge"
    ) {

      const input =
        document.getElementById(
          "challenge-input"
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


      answered =
        true;


      if (
        typeof step.correctAnswer ===
        "string"
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

        this.isCurrentStepCorrect =
          false;
      }
    }


    /* ----------------------------------------------------------
       TIPO DESCONHECIDO
    ---------------------------------------------------------- */

    else {

      console.warn(
        "Tipo de exercício não reconhecido:",
        step.type
      );

      return;
    }


    if (!answered) {
      return;
    }


    /* ----------------------------------------------------------
       CONTAR ATIVIDADE APENAS UMA VEZ
    ---------------------------------------------------------- */

    if (
      !this.assessedStepIndices
        .includes(
          this.currentStepIdx
        )
    ) {

      this.assessedStepIndices.push(
        this.currentStepIdx
      );

      this.assessedActivitiesCount++;
    }


    /* ----------------------------------------------------------
       RESULTADO
    ---------------------------------------------------------- */

    if (
      this.isCurrentStepCorrect
    ) {

      this.correctAnswersCount++;

      step._answeredCorrectly =
        true;

      this.showCorrectFeedback(
        step
      );

    } else {

      this.showWrongFeedback(
        step
      );
    }
  },


  /* ==========================================================
     NORMALIZAR CÓDIGO
  ========================================================== */

  normalizeCode(value) {

    return String(value || "")
      .trim()
      .replace(
        /\s+/g,
        " "
      )
      .replace(
        /\s*([(),;=+\-*/<>])\s*/g,
        "$1"
      )
      .toLowerCase();
  },


  /* ==========================================================
     FEEDBACK CORRETO
  ========================================================== */

  showCorrectFeedback(step) {

    const sheet =
      document.getElementById(
        "feedback-sheet"
      );

    const title =
      document.getElementById(
        "fb-title"
      );

    const text =
      document.getElementById(
        "fb-text"
      );

    const button =
      document.getElementById(
        "btn-feedback-action"
      );


    if (!sheet) {
      return;
    }


    UI.playSound(
      "correct"
    );


    sheet.className =
      "feedback-sheet correct";


    /*
     * Feedback aberto deve ficar acima da aula.
     */

    sheet.style.pointerEvents =
      "auto";


    if (title) {

      title.innerText =
        "✓ Perfeito!";
    }


    if (text) {

      text.innerText =
        step.explanation ||
        "Você acertou o conceito!";
    }


    if (button) {

      button.innerText =
        "Continuar";
    }
  },


  /* ==========================================================
     FEEDBACK ERRADO
  ========================================================== */

  showWrongFeedback(step) {

    const sheet =
      document.getElementById(
        "feedback-sheet"
      );

    const title =
      document.getElementById(
        "fb-title"
      );

    const text =
      document.getElementById(
        "fb-text"
      );

    const button =
      document.getElementById(
        "btn-feedback-action"
      );


    if (!sheet) {
      return;
    }


    UI.playSound(
      "wrong"
    );


    /*
     * Perder uma vida NÃO expulsa o usuário
     * da lição.
     */

    if (
      typeof Progress.decrementHeart ===
      "function"
    ) {

      Progress.decrementHeart();
    }


    sheet.className =
      "feedback-sheet wrong";


    sheet.style.pointerEvents =
      "auto";


    if (title) {

      title.innerText =
        "✕ Ainda não!";
    }


    if (text) {

      text.innerText =
        step.wrongExplanation ||
        step.explanation ||
        "Revise o conceito e tente novamente.";
    }


    if (button) {

      button.innerText =
        "Tentar novamente";
    }
  },


  /* ==========================================================
     AÇÃO DO FEEDBACK
  ========================================================== */

  handleFeedbackAction() {

    const sheet =
      document.getElementById(
        "feedback-sheet"
      );


    /*
     * RESPOSTA ERRADA
     *
     * Fecha o feedback e permite tentar
     * a mesma questão novamente.
     */

    if (
      !this.isCurrentStepCorrect
    ) {

      if (sheet) {

        sheet.className =
          "feedback-sheet";

        sheet.style.pointerEvents =
          "none";
      }


      this.selectedOptionIdx =
        null;

      this.selectedSlotChip =
        null;


      UI.renderCurrentStep();

      return;
    }


    /* ----------------------------------------------------------
       RESPOSTA CORRETA
    ---------------------------------------------------------- */

    if (sheet) {

      sheet.className =
        "feedback-sheet";

      sheet.style.pointerEvents =
        "none";
    }


    this.advanceToNextStep();
  },


  /* ==========================================================
     AVANÇAR
  ========================================================== */

  advanceToNextStep() {

    if (!this.activeLesson) {
      return;
    }


    this.currentStepIdx++;


    /* ----------------------------------------------------------
       AINDA HÁ ETAPAS
    ---------------------------------------------------------- */

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


    /* ----------------------------------------------------------
       LIÇÃO TERMINOU
    ---------------------------------------------------------- */

    const lessonId =
      this.activeLesson.id;


    /*
     * XP da conclusão.
     */

    if (
      typeof Progress.addXP ===
      "function"
    ) {

      Progress.addXP(100);
    }


    /*
     * Marca a lição como concluída.
     */

    if (
      typeof Progress.completeLesson ===
      "function"
    ) {

      Progress.completeLesson(
        lessonId
      );
    }


    /*
     * Mostra a tela de conclusão
     * fora da lição.
     */

    UI.showCompletionScreen(
      this.activeLesson,
      this.correctAnswersCount,
      this.assessedActivitiesCount
    );
  }
};
