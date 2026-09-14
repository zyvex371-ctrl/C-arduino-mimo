const Progress = {
  state: {
    xp: 160,
    streak: 1,
    hearts: 5,

    completedLessons: [],
    unlockedBadges: ['b1'],

    // Guarda a última lição concluída apenas para a tela de conclusão.
    // Não é mais usado para decidir se uma lição está "Começar" ou "Continuar".
    lastCompletedLessonId: null
  },

  init() {
    const raw = localStorage.getItem('arduinoGoState');

    if (raw) {
      try {
        const parsed = JSON.parse(raw);

        this.state.xp =
          typeof parsed.xp === 'number'
            ? parsed.xp
            : 160;

        this.state.streak =
          typeof parsed.streak === 'number'
            ? parsed.streak
            : 1;

        this.state.hearts =
          typeof parsed.hearts === 'number'
            ? Math.max(0, parsed.hearts)
            : 5;

        this.state.completedLessons =
          Array.isArray(parsed.completedLessons)
            ? parsed.completedLessons
            : [];

        this.state.unlockedBadges =
          Array.isArray(parsed.unlockedBadges)
            ? parsed.unlockedBadges
            : ['b1'];

        /*
         * Compatibilidade com a versão antiga.
         *
         * Se o usuário ainda tiver:
         * lastCompleted: true
         *
         * simplesmente não usamos mais essa variável para controlar
         * a interface.
         */
        this.state.lastCompletedLessonId =
          typeof parsed.lastCompletedLessonId === 'string'
            ? parsed.lastCompletedLessonId
            : null;

      } catch (error) {
        console.error('Erro ao restaurar progresso:', error);
      }
    }

    this.updateUI();
  },

  save() {
    localStorage.setItem(
      'arduinoGoState',
      JSON.stringify(this.state)
    );

    /*
     * IMPORTANTE:
     * Não chamamos updateUI() aqui.
     *
     * Antes existia:
     *
     * save() -> updateUI() -> save() -> updateUI()
     *
     * Isso podia criar uma recursão desnecessária.
     */
  },

  addXP(amount) {
    if (typeof amount !== 'number' || amount <= 0) return;

    this.state.xp += amount;
    this.save();
    this.updateUI();
  },

  decrementHeart() {
    /*
     * Vidas NÃO bloqueiam mais a lição.
     *
     * Elas continuam sendo uma estatística/gamificação,
     * mas chegar a 0 não expulsa o usuário da aula.
     */
    this.state.hearts = Math.max(0, this.state.hearts - 1);

    this.save();
    this.updateUI();
  },

  resetHearts() {
    this.state.hearts = 5;

    this.save();
    this.updateUI();
  },

  completeLesson(lessonId) {
    if (!lessonId) return;

    if (!this.state.completedLessons.includes(lessonId)) {
      this.state.completedLessons.push(lessonId);
    }

    this.state.lastCompletedLessonId = lessonId;

    this.updateBadges();

    this.save();
    this.updateUI();
  },

  isLessonCompleted(lessonId) {
    return this.state.completedLessons.includes(lessonId);
  },

  getLessonStatus(lessonId) {
    if (this.isLessonCompleted(lessonId)) {
      return 'completed';
    }

    const location = this.getLessonLocation(lessonId);

    if (!location) {
      return 'locked';
    }

    const { moduleIndex, lessonIndex } = location;

    /*
     * Primeira lição da primeira trilha sempre está liberada.
     */
    if (moduleIndex === 0 && lessonIndex === 0) {
      return 'unlocked';
    }

    /*
     * A regra de desbloqueio:
     * uma lição é liberada quando a anterior foi concluída.
     */
    if (lessonIndex > 0) {
      const previousLesson =
        LessonsData[moduleIndex].lessons[lessonIndex - 1];

      if (this.isLessonCompleted(previousLesson.id)) {
        return 'unlocked';
      }

      return 'locked';
    }

    /*
     * É a primeira lição de um módulo.
     * Só libera quando a última lição do módulo anterior
     * foi concluída.
     */
    if (moduleIndex > 0) {
      const previousModule =
        LessonsData[moduleIndex - 1];

      const previousLesson =
        previousModule.lessons[
          previousModule.lessons.length - 1
        ];

      if (this.isLessonCompleted(previousLesson.id)) {
        return 'unlocked';
      }
    }

    return 'locked';
  },

  getLessonLocation(lessonId) {
    for (let moduleIndex = 0; moduleIndex < LessonsData.length; moduleIndex++) {
      const module = LessonsData[moduleIndex];

      for (let lessonIndex = 0; lessonIndex < module.lessons.length; lessonIndex++) {
        if (module.lessons[lessonIndex].id === lessonId) {
          return {
            moduleIndex,
            lessonIndex
          };
        }
      }
    }

    return null;
  },

  getOverallProgressPercentage() {
    let totalLessons = 0;

    LessonsData.forEach(module => {
      totalLessons += module.lessons.length;
    });

    if (totalLessons === 0) {
      return 0;
    }

    const completedCount =
      this.state.completedLessons.filter(id =>
        this.isLessonActuallyInData(id)
      ).length;

    const percentage =
      Math.round((completedCount / totalLessons) * 100);

    return Math.min(100, Math.max(0, percentage));
  },

  isLessonActuallyInData(lessonId) {
    return LessonsData.some(module =>
      module.lessons.some(lesson => lesson.id === lessonId)
    );
  },

  getCompletedCount() {
    return this.state.completedLessons.filter(id =>
      this.isLessonActuallyInData(id)
    ).length;
  },

  getTotalLessons() {
    return LessonsData.reduce(
      (total, module) => total + module.lessons.length,
      0
    );
  },

  getNextUncompletedLesson() {
    for (const module of LessonsData) {
      for (const lesson of module.lessons) {
        if (!this.isLessonCompleted(lesson.id)) {
          const status = this.getLessonStatus(lesson.id);

          if (status === 'unlocked') {
            return {
              lesson,
              module
            };
          }
        }
      }
    }

    return null;
  },

  getFirstUncompletedLesson() {
    for (const module of LessonsData) {
      for (const lesson of module.lessons) {
        if (!this.isLessonCompleted(lesson.id)) {
          return {
            lesson,
            module
          };
        }
      }
    }

    return null;
  },

  updateBadges() {
    const completed = this.state.completedLessons;

    /*
     * Badge 1:
     * primeira lição concluída.
     */
    if (completed.length >= 1) {
      if (!this.state.unlockedBadges.includes('b1')) {
        this.state.unlockedBadges.push('b1');
      }
    }

    /*
     * Badge 2:
     * concluiu a lição de pinMode.
     */
    if (completed.includes('l3')) {
      if (!this.state.unlockedBadges.includes('b2')) {
        this.state.unlockedBadges.push('b2');
      }
    }

    /*
     * Badge 3:
     * concluiu pinMode + digitalWrite.
     */
    if (
      completed.includes('l3') &&
      completed.includes('l4')
    ) {
      if (!this.state.unlockedBadges.includes('b3')) {
        this.state.unlockedBadges.push('b3');
      }
    }
  },

  updateUI() {
    const xpElement =
      document.getElementById('user-xp');

    const streakElement =
      document.getElementById('user-streak');

    const heartsElement =
      document.getElementById('user-hearts');

    if (xpElement) {
      xpElement.innerText = this.state.xp;
    }

    if (streakElement) {
      streakElement.innerText = this.state.streak;
    }

    if (heartsElement) {
      heartsElement.innerText = this.state.hearts;
    }

    const percentage =
      this.getOverallProgressPercentage();

    const percentageText =
      document.getElementById('dash-pct-text');

    const percentageFill =
      document.getElementById('dash-pct-fill');

    if (percentageText) {
      percentageText.innerText =
        `${percentage}% Concluído`;
    }

    if (percentageFill) {
      percentageFill.style.width =
        `${percentage}%`;
    }

    /*
     * Tela "Continue de onde parou".
     *
     * Agora ela representa realmente a próxima lição disponível,
     * em vez de depender de lastCompleted.
     */
    const resumeBanner =
      document.getElementById('resume-banner');

    const resumeTitle =
      document.getElementById('resume-title');

    const resumeSub =
      document.getElementById('resume-sub');

    const resumeButton =
      document.getElementById('btn-resume-action');

    const nextTarget =
      this.getNextUncompletedLesson();

    if (
      resumeBanner &&
      resumeTitle &&
      resumeSub &&
      resumeButton
    ) {
      if (nextTarget) {
        resumeBanner.style.display = 'block';
        resumeBanner.className = 'resume-hero';

        resumeTitle.innerText =
          nextTarget.lesson.title;

        const status =
          this.getLessonStatus(nextTarget.lesson.id);

        if (status === 'unlocked') {
          resumeSub.innerText =
            nextTarget.module.title;

          resumeButton.innerText =
            'Continuar lição →';

          resumeButton.onclick = () => {
            Exercises.startLesson(
              nextTarget.lesson.id
            );
          };
        }
      } else {
        /*
         * Todas as aulas foram concluídas.
         */
        resumeBanner.style.display = 'block';
        resumeBanner.className =
          'resume-hero finished';

        resumeTitle.innerText =
          '🎉 Trilha concluída!';

        resumeSub.innerText =
          'Você completou todas as lições disponíveis.';

        resumeButton.innerText =
          'Revisar trilha →';

        resumeButton.onclick = () => {
          UI.switchView(
            'curriculum',
            document.getElementById('nav-curr')
          );
        };
      }
    }

    if (typeof UI !== 'undefined') {
      if (typeof UI.renderModules === 'function') {
        UI.renderModules();
      }

      if (typeof UI.renderBadges === 'function') {
        UI.renderBadges();
      }
    }
  }
};
