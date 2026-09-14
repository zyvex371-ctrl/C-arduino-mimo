const GlossaryTerms = {
  "pinMode": {
    title: "pinMode()",
    desc: "Função usada para configurar um pino como entrada ou saída. Exemplo: pinMode(13, OUTPUT)."
  },

  "digitalWrite": {
    title: "digitalWrite()",
    desc: "Envia um nível lógico HIGH ou LOW para um pino digital."
  },

  "analogRead": {
    title: "analogRead()",
    desc: "Lê um valor de uma entrada analógica. No Arduino UNO R3, a leitura normalmente vai de 0 a 1023."
  },

  "int": {
    title: "int",
    desc: "Tipo de dado usado para armazenar números inteiros, como 10, 25 ou 100."
  },

  "if": {
    title: "if",
    desc: "Estrutura de decisão. O código dentro dela é executado quando uma condição é verdadeira."
  },

  "for": {
    title: "for",
    desc: "Estrutura usada para repetir um trecho de código várias vezes."
  },

  "HIGH": {
    title: "HIGH",
    desc: "Representa um nível lógico alto. No Arduino UNO R3, corresponde normalmente a aproximadamente 5 V."
  },

  "LOW": {
    title: "LOW",
    desc: "Representa um nível lógico baixo, normalmente aproximadamente 0 V no Arduino UNO R3."
  },

  "OUTPUT": {
    title: "OUTPUT",
    desc: "Configura um pino para enviar um sinal elétrico."
  },

  "INPUT": {
    title: "INPUT",
    desc: "Configura um pino para receber informações de sensores ou outros componentes."
  },

  "Serial.println": {
    title: "Serial.println()",
    desc: "Envia uma informação para o Monitor Serial e pula para a próxima linha."
  },

  "void setup": {
    title: "void setup()",
    desc: "Função executada uma vez quando o Arduino é ligado ou reiniciado."
  },

  "void loop": {
    title: "void loop()",
    desc: "Função executada repetidamente enquanto o Arduino estiver funcionando."
  },

  "digitalRead": {
    title: "digitalRead()",
    desc: "Lê o estado lógico de um pino digital e retorna HIGH ou LOW."
  },

  "delay": {
    title: "delay()",
    desc: "Pausa a execução do programa durante uma quantidade de milissegundos."
  },

  "float": {
    title: "float",
    desc: "Tipo de dado usado para armazenar números que podem ter casas decimais."
  },

  "Servo": {
    title: "Servo",
    desc: "Componente que permite controlar a posição de um eixo usando um sinal de controle."
  },

  "attach": {
    title: "attach()",
    desc: "Liga um objeto Servo a um pino do Arduino para que ele possa ser controlado."
  },

  "write": {
    title: "write()",
    desc: "Define a posição desejada de um servo."
  }
};


const UI = {

  audioCtx: null,


  getAudioContext() {

    if (!this.audioCtx) {

      const AudioContextClass =
        window.AudioContext ||
        window.webkitAudioContext;

      if (AudioContextClass) {
        this.audioCtx =
          new AudioContextClass();
      }
    }

    return this.audioCtx;
  },


  playSound(type) {

    try {

      const audioCtx =
        this.getAudioContext();

      if (!audioCtx) return;

      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      const osc =
        audioCtx.createOscillator();

      const gain =
        audioCtx.createGain();

      osc.connect(gain);
      gain.connect(audioCtx.destination);


      if (type === "correct") {

        osc.frequency.setValueAtTime(
          523.25,
          audioCtx.currentTime
        );

        osc.frequency.setValueAtTime(
          659.25,
          audioCtx.currentTime + 0.1
        );

        gain.gain.setValueAtTime(
          0.2,
          audioCtx.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
          0.01,
          audioCtx.currentTime + 0.3
        );

        osc.start();
        osc.stop(
          audioCtx.currentTime + 0.3
        );

      } else {

        osc.frequency.setValueAtTime(
          220,
          audioCtx.currentTime
        );

        osc.frequency.setValueAtTime(
          164.81,
          audioCtx.currentTime + 0.15
        );

        gain.gain.setValueAtTime(
          0.25,
          audioCtx.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
          0.01,
          audioCtx.currentTime + 0.4
        );

        osc.start();
        osc.stop(
          audioCtx.currentTime + 0.4
        );
      }

    } catch (error) {

      console.warn(
        "Áudio indisponível:",
        error
      );
    }
  },


  escapeHtml(value) {

    if (
      value === null ||
      value === undefined
    ) {
      return "";
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },


  /*
   * ============================================================
   * GLOSSÁRIO
   * ============================================================
   *
   * O glossário usa <span>, nunca <button>.
   *
   * Isso evita colocar um botão dentro de outro botão,
   * principalmente nas alternativas dos exercícios.
   */

  formatTextWithGlossary(text) {

    if (!text) {
      return "";
    }

    let source =
      String(text);

    const protectedTerms = [];

    const sortedTerms =
      Object.keys(GlossaryTerms)
        .sort(
          (a, b) =>
            b.length - a.length
        );


    sortedTerms.forEach(
      (term, index) => {

        const escapedTerm =
          term.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
          );

        const marker =
          `___ARDUINO_GO_GLOSSARY_${index}___`;

        const regex =
          new RegExp(
            `(^|[^A-Za-z0-9_])(${escapedTerm})(?=$|[^A-Za-z0-9_])`,
            "g"
          );


        if (regex.test(source)) {

          source =
            source.replace(
              regex,
              `$1${marker}`
            );


          protectedTerms.push({
            marker,
            term,
            label: term
          });
        }
      }
    );


    let result =
      this.escapeHtml(source);


    protectedTerms.forEach(
      item => {

        const safeMarker =
          this.escapeHtml(
            item.marker
          );

        const safeLabel =
          this.escapeHtml(
            item.label
          );

        const safeKey =
          encodeURIComponent(
            item.term
          );


        result =
          result.replace(
            safeMarker,
            `<span
              class="interactive-term"
              role="button"
              tabindex="0"
              data-glossary-term="${safeKey}"
              onclick="event.preventDefault(); event.stopPropagation(); UI.showGlossaryEncoded('${safeKey}')"
              onkeydown="if(event.key === 'Enter' || event.key === ' '){event.preventDefault();event.stopPropagation();UI.showGlossaryEncoded('${safeKey}')}"
            >${safeLabel}</span>`
          );
      }
    );


    return result;
  },


  /*
   * Código deve continuar sendo código.
   *
   * Não passamos o código pelo glossário.
   * Isso evita que termos como "if", "int" e "pinMode"
   * sejam transformados em elementos HTML dentro
   * do bloco de código.
   */

  formatCodeWithGlossary(code) {

    if (!code) {
      return "";
    }

    return this.escapeHtml(code);
  },


  showGlossaryEncoded(encodedKey) {

    try {

      const termKey =
        decodeURIComponent(
          encodedKey
        );

      this.showGlossary(
        termKey
      );

    } catch (error) {

      console.warn(
        "Erro ao abrir termo do glossário:",
        error
      );
    }
  },


  showGlossary(termKey) {

    const term =
      GlossaryTerms[termKey];

    if (!term) {
      return;
    }


    const existing =
      document.getElementById(
        "glossary-modal"
      );


    if (existing) {
      existing.remove();
    }


    const overlay =
      document.createElement(
        "div"
      );

    overlay.className =
      "glossary-popover-overlay";

    overlay.id =
      "glossary-modal";


    overlay.setAttribute(
      "role",
      "dialog"
    );

    overlay.setAttribute(
      "aria-modal",
      "true"
    );


    overlay.onclick =
      event => {

        if (
          event.target ===
          overlay
        ) {
          overlay.remove();
        }
      };


    const card =
      document.createElement(
        "div"
      );

    card.className =
      "glossary-card";


    const title =
      document.createElement(
        "div"
      );

    title.className =
      "glossary-title";

    title.textContent =
      term.title;


    const description =
      document.createElement(
        "div"
      );

    description.className =
      "glossary-desc";

    description.textContent =
      term.desc;


    const button =
      document.createElement(
        "button"
      );

    button.type =
      "button";

    button.className =
      "btn-action-primary";

    button.style.height =
      "40px";

    button.style.fontSize =
      "0.9rem";

    button.textContent =
      "Entendi";


    button.onclick =
      () => {
        overlay.remove();
      };


    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);

    overlay.appendChild(card);

    document.body.appendChild(
      overlay
    );


    setTimeout(
      () => {
        button.focus();
      },
      50
    );
  },


  /*
   * ============================================================
   * NAVEGAÇÃO
   * ============================================================
   */

  switchView(viewId, btn) {

    document
      .querySelectorAll(
        "main > section"
      )
      .forEach(section => {

        section.classList.add(
          "hidden"
        );
      });


    const target =
      document.getElementById(
        `view-${viewId}`
      );


    if (target) {

      target.classList.remove(
        "hidden"
      );
    }


    document
      .querySelectorAll(
        ".nav-item button, .mobile-btn"
      )
      .forEach(button => {

        button.classList.remove(
          "active"
        );
      });


    if (btn) {
      btn.classList.add(
        "active"
      );
    }
  },


  /*
   * ============================================================
   * MÓDULOS
   * ============================================================
   */

  renderModules() {

    const container =
      document.getElementById(
        "modules-container"
      );

    const fullContainer =
      document.getElementById(
        "full-curriculum-container"
      );


    if (container) {
      container.innerHTML = "";
    }

    if (fullContainer) {
      fullContainer.innerHTML = "";
    }


    if (
      typeof LessonsData === "undefined" ||
      typeof Progress === "undefined"
    ) {
      return;
    }


    LessonsData.forEach(
      module => {

        const moduleHtml =
          this.createModuleHtml(
            module
          );


        if (
          container &&
          (
            module.id === "mod1" ||
            module.id === "mod2"
          )
        ) {

          container.innerHTML +=
            moduleHtml;
        }


        if (fullContainer) {

          fullContainer.innerHTML +=
            moduleHtml;
        }
      }
    );
  },


  createModuleHtml(module) {

    let html = `
      <div class="module-card">

        <div class="module-header">
          ${this.escapeHtml(
            module.title
          )}
        </div>

        <div class="module-desc">
          ${this.escapeHtml(
            module.desc || ""
          )}
        </div>

        <div class="lessons-tree">
    `;


    module.lessons.forEach(
      (lesson, index) => {

        let status =
          "locked";

        let actionText =
          "🔒 Bloqueado";


        if (
          typeof Progress.getLessonStatus ===
          "function"
        ) {

          status =
            Progress.getLessonStatus(
              lesson.id
            );


          if (
            status ===
            "completed"
          ) {

            actionText =
              "✓ Concluída";

          } else if (
            status ===
            "in-progress"
          ) {

            actionText =
              "→ Continuar";

          } else if (
            status ===
            "unlocked"
          ) {

            actionText =
              "▶ Começar";
          }

        } else {

          const isDone =
            Progress.state.completedLessons
              .includes(
                lesson.id
              );


          status =
            isDone
              ? "completed"
              : index === 0
                ? "unlocked"
                : "locked";


          actionText =
            status === "completed"
              ? "✓ Concluída"
              : status === "unlocked"
                ? "▶ Começar"
                : "🔒 Bloqueado";
        }


        const unlocked =
          status !== "locked";


        const action =
          unlocked
            ? `onclick="Exercises.startLesson('${lesson.id}')"`
            : "";


        html += `
          <div
            class="lesson-node ${status}"
            ${action}
            role="${
              unlocked
                ? "button"
                : "listitem"
            }"
            ${
              unlocked
                ? 'tabindex="0"'
                : ""
            }
            data-lesson-id="${this.escapeHtml(
              lesson.id
            )}"
          >

            <div class="node-left">

              <span class="node-tag">
                ${this.escapeHtml(
                  lesson.tag || ""
                )}
              </span>

              <span class="node-title">
                ${this.escapeHtml(
                  lesson.title
                )}
              </span>

            </div>

            <span
              class="node-action"
              style="color:${
                status === "completed"
                  ? "var(--success)"
                  : status !== "locked"
                    ? "var(--primary)"
                    : "var(--text-muted)"
              }"
            >
              ${actionText}
            </span>

          </div>
        `;
      }
    );


    html += `
        </div>
      </div>
    `;


    return html;
  },


  /*
   * ============================================================
   * CONQUISTAS
   * ============================================================
   */

  renderBadges() {

    const container =
      document.getElementById(
        "badges-container"
      );


    if (!container) {
      return;
    }


    container.innerHTML =
      "";


    const badgesData = [

      {
        id: "b1",
        name: "Primeiro Compilador",
        desc: "Completou a primeira lição de C++"
      },

      {
        id: "b2",
        name: "Engenheiro de Hardware",
        desc: "Configurou um pino digital com sucesso"
      },

      {
        id: "b3",
        name: "Mestre da Robótica",
        desc: "Completou o módulo de saídas digitais"
      }

    ];


    badgesData.forEach(
      badge => {

        const isUnlocked =
          Progress.state.unlockedBadges
            .includes(
              badge.id
            );


        container.innerHTML += `
          <div
            class="project-card"
            style="opacity:${
              isUnlocked
                ? "1"
                : "0.4"
            }"
          >

            <div class="project-body">

              <div
                style="
                  font-size:2rem;
                  margin-bottom:10px;
                "
              >
                🏆
              </div>

              <div class="project-title">
                ${this.escapeHtml(
                  badge.name
                )}
              </div>

              <div class="project-desc">
                ${this.escapeHtml(
                  badge.desc
                )}
              </div>

              <div
                style="
                  font-size:0.8rem;
                  font-weight:800;
                  color:${
                    isUnlocked
                      ? "var(--primary)"
                      : "var(--text-muted)"
                  };
                "
              >
                ${
                  isUnlocked
                    ? "DESBLOQUEADO"
                    : "BLOQUEADO"
                }
              </div>

            </div>

          </div>
        `;
      }
    );
  },


  /*
   * ============================================================
   * RENDERIZAÇÃO DA ETAPA
   * ============================================================
   */

  renderCurrentStep() {

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


    if (!step) {
      return;
    }


    const body =
      document.getElementById(
        "lesson-body"
      );

    const btn =
      document.getElementById(
        "btn-step-action"
      );

    const skipBtn =
      document.getElementById(
        "btn-skip-step"
      );

    const feedback =
      document.getElementById(
        "feedback-sheet"
      );


    if (
      !body ||
      !btn ||
      !skipBtn
    ) {
      return;
    }


    if (feedback) {

      feedback.className =
        "feedback-sheet";
    }


    /*
     * Limpa as seleções de exercícios.
     */

    Exercises.selectedOptionIdx =
      null;

    Exercises.selectedSlotChip =
      null;


    /*
     * Só zeramos os tokens quando
     * uma nova etapa está sendo renderizada.
     *
     * Não chamamos renderCurrentStep()
     * ao tocar nos tokens.
     */

    if (
      step.type ===
      "interactive_anatomy"
    ) {

      Exercises.activeAnatomyTokens =
        [];
    }


    /*
     * O botão começa desativado.
     */

    btn.disabled =
      true;


    const isBasicInformative =
      [
        "intro",
        "explanation"
      ].includes(
        step.type
      );


    /*
     * Intro e explicação podem avançar
     * imediatamente.
     *
     * Anatomia NÃO.
     *
     * Na anatomia o aluno precisa explorar
     * todos os tokens primeiro.
     */

    if (isBasicInformative) {

      skipBtn.classList.add(
        "hidden"
      );

      btn.disabled =
        false;

    } else {

      skipBtn.classList.remove(
        "hidden"
      );
    }


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
        "lesson-progress-fill"
      );


    const counter =
      document.getElementById(
        "step-counter"
      );


    if (progressFill) {

      progressFill.style.width =
        `${progress}%`;
    }


    if (counter) {

      counter.innerText =
        `ETAPA ${
          Exercises.currentStepIdx + 1
        } DE ${totalSteps}`;
    }


    let html = `

      <span class="step-badge">
        ${this.escapeHtml(
          step.badge || "Aprender"
        )}
      </span>

      <div class="step-title">
        ${this.formatTextWithGlossary(
          step.title || ""
        )}
      </div>

      <div class="step-text">
        ${this.formatTextWithGlossary(
          step.text || ""
        )}
      </div>

    `;


    /*
     * ============================================================
     * CÓDIGO
     * ============================================================
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
     * ============================================================
     * ANATOMIA INTERATIVA
     * ============================================================
     */

    if (
      step.type ===
      "interactive_anatomy"
    ) {

      btn.innerText =
        "Entendi →";

      /*
       * IMPORTANTE:
       * começa bloqueado.
       */

      btn.disabled =
        true;


      html += `
        <div
          class="interactive-anatomy-area"
        >

          <div
            class="anatomy-instruction"
          >
            Toque em cada parte do código
            para descobrir o que ela faz.
          </div>

          <div
            class="anatomy-code-line"
          >
      `;


      if (
        Array.isArray(
          step.tokens
        )
      ) {

        step.tokens.forEach(
          (token, index) => {

            const safeLabel =
              this.escapeHtml(
                token.label || ""
              );


            html += `
              <button
                type="button"
                class="anatomy-token"
                data-anatomy-index="${index}"
                onclick="event.preventDefault(); event.stopPropagation(); UI.selectAnatomyToken(${index})"
              >
                ${safeLabel}
              </button>
            `;
          }
        );
      }


      html += `
          </div>
      `;


      if (
        Array.isArray(
          step.tokens
        )
      ) {

        step.tokens.forEach(
          (token, index) => {

            html += `
              <div
                class="anatomy-explanation-box"
                id="anat-exp-${index}"
              >

                <div
                  class="anatomy-exp-title"
                >
                  ${this.escapeHtml(
                    token.expTitle || ""
                  )}
                </div>

                <div
                  class="anatomy-exp-text"
                >
                  ${this.formatTextWithGlossary(
                    token.expText || ""
                  )}
                </div>

              </div>
            `;
          }
        );
      }


      html += `
        </div>
      `;
    }


    /*
     * ============================================================
     * SLOT DE CÓDIGO
     * ============================================================
     */

    else if (
      step.type ===
      "interactive_slot"
    ) {

      btn.innerText =
        "Verificar";


      html += `
        <div
          class="code-slot-area"
        >

          <span>
            ${this.escapeHtml(
              step.codeBefore || ""
            )}
          </span>

          <span
            class="active-code-slot"
            id="active-slot"
          >
            ___
          </span>

          <span>
            ${this.escapeHtml(
              step.codeAfter || ""
            )}
          </span>

        </div>

        <div
          class="chip-palette"
        >
      `;


      if (
        Array.isArray(
          step.chips
        )
      ) {

        step.chips.forEach(
          chip => {

            html += `
              <button
                type="button"
                class="chip-btn"
                onclick="Exercises.selectSlotChip(${JSON.stringify(
                  chip
                )}, this)"
              >
                ${this.escapeHtml(
                  chip
                )}
              </button>
            `;
          }
        );
      }


      html += `
        </div>
      `;
    }


    /*
     * ============================================================
     * DESAFIO DE CÓDIGO
     * ============================================================
     */

    else if (
      step.type ===
      "code_challenge"
    ) {

      btn.innerText =
        "Verificar";


      html += `
        <div
          class="fill-input-area"
        >

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
     * ============================================================
     * QUESTÕES
     * ============================================================
     */

    else if (
      step.type === "quiz" ||
      step.type === "true_false" ||
      step.type === "output_quiz"
    ) {

      btn.innerText =
        "Verificar";


      html += `
        <div
          class="options-stack"
        >
      `;


      if (
        Array.isArray(
          step.options
        )
      ) {

        step.options.forEach(
          (option, index) => {

            html += `
              <button
                type="button"
                class="option-card"
                onclick="Exercises.selectOption(${index}, this)"
              >
                ${this.formatTextWithGlossary(
                  option
                )}
              </button>
            `;
          }
        );
      }


      html += `
        </div>
      `;
    }


    /*
     * ============================================================
     * INTRO / EXPLICAÇÃO
     * ============================================================
     */

    else if (
      step.type === "intro" ||
      step.type === "explanation"
    ) {

      btn.innerText =
        "Continuar";
    }


    body.innerHTML =
      html;
  },


  /*
   * ============================================================
   * ANATOMIA
   * ============================================================
   */

  selectAnatomyToken(index) {

    const step =
      Exercises.activeLesson &&
      Exercises.activeLesson.steps
        ? Exercises.activeLesson.steps[
            Exercises.currentStepIdx
          ]
        : null;


    if (
      !step ||
      step.type !==
        "interactive_anatomy"
    ) {
      return;
    }


    /*
     * Remove o destaque dos outros tokens.
     */

    document
      .querySelectorAll(
        ".anatomy-token"
      )
      .forEach(token => {

        token.classList.remove(
          "active"
        );
      });


    /*
     * Esconde todas as explicações.
     */

    document
      .querySelectorAll(
        ".anatomy-explanation-box"
      )
      .forEach(box => {

        box.classList.remove(
          "show"
        );
      });


    const token =
      document.querySelector(
        `.anatomy-token[data-anatomy-index="${index}"]`
      );


    const explanation =
      document.getElementById(
        `anat-exp-${index}`
      );


    if (token) {

      token.classList.add(
        "active"
      );
    }


    if (explanation) {

      explanation.classList.add(
        "show"
      );
    }


    /*
     * Registra que o aluno explorou
     * este token.
     */

    if (
      !Array.isArray(
        Exercises.activeAnatomyTokens
      )
    ) {

      Exercises.activeAnatomyTokens =
        [];
    }


    if (
      !Exercises.activeAnatomyTokens
        .includes(index)
    ) {

      Exercises.activeAnatomyTokens.push(
        index
      );
    }


    /*
     * Verifica se todos os tokens
     * já foram explorados.
     */

    const totalTokens =
      Array.isArray(
        step.tokens
      )
        ? step.tokens.length
        : 0;


    const exploredCount =
      Exercises.activeAnatomyTokens.length;


    const actionButton =
      document.getElementById(
        "btn-step-action"
      );


    if (actionButton) {

      actionButton.disabled =
        !(
          totalTokens > 0 &&
          exploredCount >= totalTokens
        );
    }
  },


  /*
   * ============================================================
   * CONCLUSÃO
   * ============================================================
   */

  showCompletionScreen(
    lesson,
    correctCount,
    totalActivities
  ) {

    const lessonScreen =
      document.getElementById(
        "lesson-screen"
      );


    const completionScreen =
      document.getElementById(
        "completion-screen"
      );


    const container =
      document.getElementById(
        "completion-container"
      );


    if (
      !lessonScreen ||
      !completionScreen ||
      !container
    ) {
      return;
    }


    lessonScreen.classList.add(
      "hidden"
    );


    completionScreen.classList.remove(
      "hidden"
    );


    let learnedHtml =
      "";


    if (
      lesson.learnedConcepts &&
      lesson.learnedConcepts.length
    ) {

      lesson.learnedConcepts.forEach(
        concept => {

          learnedHtml += `
            <li class="learned-item">
              ✓ ${this.formatTextWithGlossary(
                concept
              )}
            </li>
          `;
        }
      );

    } else {

      learnedHtml = `
        <li class="learned-item">
          ✓ Você concluiu esta lição.
        </li>
      `;
    }


    let nextTarget =
      null;


    if (
      typeof Progress.getNextUncompletedLesson ===
      "function"
    ) {

      nextTarget =
        Progress.getNextUncompletedLesson();
    }


    const nextLessonTitle =
      nextTarget &&
      nextTarget.lesson
        ? nextTarget.lesson.title
        : "Todas as trilhas concluídas!";


    container.innerHTML = `

      <div class="completion-badge-icon">
        🎉
      </div>

      <div class="completion-hero-title">
        Lição Concluída!
      </div>

      <div class="completion-lesson-name">
        ${this.escapeHtml(
          lesson.title
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
            Atividades acertadas
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

      <button
        type="button"
        class="btn-action-primary"
        style="margin-top:10px;"
        onclick="UI.exitCompletionAndContinue()"
      >
        Continuar trilha →
      </button>

    `;
  },


  exitCompletionAndContinue() {

    const completion =
      document.getElementById(
        "completion-screen"
      );


    if (completion) {

      completion.classList.add(
        "hidden"
      );
    }


    if (
      typeof Progress !== "undefined"
    ) {

      Progress.updateUI();
    }


    this.switchView(
      "dashboard",
      document.getElementById(
        "nav-dash"
      )
    );
  },


  exitLesson() {

    const lesson =
      document.getElementById(
        "lesson-screen"
      );


    const feedback =
      document.getElementById(
        "feedback-sheet"
      );


    if (lesson) {

      lesson.classList.add(
        "hidden"
      );
    }


    if (feedback) {

      feedback.className =
        "feedback-sheet";
    }


    if (
      typeof Progress !== "undefined"
    ) {

      Progress.updateUI();
    }
  }

};
