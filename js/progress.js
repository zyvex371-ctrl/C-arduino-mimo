  // Modifique apenas a função updateUI dentro do Progress
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
      document.getElementById('resume-title').innerText = nextTarget.lesson.title;
      // VERIFICA O NOVO ESTADO: O usuário acabou de chegar da tela de conclusão?
      if (this.state.lastCompleted) {
         resumeBanner.className = 'resume-hero finished';
         document.getElementById('resume-sub').innerHTML = `✓ VOCÊ TERMINOU! <br><span style="color:var(--text-muted)">Próximo desafio liberado:</span>`;
         document.getElementById('btn-resume-action').innerText = 'Ir para a próxima lição →';
         this.state.lastCompleted = false; // Reseta após ver a home
      } else {
         resumeBanner.className = 'resume-hero';
         document.getElementById('resume-sub').innerText = nextTarget.module.title;
         document.getElementById('btn-resume-action').innerText = 'Continuar lição →';
      }
      document.getElementById('btn-resume-action').onclick = () => Exercises.startLesson(nextTarget.lesson.id);
    } else {
       resumeBanner.style.display = 'none'; // Zerou a trilha
    }

    UI.renderModules();
  }
