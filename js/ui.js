const GlossaryTerms = {
  pinMode: {
    title: 'pinMode()',
    desc: 'Configura um pino do Arduino como entrada ou saída. No UNO R3, por exemplo, você pode usar OUTPUT para controlar um LED.'
  },

  digitalWrite: {
    title: 'digitalWrite()',
    desc: 'Coloca um pino digital em nível HIGH ou LOW. No Arduino UNO R3, isso normalmente corresponde a aproximadamente 5 V ou 0 V.'
  },

  analogRead: {
    title: 'analogRead()',
    desc: 'Lê uma entrada analógica. No UNO R3, a leitura normalmente vai de 0 a 1023.'
  },

  digitalRead: {
    title: 'digitalRead()',
    desc: 'Lê o estado lógico de um pino digital e retorna HIGH ou LOW.'
  },

  int: {
    title: 'int',
    desc: 'Tipo de dado usado para armazenar números inteiros, como 0, 10, 100 ou -5.'
  },

  float: {
    title: 'float',
    desc: 'Tipo de dado usado para armazenar números que podem ter casas decimais, como 3.14 ou 25.5.'
  },

  if: {
    title: 'if',
    desc: 'Estrutura de decisão. O código dentro dela é executado quando a condição é verdadeira.'
  },

  for: {
    title: 'for',
    desc: 'Estrutura de repetição usada para executar um bloco de código várias vezes.'
  },

  HIGH: {
    title: 'HIGH',
    desc: 'Representa um nível lógico alto. No Arduino UNO R3, uma saída HIGH normalmente fica próxima de 5 V.'
  },

  LOW: {
    title: 'LOW',
    desc: 'Representa um nível lógico baixo. No Arduino UNO R3, uma saída LOW normalmente fica próxima de 0 V.'
  },

  OUTPUT: {
    title: 'OUTPUT',
    desc: 'Configura um pino para funcionar como saída, permitindo que o Arduino controle um sinal elétrico.'
  },

  INPUT: {
    title: 'INPUT',
    desc: 'Configura um pino para funcionar como entrada, permitindo que o Arduino leia um sinal.'
  },

  'Serial.println': {
    title: 'Serial.println()',
    desc: 'Envia uma mensagem ou valor para o Monitor Serial e adiciona uma quebra de linha depois.'
  },

  'void setup': {
    title: 'void setup()',
    desc: 'Função executada uma vez quando o Arduino inicia ou é reiniciado.'
  },

  'void loop': {
    title: 'void loop()',
    desc: 'Função executada repetidamente enquanto o Arduino estiver funcionando.'
  },

  delay: {
    title: 'delay()',
    desc: 'Pausa a execução do programa durante um determinado número de milissegundos.'
  },

  Servo: {
    title: 'Servo',
    desc: 'Objeto usado pela biblioteca Servo para controlar servomotores.'
  },

  attach: {
    title: 'attach()',
    desc: 'Liga um objeto Servo a um pino específico do Arduino.'
  },

  write: {
    title: 'write()',
    desc: 'Envia uma posição para um servomotor. Em muitos servos comuns, os valores ficam aproximadamente entre 0 e 180 graus.'
  },

  A0: {
    title: 'A0',
    desc: 'Uma das entradas analógicas disponíveis no Arduino UNO R3.'
  }
};


const UI = {

  audioCtx: null,

  /*
   * ==========================================================
   * ÁUDIO
   * ==========================================================
   */

  getAudioContext() {
    if (this.audioCtx) {
      return this.audioCtx;
    }

    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) {
      return null;
    }

    this.audioCtx = new AudioContext();

    return this.audioCtx;
  },

  playSound(type) {
    const ctx = this.getAudioContext();

    if (!ctx) {
      return;
    }

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {

      osc.frequency.setValueAtTime(
        523.25,
        ctx.currentTime
      );

      osc.frequency.setValueAtTime(
        659.25,
        ctx.currentTime + 0.1
      );

      gain.gain.setValueAtTime(
        0.2,
        ctx.currentTime
      );

      gain.gain.exponentialRampToValueAtTime(
        0.01,
        ctx.currentTime + 0.3
      );

      osc.start();
      osc.stop(
        ctx.currentTime + 0.3
      );

    } else {

      osc.frequency.setValueAtTime(
        220,
        ctx.currentTime
      );

      osc.frequency.setValueAtTime(
        164.81,
        ctx.currentTime + 0.15
      );

      gain.gain.setValueAtTime(
        0.3,
        ctx.currentTime
      );

      gain.gain.exponentialRampToValueAtTime(
        0.01,
        ctx.currentTime + 0.4
      );

      osc.start();
      osc.stop(
        ctx.currentTime + 0.4
      );
    }
  },


  /*
   * ==========================================================
   * GLOSSÁRIO
   * ==========================================================
   */

  escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },


  formatTextWithGlossary(text) {
    if (!text) {
      return '';
    }

    let result =
      this.escapeHtml(text);

    /*
     * Termos maiores primeiro.
     *
     * Isso evita situações como:
     * Serial.println
     * sendo quebrado por outros termos.
     */
    const terms =
      Object.keys(GlossaryTerms)
        .sort((a, b) => b.length - a.length);

    terms.forEach(term => {

      const escapedTerm =
        this.escapeHtml(term);

      /*
       * Escapa caracteres especiais de regex.
       */
      const regexTerm =
        escapedTerm.replace(
          /[.*+?^${}()|[\]\\]/g,
          '\\$&'
        );

      const regex =
        new RegExp(
          `(?<![\\w])(${regexTerm})(?![\\w])`,
          'g'
        );

      result =
        result.replace(
          regex,
          `<span class="interactive-term"
                 role="button"
                 tabindex="0"
                 data-glossary-term="${this.escapeHtml(term)}"
                 onclick="event.stopPropagation(); UI.showGlossary('${this.escapeJsString(term)}')"
                 onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();event.stopPropagation();UI.showGlossary('${this.escapeJsString(term)}')}"
          >$1</span>`
        );
    });

    return result;
  },


  escapeJsString(value) {
    return String(value)
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'");
  },


  showGlossary(termKey) {

    const term =
      GlossaryTerms[termKey];

    if (!term) {
      return;
    }

    const existing =
      document.getElementById(
        'glossary-modal'
      );

    if (existing) {
      existing.remove();
    }

    const overlay =
      document.createElement('div');

    overlay.className =
      'glossary-popover-overlay';

    overlay.id =
      'glossary-modal';

    overlay.setAttribute(
      'role',
      'dialog'
    );

    overlay.setAttribute(
      'aria-modal',
      'true'
    );

    overlay.onclick = (event) => {

      if (
        event.target === overlay
      ) {
        overlay.remove();
      }
    };

    overlay.innerHTML = `
      <div class="glossary-card">

        <div class="glossary-title">
          ${this.escapeHtml(term.title)}
        </div>

        <div class="glossary-desc">
          ${this.escapeHtml(term.desc)}
        </div>

        <button
          class="btn-action-primary"
          style="height:40px;font-size:0.9rem;"
          onclick="document.getElementById('glossary-modal')?.remove()"
        >
          Entendi
        </button>

      </div>
    `;

    document.body.appendChild(overlay);

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        const modal =
          document.getElementById(
            'glossary-modal'
          );

        if (modal) {
          modal.remove();
        }

        document.removeEventListener(
          'keydown',
          closeOnEscape
        );
      }
    };

    document.addEventListener(
      'keydown',
      closeOnEscape
    );
  },


  /*
   * ==========================================================
   * NAVEGAÇÃO
   * ==========================================================
   */

  switchView(viewId, btn) {

    document
      .querySelectorAll('main > section')
      .forEach(section => {
        section.classList.add('hidden');
      });

    const target =
      document.getElementById(
        `view-${viewId}`
      );

    if (target) {
      target.classList.remove('hidden');
    }

    document
      .querySelectorAll(
        '.nav-item button, .mobile-btn'
      )
      .forEach(button => {
        button.classList.remove('active');
      });

    /*
     * Marca também a navegação equivalente
     * no desktop/mobile.
     */
    if (btn) {
      btn.classList.add('active');
    }

    const desktopButton =
      document.getElementById(
        `nav-${viewId === 'dashboard'
          ? 'dash'
          : viewId === 'curriculum'
            ? 'curr'
            : viewId === 'ide'
              ? 'ide'
              : viewId === 'projects'
                ? 'proj'
                : 'badge'}`
      );

    if (desktopButton) {
      desktopButton.classList.add('active');
    }

    /*
     * Fecha o lesson screen caso alguém navegue
     * pela interface principal.
     */
  },


  /*
   * ==========================================================
   * TRILHA
   * ==========================================================
   */

  renderModules() {

    const container =
      document.getElementById(
        'modules-container'
      );

    const fullContainer =
      document.getElementById(
        'full-curriculum-container'
      );

    if (container) {
      container.innerHTML = '';
    }

    if (fullContainer) {
      fullContainer.innerHTML = '';
    }

    /*
     * HOME:
     *
     * Mostra o módulo atual e o próximo módulo.
     *
     * Isso evita uma parede enorme de conteúdo,
     * mas mantém a trilha visível.
     */

    let currentModuleIndex = 0;

    for (
      let i = 0;
      i < LessonsData.length;
      i++
    ) {

      const hasIncomplete =
        LessonsData[i].lessons.some(
          lesson =>
            !Progress.isLessonCompleted(
              lesson.id
            )
        );

      if (hasIncomplete) {
        currentModuleIndex = i;
        break;
      }

      if (
        i === LessonsData.length - 1
      ) {
        currentModuleIndex = i;
      }
    }


    LessonsData.forEach(
      (module, moduleIndex) => {

        const moduleHtml =
          this.createModuleHtml(
            module,
            moduleIndex
          );

        /*
         * Curriculum recebe tudo.
         */
        if (fullContainer) {
          fullContainer.innerHTML +=
            moduleHtml;
        }

        /*
         * Dashboard recebe:
         * módulo atual + módulo seguinte.
         */
        if (
          container &&
          (
            moduleIndex === currentModuleIndex ||
            moduleIndex === currentModuleIndex + 1
          )
        ) {
          container.innerHTML +=
            moduleHtml;
        }
      }
    );
  },


  createModuleHtml(module, moduleIndex) {

    let lessonsHtml = '';

    module.lessons.forEach(
      (lesson) => {

        const status =
          Progress.getLessonStatus(
            lesson.id
          );

        let statusClass =
          'locked';

        let actionText =
          '🔒 Bloqueado';

        if (status === 'completed') {

          statusClass =
            'completed';

          actionText =
            '✓ Concluída';

        } else if (status === 'unlocked') {

          statusClass =
            'unlocked';

          /*
           * Se existe progresso salvo de uma lição,
           * o botão pode continuar.
           *
           * No momento, o sistema não possui persistência
           * de etapa individual, então a entrada continua
           * sendo segura como "Começar".
           */
          actionText =
            '▶ Começar';
        }

        const isClickable =
          status !== 'locked';

        const clickAction =
          isClickable
            ? `onclick="Exercises.startLesson('${this.escapeJsString(lesson.id)}')"`
            : '';

        lessonsHtml += `
          <div
            class="lesson-node ${statusClass}"
            ${clickAction}
            ${isClickable ? 'role="button" tabindex="0"' : ''}
          >

            <div class="node-left">

              <span class="node-tag">
                ${this.escapeHtml(lesson.tag || '')}
              </span>

              <span class="node-title">
                ${this.escapeHtml(lesson.title || '')}
              </span>

            </div>

            <span
              class="node-action"
              style="color:${
                status === 'completed'
                  ? 'var(--success)'
                  : status === 'unlocked'
                    ? 'var(--primary)'
                    : 'var(--text-muted)'
              }"
            >
              ${actionText}
            </span>

          </div>
        `;
      }
    );

    return `
      <div class="module-card">

        <div class="module-header">
          ${this.escapeHtml(module.title || '')}
        </div>

        <div class="module-desc">
          ${this.escapeHtml(module.desc || '')}
        </div>

        <div class="lessons-tree">
          ${lessonsHtml}
        </div>

      </div>
    `;
  },


  /*
   * ==========================================================
   * CONQUISTAS
   * ==========================================================
   */

  renderBadges() {

    const container =
      document.getElementById(
        'badges-container'
      );

    if (!container) {
      return;
    }

    container.innerHTML = '';

    const badgesData = [
      {
        id: 'b1',
        name: 'Primeiro Compilador',
        desc: 'Completou a primeira lição de C++'
      },
      {
        id: 'b2',
        name: 'Engenheiro de Hardware',
        desc: 'Configurou um pino digital com sucesso'
      },
      {
        id: 'b3',
        name: 'Mestre da Robótica',
        desc: 'Completou o módulo de saídas digitais'
      }
    ];

    badgesData.forEach(
      badge => {

        const unlocked =
          Progress.state.unlockedBadges.includes(
            badge.id
          );

        container.innerHTML += `
          <div
            class="project-card"
            style="opacity:${unlocked ? '1' : '0.4'}"
          >

            <div class="project-body">

              <div
                style="font-size:2rem;margin-bottom:10px;"
              >
                ${unlocked ? '🏆' : '🔒'}
              </div>

              <div class="project-title">
                ${this.escapeHtml(badge.name)}
              </div>

              <div class="project-desc">
                ${this.escapeHtml(badge.desc)}
              </div>

              <div
                style="
                  font-size:0.8rem;
                  font-weight:800;
                  color:${
                    unlocked
                      ? 'var(--primary)'
                      : 'var(--text-muted)'
                  };
                "
              >
                ${
                  unlocked
                    ? 'DESBLOQUEADO'
                    : 'BLOQUEADO'
                }
              </div>

            </div>

          </div>
        `;
      }
    );
  },


  /*
   * ==========================================================
   * LIÇÃO
   * ==========================================================
   */

  renderCurrentStep() {

    if (
      !Exercises.activeLesson ||
      !Exercises.activeLesson.steps
    ) {
      console.error(
        'Nenhuma lição ativa.'
      );
      return;
    }

    const step =
      Exercises.activeLesson.steps[
        Exercises.currentStepIdx
      ];

    if (!step) {
      console.error(
        'Etapa inexistente:',
        Exercises.currentStepIdx
      );
      return;
    }

    const body =
      document.getElementById(
        'lesson-body'
      );

    const button =
      document.getElementById(
        'btn-step-action'
      );

    const skipButton =
      document.getElementById(
        'btn-skip-step'
      );

    const feedback =
      document.getElementById(
        'feedback-sheet'
      );

    if (!body || !button) {
      return;
    }

    /*
     * Fecha feedback antigo.
     */
    if (feedback) {
      feedback.className =
        'feedback-sheet';
    }

    /*
     * Reset visual da etapa.
     *
     * NÃO mexemos em vidas aqui.
     */
    Exercises.selectedOptionIdx = null;
    Exercises.selectedSlotChip = null;

    /*
     * Reset de estado de anatomia.
     */
    Exercises.activeAnatomyTokens = [];

    button.disabled = true;
    button.innerText = 'Verificar';

    const informativeTypes = [
      'intro',
      'explanation',
      'interactive_anatomy'
    ];

    const isInformative =
      informativeTypes.includes(
        step.type
      );

    if (skipButton) {

      if (isInformative) {
        skipButton.classList.add(
          'hidden'
        );
      } else {
        skipButton.classList.remove(
          'hidden'
        );
      }
    }


    /*
     * PROGRESSO
     */
    const totalSteps =
      Exercises.activeLesson.steps.length;

    const progress =
      Math.round(
        (
          (Exercises.currentStepIdx + 1) /
          totalSteps
        ) * 100
      );

    const progressFill =
      document.getElementById(
        'lesson-progress-fill'
      );

    if (progressFill) {
      progressFill.style.width =
        `${progress}%`;
    }

    const stepCounter =
      document.getElementById(
        'step-counter'
      );

    if (stepCounter) {
      stepCounter.innerText =
        `ETAPA ${Exercises.currentStepIdx + 1} DE ${totalSteps}`;
    }


    /*
     * CONTEÚDO BASE
     */
    let html = `
      <span class="step-badge">
        ${this.formatTextWithGlossary(
          step.badge || 'Aprender'
        )}
      </span>

      <div class="step-title">
        ${this.formatTextWithGlossary(
          step.title || ''
        )}
      </div>

      <div class="step-text">
        ${this.formatTextWithGlossary(
          step.text || ''
        )}
      </div>
    `;


    /*
     * CÓDIGO
     */
    if (step.code) {

      html += `
        <div class="code-snippet">
          ${this.formatCodeWithGlossary(
            step.code
          )}
        </div>
      `;
    }


    /*
     * ======================================================
     * ANATOMIA INTERATIVA
     * ======================================================
     */

    if (
      step.type ===
      'interactive_anatomy'
    ) {

      button.innerText =
        'Explore os termos';

      button.disabled =
        true;

      html += `
        <div class="interactive-anatomy-area">

          <div class="anatomy-code-line">
      `;

      step.tokens.forEach(
        (token, index) => {

          html += `
            <span
              class="interactive-term anatomy-token"
              role="button"
              tabindex="0"
              id="anatomy-token-${index}"
              onclick="
                event.stopPropagation();
                UI.selectAnatomyToken(${index});
              "
              onkeydown="
                if(event.key==='Enter'||event.key===' '){
                  event.preventDefault();
                  event.stopPropagation();
                  UI.selectAnatomyToken(${index});
                }
              "
            >
              ${this.escapeHtml(token.label)}
            </span>
          `;
        }
      );

      html += `
          </div>
      `;

      step.tokens.forEach(
        (token, index) => {

          html += `
            <div
              class="anatomy-explanation-box"
              id="anat-exp-${index}"
            >

              <div class="anatomy-exp-title">
                ${this.escapeHtml(
                  token.expTitle || ''
                )}
              </div>

              <div class="anatomy-exp-text">
                ${this.formatTextWithGlossary(
                  token.expText || ''
                )}
              </div>

            </div>
          `;
        }
      );

      html += `
        </div>
      `;
    }


    /*
     * ======================================================
     * SLOT INTERATIVO
     * ======================================================
     */

    else if (
      step.type ===
      'interactive_slot'
    ) {

      button.innerText =
        'Verificar';

      html += `
        <div class="code-slot-area">

          <span>
            ${this.formatCodeWithGlossary(
              step.codeBefore || ''
            )}
          </span>

          <span
            class="active-code-slot"
            id="active-slot"
          >
            ___
          </span>

          <span>
            ${this.formatCodeWithGlossary(
              step.codeAfter || ''
            )}
          </span>

        </div>

        <div class="chip-palette">
      `;

      step.chips.forEach(
        chip => {

          html += `
            <button
              class="chip-btn"
              onclick="
                Exercises.selectSlotChip(
                  '${this.escapeJsString(chip)}',
                  this
                )
              "
            >
              ${this.escapeHtml(chip)}
            </button>
          `;
        }
      );

      html += `
        </div>
      `;
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

      button.innerText =
        'Verificar';

      html += `
        <div class="fill-input-area">

          <input
            type="text"
            id="challenge-input"
            class="inline-code-input"
            placeholder="Digite o código aqui..."
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            oninput="Exercises.checkInputState()"
          >

        </div>
      `;
    }


    /*
     * ======================================================
     * QUIZ
     * ======================================================
     */

    else if (
      step.type === 'quiz' ||
      step.type === 'true_false' ||
      step.type === 'output_quiz'
    ) {

      button.innerText =
        'Verificar';

      html += `
        <div class="options-stack">
      `;

      step.options.forEach(
        (option, index) => {

          html += `
            <button
              class="option-card"
              onclick="
                Exercises.selectOption(
                  ${index},
                  this
                )
              "
            >
              ${this.formatTextWithGlossary(
                option
              )}
            </button>
          `;
        }
      );

      html += `
        </div>
      `;
    }


    /*
     * ======================================================
     * INTRO / EXPLICAÇÃO
     * ======================================================
     */

    else if (
      step.type === 'intro' ||
      step.type === 'explanation'
    ) {

      button.innerText =
        'Continuar';

      button.disabled =
        false;
    }


    /*
     * Renderiza tudo.
     */
    body.innerHTML =
      html;


    /*
     * Foco automático no input quando existir.
     */
    const input =
      document.getElementById(
        'challenge-input'
      );

    if (input) {

      setTimeout(() => {
        input.focus();
      }, 100);
    }
  },


  /*
   * ==========================================================
   * CÓDIGO COM GLOSSÁRIO
   * ==========================================================
   *
   * Mantém espaços e quebras de linha.
   */

  formatCodeWithGlossary(code) {

    if (!code) {
      return '';
    }

    return this.formatTextWithGlossary(
      code
    );
  },


  /*
   * ==========================================================
   * ANATOMIA
   * ==========================================================
   */

  selectAnatomyToken(index) {

    if (
      !Exercises.activeLesson ||
      !Exercises.activeLesson.steps
    ) {
      return;
    }

    const step =
      Exercises.activeLesson.steps[
        Exercises.currentStepIdx
      ];

    if (
      !step ||
      step.type !== 'interactive_anatomy'
    ) {
      return;
    }

    const token =
      step.tokens[index];

    if (!token) {
      return;
    }

    /*
     * Inicializa o array caso o Exercises ainda
     * não tenha criado.
     */
    if (
      !Array.isArray(
        Exercises.activeAnatomyTokens
      )
    ) {
      Exercises.activeAnatomyTokens = [];
    }

    /*
     * Registra que o aluno realmente explorou
     * esse termo.
     */
    if (
      !Exercises.activeAnatomyTokens.includes(
        index
      )
    ) {

      Exercises.activeAnatomyTokens.push(
        index
      );
    }


    /*
     * Só mexe nos elementos da anatomia atual.
     */
    document
      .querySelectorAll(
        '.anatomy-token'
      )
      .forEach(element => {
        element.classList.remove(
          'active'
        );
      });

    document
      .querySelectorAll(
        '.anatomy-explanation-box'
      )
      .forEach(element => {
        element.classList.remove(
          'show'
        );
      });


    const selectedToken =
      document.getElementById(
        `anatomy-token-${index}`
      );

    const explanation =
      document.getElementById(
        `anat-exp-${index}`
      );

    if (selectedToken) {
      selectedToken.classList.add(
        'active'
      );
    }

    if (explanation) {
      explanation.classList.add(
        'show'
      );
    }


    /*
     * Só libera o botão depois que TODOS
     * os tokens foram explorados.
     */
    const allExplored =
      step.tokens.every(
        (_, tokenIndex) =>
          Exercises.activeAnatomyTokens.includes(
            tokenIndex
          )
      );

    const button =
      document.getElementById(
        'btn-step-action'
      );

    if (button) {

      button.disabled =
        !allExplored;

      if (allExplored) {
        button.innerText =
          'Entendi →';
      } else {
        button.innerText =
          'Explore os termos';
      }
    }
  },


  /*
   * ==========================================================
   * CONCLUSÃO
   * ==========================================================
   */

  showCompletionScreen(
    lesson,
    correctCount,
    totalActivities
  ) {

    const lessonScreen =
      document.getElementById(
        'lesson-screen'
      );

    const completionScreen =
      document.getElementById(
        'completion-screen'
      );

    const container =
      document.getElementById(
        'completion-container'
      );

    if (
      !lessonScreen ||
      !completionScreen ||
      !container
    ) {
      return;
    }

    lessonScreen.classList.add(
      'hidden'
    );

    completionScreen.classList.remove(
      'hidden'
    );


    /*
     * CONCEITOS APRENDIDOS
     */
    let learnedHtml = '';

    if (
      Array.isArray(
        lesson.learnedConcepts
      )
    ) {

      lesson.learnedConcepts.forEach(
        concept => {

          learnedHtml += `
            <li class="learned-item">
              ✓
              ${this.formatTextWithGlossary(
                concept
              )}
            </li>
          `;
        }
      );
    }

    if (!learnedHtml) {

      learnedHtml = `
        <li class="learned-item">
          ✓ Conceitos praticados nesta lição
        </li>
      `;
    }


    /*
     * PRÓXIMA LIÇÃO
     */
    const nextTarget =
      Progress.getNextUncompletedLesson();

    const nextLessonTitle =
      nextTarget &&
      nextTarget.lesson
        ? nextTarget.lesson.title
        : 'Todas as trilhas concluídas!';


    container.innerHTML = `

      <div class="completion-badge-icon">
        🎉
      </div>

      <div class="completion-hero-title">
        Lição Concluída!
      </div>

      <div class="completion-lesson-name">
        ${this.escapeHtml(
          lesson.title || ''
        )}
      </div>


      <div class="completion-stats-grid">

        <div class="stat-box">

          <div class="stat-val">
            +100 XP
          </div>

          <div class="stat-lbl">
            Recompensa
          </div>

        </div>


        <div class="stat-box">

          <div class="stat-val">
            ${correctCount}/${totalActivities}
          </div>

          <div class="stat-lbl">
            Atividades corretas
          </div>

        </div>

      </div>


      <div class="learned-card">

        <div class="learned-title">
          O que você aprendeu:
        </div>

        <ul class="learned-list">
          ${learnedHtml}
        </ul>

      </div>


      <div
        style="
          width:100%;
          text-align:left;
          font-size:0.85rem;
          font-weight:700;
          color:var(--text-muted);
        "
      >

        PRÓXIMA LIÇÃO:

        <span
          style="color:var(--primary);"
        >
          ${this.escapeHtml(
            nextLessonTitle
          )}
        </span>

      </div>


      ${
        nextTarget
          ? `
            <button
              class="btn-action-primary"
              style="margin-top:10px;"
              onclick="
                UI.startNextLessonFromCompletion(
                  '${this.escapeJsString(
                    nextTarget.lesson.id
                  )}'
                )
              "
            >
              Próxima lição →
            </button>

            <button
              class="btn-btn btn-sec"
              style="margin-top:8px;width:100%;justify-content:center;"
              onclick="UI.exitCompletionAndContinue()"
            >
              Voltar à trilha
            </button>
          `
          : `
            <button
              class="btn-action-primary"
              style="margin-top:10px;"
              onclick="UI.exitCompletionAndContinue()"
            >
              Revisar trilha →
            </button>
          `
      }

    `;
  },


  startNextLessonFromCompletion(
    lessonId
  ) {

    const completionScreen =
      document.getElementById(
        'completion-screen'
      );

    if (completionScreen) {
      completionScreen.classList.add(
        'hidden'
      );
    }

    Exercises.startLesson(
      lessonId
    );
  },


  exitCompletionAndContinue() {

    const completionScreen =
      document.getElementById(
        'completion-screen'
      );

    if (completionScreen) {
      completionScreen.classList.add(
        'hidden'
      );
    }

    Progress.updateUI();

    this.switchView(
      'dashboard',
      document.getElementById(
        'nav-dash'
      )
    );
  },


  /*
   * ==========================================================
   * SAIR DA LIÇÃO
   * ==========================================================
   */

  exitLesson() {

    const lessonScreen =
      document.getElementById(
        'lesson-screen'
      );

    const feedback =
      document.getElementById(
        'feedback-sheet'
      );

    if (lessonScreen) {
      lessonScreen.classList.add(
        'hidden'
      );
    }

    if (feedback) {
      feedback.className =
        'feedback-sheet';
    }

    /*
     * Remove estado visual de glossário,
     * se ainda existir.
     */
    const glossary =
      document.getElementById(
        'glossary-modal'
      );

    if (glossary) {
      glossary.remove();
    }

    Progress.updateUI();
  }
};
