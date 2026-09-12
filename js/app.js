const App = {
  init() {
    Progress.init();
  },

  runFreeIDE() {
    const code = document.getElementById('free-ide-code').innerText;
    const terminal = document.getElementById('free-ide-terminal');
    const img = document.getElementById('arduino-real');
    const photoLed = document.getElementById('photo-led-light');
    const dot = document.getElementById('led-dot-indicator');
    const status = document.getElementById('free-mcu-status');

    terminal.innerText = '[COMPILER]: Compilando arquivo C++...\n[UPLOADER]: Gravando no microcontrolador...\n[HARDWARE]: Sinal enviado para o Pino 13.\n[SERIAL]: Executando loop() em tempo real.';

    if (code.includes('HIGH')) {
      if (img) img.classList.add('active');
      if (photoLed) photoLed.classList.add('active');
      dot.classList.add('active');
      status.innerText = 'Pino 13: HIGH (5V)';
      status.style.color = '#10b981';
    } else {
      if (img) img.classList.remove('active');
      if (photoLed) photoLed.classList.remove('active');
      dot.classList.remove('active');
      status.innerText = 'Pino 13: LOW (0V)';
      status.style.color = 'var(--text-muted)';
    }
  },

  resetFreeIDE() {
    const img = document.getElementById('arduino-real');
    const photoLed = document.getElementById('photo-led-light');
    if (img) img.classList.remove('active');
    if (photoLed) photoLed.classList.remove('active');
    document.getElementById('led-dot-indicator').classList.remove('active');
    document.getElementById('free-mcu-status').innerText = 'Pino 13: LOW (0V)';
    document.getElementById('free-mcu-status').style.color = 'var(--text-muted)';
    document.getElementById('free-ide-terminal').innerText = '[SYSTEM]: Memória reiniciada.';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
