const Progress = {
  state: {
    xp: 160,
    streak: 1,
    hearts: 5,
    completedLessons: [],
    unlockedBadges: ['b1']
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
      } catch (e) {
        console.error('Erro ao restaurar dados:', e);
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

  updateUI() {
    document.getElementById('user-xp').innerText = this.state.xp;
    document.getElementById('user-streak').innerText = this.state.streak;
    document.getElementById('user-hearts').innerText = this.state.hearts;
    
    const pct = this.getOverallProgressPercentage();
    document.getElementById('dash-pct-text').innerText = pct + '% Concluído';
    document.getElementById('dash-pct-fill').style.width = pct + '%';

    UI.renderModules();
    UI.renderBadges();
  }
};
