const Progress = {
  state: {
    xp: 160,
    streak: 1,
    hearts: 5,
    completedLessons: [],
    unlockedBadges: ['b1'],
    lastCompleted: false
  },

  init() {
    const raw = localStorage.getItem('arduinoGoState');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        this.state.xp = parsed.xp || 160;
        this.state.streak = parsed.streak || 1;
        this.state.hearts = typeof parsed.hearts === 'number' ? parsed.hearts : 5;
        this.state.completedLessons = parsed.completedLessons || [];
        this.state.unlockedBadges = parsed.unlockedBadges || ['b1'];
        this.state.lastCompleted = parsed.lastCompleted || false;
      } catch (e) {
        console.error('Erro ao restaurar progresso:', e);
      }
    }
    this.updateUI();
  },

  save() {
    localStorage.setItem('arduinoGoState', JSON.stringify(this.state));
    this.updateUI();
  },

  addXP(amount) {
    this.state.xp += amount;
    this.save();
  },

  decrementHeart() {
    this.state.hearts = Math.max(0, this.state.hearts - 1);
    this.save();
  },

  resetHearts() {
    this.state.hearts = 5;
    this.save();
  },

  completeLesson(lessonId) {
    if (!this.state.completedLessons.includes(lessonId)) {
      this.state.completedLessons.push(lessonId);
    }
    this.state.lastCompleted = true;
    this.save();
  },

  getOverallProgressPercentage() {
    let totalLessons = 0;
    LessonsData.forEach(m => totalLessons += m.lessons.length);
    if (totalLessons === 0) return 0;
    const completedCount = this.state.completedLessons.length;
    const rawPct = Math.round((completedCount / totalLessons) * 100);
    return Math.min(100, Math.max(0, rawPct));
  },

  getNextUncompletedLesson() {
    for (const mod of LessonsData) {
      for (const lesson of mod.lessons) {
        if (!this.state.completedLessons.includes(lesson.id)) {
          return { lesson, module: mod };
        }
      }
    }
    return null;
  },

  updateUI() {
    document.getElementById('user-xp').innerText = this.state.xp;
    document.getElementById('user-streak').innerText = this.state.streak;
    document.getElementById('user-hearts').innerText = this.state.hearts;
    
    const pct = this.getOverallProgressPercentage();
    document.getElementById('dash-pct-text').innerText = pct + '% Concluído';
    document.getElementById('dash-pct-fill').style.width = pct + '%';

    const nextTarget = this.getNextUncompletedLesson();
    const resumeBanner = document.getElementById('resume-banner');
    
    if (nextTarget && nextTarget.lesson) {
      resumeBanner.style.display = 'block';
      document.getElementById('resume-title').innerText = nextTarget.lesson.title;
      
      if (this.state.lastCompleted) {
         resumeBanner.className = 'resume-hero finished';
         document.getElementById('resume-sub').innerHTML = `✓ VOCÊ TERMINOU! <br><span style="color:var(--text-muted)">Próximo desafio liberado:</span>`;
         document.getElementById('btn-resume-action').innerText = 'Ir para a próxima lição →';
         this.state.lastCompleted = false;
         this.save();
      } else {
         resumeBanner.className = 'resume-hero';
         document.getElementById('resume-sub').innerText = nextTarget.module.title;
         document.getElementById('btn-resume-action').innerText = 'Continuar lição →';
      }
      document.getElementById('btn-resume-action').onclick = () => Exercises.startLesson(nextTarget.lesson.id);
    } else {
       resumeBanner.style.display = 'none';
    }

    UI.renderModules();
    UI.renderBadges();
  }
};
