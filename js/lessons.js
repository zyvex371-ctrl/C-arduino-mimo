const LessonsData = [
  {
    id: 'mod1',
    title: 'Módulo 1: Fundamentos de C++ & Variáveis',
    desc: 'Aprenda os conceitos básicos da linguagem que o Arduino entende.',
    lessons: [
      {
        id: 'l1',
        title: '01. Variáveis e Números em C++',
        tag: 'C++ Básico',
        learnedConcepts: ['Variáveis na memória', 'Tipo int', 'Operador = e ;'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'O que é uma Variável?', text: 'Uma variável é como uma caixa com um nome na memória para guardar dados utilizando o tipo int.', code: 'int idade = 11;' },
          { type: 'interactive_anatomy', badge: 'Exploração', title: 'Toque para Desmontar', text: 'Toque nas palavras do código abaixo para entender cada parte da instrução:', tokens: [
            { label: 'int', expTitle: 'TIPO DE DADO', expText: 'Indica que a variável guardará um número inteiro.' },
            { label: 'idade', expTitle: 'IDENTIFICADOR', expText: 'O nome que você dá para encontrar o dado depois.' },
            { label: '=', expTitle: 'ATRIBUIÇÃO', expText: 'Guarda o valor da direita na variável da esquerda.' },
            { label: '11', expTitle: 'VALOR', expText: 'O dado real armazenado.' },
            { label: ';', expTitle: 'FIM DE INSTRUÇÃO', expText: 'Obrigatório em C++ para fechar o comando.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', title: 'Criando um inteiro', text: 'Preencha a lacuna com o tipo correto para criar uma variável numérica:', codeBefore: '', codeAfter: ' pino = 13;', chips: ['int', 'float', 'void', 'char'], correctAnswer: 'int', explanation: 'Utilizamos int para armazenar números inteiros.' },
          { type: 'quiz', badge: 'Prática', title: 'O operador =', text: 'O que o sinal de igual faz em programação?', options: ['Compara igualdade', 'Atribui valor à esquerda', 'Soma valores'], correct: 1, explanation: 'O sinal = atribui o valor da direita para a variável da esquerda.' },
          { type: 'explanation', badge: 'Aprender', title: 'O valor pode mudar', text: 'Como o próprio nome diz, uma variável pode ter seu valor atualizado a qualquer momento durante a execução.', code: 'int nivel = 1;\nnivel = 2;' },
          { type: 'true_false', badge: 'Prática', title: 'Verdadeiro ou Falso', text: 'Uma variável do tipo int pode receber um novo valor após ser criada.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro! O valor pode ser modificado quando necessário.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Atualizando o valor', text: 'Preencha a lacuna para atualizar o score:', codeBefore: 'score = ', codeAfter: ';', chips: ['500', 'int', 'void', 'true'], correctAnswer: '500', explanation: 'Atribuímos o novo número diretamente à variável.' },
          { type: 'output_quiz', badge: 'Prática', title: 'Qual o valor final?', text: 'Analise as instruções:\nint x = 10;\nx = 25;', options: ['10', '25', '35', 'Erro'], correct: 1, explanation: 'A última instrução substituiu o valor por 25.' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Tipo para Caracteres', text: 'Qual tipo usamos para guardar uma única letra?', codeBefore: '', codeAfter: ' letra = \'A\';', chips: ['char', 'int', 'float', 'void'], correctAnswer: 'char', explanation: 'char é o tipo reservado para caracteres.' },
          { type: 'quiz', badge: 'Prática', title: 'Fim de Comando', text: 'Qual caractere encerra obrigatoriamente cada instrução em C++?', options: ['.', ';', ':', ','], correct: 1, explanation: 'O ponto-e-vírgula (;) avisa ao compilador que a instrução terminou.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva a linha completa declarando a variável score com o valor 100:', correctKeywords: ['int', 'score', '=', '100', ';'], explanation: 'Perfeito! Declaração correta.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva a linha completa declarando a variável nivel com o valor 1:', correctKeywords: ['int', 'nivel', '=', '1', ';'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l2',
        title: '02. Tomando Decisões com if',
        tag: 'Lógica',
        learnedConcepts: ['Condicional if', 'Comparação == e >='],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Tomando Decisões', text: 'O comando if permite que o Arduino execute instruções apenas se uma condição for verdadeira.', code: 'if (temperatura >= 30) { }' },
          { type: 'interactive_anatomy', badge: 'Exploração', title: 'Anatomia do if', text: 'Toque para explorar os componentes da estrutura condicional:', tokens: [
            { label: 'if', expTitle: 'CONDICIONAL', expText: 'Palavra-chave de decisão.' },
            { label: '(', expTitle: 'INÍCIO', expText: 'Abre a verificação.' },
            { label: 'temperatura >= 30', expTitle: 'CONDIÇÃO', expText: 'Teste lógico avaliado.' },
            { label: '{ }', expTitle: 'BLOCO', expText: 'Código executado se verdadeiro.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', title: 'Operador de Igualdade', text: 'Preencha o operador que compara se dois valores são iguais:', codeBefore: 'if (x ', codeAfter: ' 10) { }', chips: ['==', '=', '!=', '>'], correctAnswer: '==', explanation: 'Usamos == para comparações de igualdade.' },
          { type: 'quiz', badge: 'Prática', title: 'Diferença', text: 'Qual operador verifica se dois valores são diferentes?', options: ['!=', '==', '>=', '<='], correct: 0, explanation: '!= significa "diferente de".' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Maior que', text: 'Preencha o operador "maior que":', codeBefore: 'if (valor ', codeAfter: ' 50) { }', chips: ['>', '<', '==', '='], correctAnswer: '>', explanation: '> testa se o valor da esquerda é maior.' },
          { type: 'true_false', badge: 'Prática', title: 'Verdadeiro ou Falso', text: 'O código dentro das chaves {} do if roda se a condição for falsa.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. Se for falso, o bloco é ignorado.' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Menor ou igual', text: 'Preencha o operador menor ou igual:', codeBefore: 'if (nivel ', codeAfter: ' 3) { }', chips: ['<=', '>=', '==', '!='], correctAnswer: '<=', explanation: '<= valida menor ou igual.' },
          { type: 'quiz', badge: 'Prática', title: 'Sintaxe', text: 'Onde fica a condição lógica do if?', options: ['Dentro de parênteses ()', 'Dentro de colchetes []', 'Fora de tudo'], correct: 0, explanation: 'A condição fica sempre entre parênteses.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva uma estrutura if verificando se x é maior que 10:', correctKeywords: ['if', 'x', '>', '10'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva uma estrutura if verificando se ativo == 1:', correctKeywords: ['if', 'ativo', '==', '1'], explanation: 'Excelente!' }
        ]
      }
    ]
  },
  {
    id: 'mod2',
    title: 'Módulo 2: Pinos Digitais & Hardware',
    desc: 'Controle o envio e leitura de energia na placa.',
    lessons: [
      {
        id: 'l3',
        title: '03. Configurando Saídas (pinMode)',
        tag: 'Hardware',
        learnedConcepts: ['pinMode()', 'OUTPUT vs INPUT'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Preparando os Pinos', text: 'Antes de usar qualquer porta na placa, usamos o comando pinMode para definir sua função.', code: 'pinMode(13, OUTPUT);' },
          { type: 'interactive_anatomy', badge: 'Exploração', title: 'Anatomia pinMode', text: 'Toque para explorar os parâmetros do comando:', tokens: [
            { label: 'pinMode', expTitle: 'FUNÇÃO', expText: 'Configura o comportamento do pino.' },
            { label: '13', expTitle: 'PINO', expText: 'Número da porta física.' },
            { label: 'OUTPUT', expTitle: 'MODO', expText: 'Define como saída de energia.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', title: 'Modo Saída', text: 'Preencha o parâmetro para configurar o pino como saída de energia:', codeBefore: 'pinMode(13, ', codeAfter: ');', chips: ['OUTPUT', 'INPUT', 'HIGH', 'LOW'], correctAnswer: 'OUTPUT', explanation: 'OUTPUT configura o pino para enviar 5V.' },
          { type: 'quiz', badge: 'Prática', title: 'Onde configurar?', text: 'Em qual bloco de código configuramos os pinos?', options: ['setup()', 'loop()', 'Fora de tudo'], correct: 0, explanation: 'No setup() porque roda apenas uma vez ao ligar.' },
          { type: 'true_false', badge: 'Prática', title: 'Maiúsculas importam?', text: 'A palavra OUTPUT deve ser escrita em letras maiúsculas?', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro. O C++ difere maiúsculas de minúsculas.' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Configurar Pino 8', text: 'Configure o pino 8 como OUTPUT:', codeBefore: 'pinMode(', codeAfter: ', OUTPUT);', chips: ['8', '13', 'A0', 'pinMode'], correctAnswer: '8', explanation: 'O primeiro argumento é sempre o número do pino.' },
          { type: 'quiz', badge: 'Prática', title: 'Modo Sensor', text: 'Qual modo usamos quando queremos ler um botão ou sensor?', options: ['INPUT', 'OUTPUT', 'HIGH'], correct: 0, explanation: 'INPUT configura o pino para receber dados.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: pinMode(13, OUTPUT);', correctKeywords: ['pinMode', '13', 'OUTPUT'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: pinMode(2, INPUT);', correctKeywords: ['pinMode', '2', 'INPUT'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l4',
        title: '04. Escrevendo em Pinos (digitalWrite)',
        tag: 'Hardware',
        learnedConcepts: ['digitalWrite()', 'HIGH e LOW'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Enviando Energia', text: 'O comando digitalWrite liga ou desliga componentes conectados aos pinos digitais.', code: 'digitalWrite(13, HIGH);' },
          { type: 'interactive_anatomy', badge: 'Exploração', title: 'Anatomia digitalWrite', text: 'Toque para explorar:', tokens: [
            { label: 'digitalWrite', expTitle: 'COMANDO', expText: 'Escreve nível digital.' },
            { label: '13', expTitle: 'PINO', expText: 'Alvo da eletricidade.' },
            { label: 'HIGH', expTitle: 'ESTADO', expText: 'Ligado (5 Volts).' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', title: 'Desligar', text: 'Qual valor envia 0V (desligado) para o pino?', codeBefore: 'digitalWrite(13, ', codeAfter: ');', chips: ['LOW', 'HIGH', 'OUTPUT', '5V'], correctAnswer: 'LOW', explanation: 'LOW desliga o componente cortando os 5V.' },
          { type: 'quiz', badge: 'Prática', title: 'Significado HIGH', text: 'O que HIGH representa em termos de tensão elétrica?', options: ['0V', '5V', '12V'], correct: 1, explanation: 'HIGH representa sinal ativo de 5 Volts.' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Ligar Pino 7', text: 'Ligue o pino 7:', codeBefore: 'digitalWrite(7, ', codeAfter: ');', chips: ['HIGH', 'LOW', 'INPUT', 'OUTPUT'], correctAnswer: 'HIGH', explanation: 'HIGH envia energia.' },
          { type: 'quiz', badge: 'Prática', title: 'Repetição', text: 'Onde colocamos a rotina de piscar o LED de forma contínua?', options: ['setup()', 'loop()', 'Fora do programa'], correct: 1, explanation: 'No loop() para repetir infinitamente.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: digitalWrite(13, HIGH);', correctKeywords: ['digitalWrite', '13', 'HIGH'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: digitalWrite(13, LOW);', correctKeywords: ['digitalWrite', '13', 'LOW'], explanation: 'Excelente!' }
        ]
      }
    ]
  },
  {
    id: 'mod3',
    title: 'Módulo 3: Entradas Analógicas & Sensores',
    desc: 'Trabalhe com valores contínuos e sensores de luz/temperatura.',
    lessons: [
      {
        id: 'l5',
        title: '05. Lendo Potenciômetros (analogRead)',
        tag: 'Sensores',
        learnedConcepts: ['analogRead()', 'Pinos A0 a A5'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Leitura Analógica', text: 'Diferente do digital, o comando analogRead lê valores variados de 0 a 1023.', code: 'int valor = analogRead(A0);' },
          { type: 'interactive_anatomy', badge: 'Exploração', title: 'Anatomia analogRead', text: 'Toque para explorar:', tokens: [
            { label: 'analogRead', expTitle: 'FUNÇÃO', expText: 'Lê dados analógicos.' },
            { label: 'A0', expTitle: 'PORTA', expText: 'Entrada analógica da placa.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', title: 'Função de Leitura', text: 'Qual função lê pinos analógicos?', codeBefore: 'int val = ', codeAfter: '(A0);', chips: ['analogRead', 'digitalRead', 'pinMode', 'tone'], correctAnswer: 'analogRead', explanation: 'analogRead lê portas analógicas.' },
          { type: 'quiz', badge: 'Prática', title: 'Escala', text: 'Qual é o valor máximo retornado pelo analogRead?', options: ['255', '1023', '5'], correct: 1, explanation: 'Retorna valores na escala de 0 a 1023.' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Ler porta A2', text: 'Leia a porta A2:', codeBefore: 'int sensor = analogRead(', codeAfter: ');', chips: ['A2', '13', 'HIGH', 'OUTPUT'], correctAnswer: 'A2', explanation: 'Passamos A2 como argumento da função.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: int valor = analogRead(A0);', correctKeywords: ['int', 'valor', '=', 'analogRead', 'A0'], explanation: 'Perfeito!' }
        ]
      },
      {
        id: 'l6',
        title: '06. Sensor de Luz LDR',
        tag: 'Sensores',
        learnedConcepts: ['Divisor de tensão', 'Luminosidade'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'O que é um LDR?', text: 'Um LDR é um sensor que altera sua resistência elétrica conforme a luz incidente.', code: 'int luz = analogRead(A2);' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Leitura do LDR', text: 'Qual função usamos para ler os dados do LDR conectado na porta A3?', codeBefore: 'int ldr = ', codeAfter: '(A3);', chips: ['analogRead', 'digitalRead', 'pinMode', 'delay'], correctAnswer: 'analogRead', explanation: 'LDR é um sensor analógico lido com analogRead.' },
          { type: 'quiz', badge: 'Prática', title: 'Comportamento', text: 'O que acontece com a resistência do LDR quando o ambiente fica escuro?', options: ['Aumenta muito', 'Zera', 'Fica constante'], correct: 0, explanation: 'No escuro, a resistência aumenta consideravelmente.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: int luz = analogRead(A2);', correctKeywords: ['int', 'luz', '=', 'analogRead', 'A2'], explanation: 'Excelente!' }
        ]
      }
    ]
  },
  {
    id: 'mod4',
    title: 'Módulo 4: Atuadores, Sons e Motores',
    desc: 'Controle movimento com Servo Motores e sons com Buzzers.',
    lessons: [
      {
        id: 'l7',
        title: '07. Controlando Servo Motores',
        tag: 'Motores',
        learnedConcepts: ['Servo.h', 'write()'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Servo Motor', text: 'Motores servo permitem posicionar o eixo com precisão entre 0 e 180 graus.', code: '#include <Servo.h>\nServo meuServo;\nmeuServo.attach(9);\nmeuServo.write(90);' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Movimentar', text: 'Qual comando define o ângulo do servo motor?', codeBefore: 'meuServo.', codeAfter: '(180);', chips: ['write', 'attach', 'read', 'set'], correctAnswer: 'write', explanation: '.write() define a posição em graus.' },
          { type: 'quiz', badge: 'Prática', title: 'Amplitude', text: 'Qual é a faixa padrão de movimento de um servo?', options: ['0 a 180 graus', '0 a 360 graus', '0 a 90 graus'], correct: 0, explanation: 'Giram em um arco de 0 a 180 graus.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: meuServo.write(90);', correctKeywords: ['meuServo.write', '90'], explanation: 'Perfeito!' }
        ]
      },
      {
        id: 'l8',
        title: '08. Gerando Sons com Buzzer',
        tag: 'Atuadores',
        learnedConcepts: ['tone()', 'noTone()'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Emitindo Sons', text: 'Podemos gerar frequências sonoras em um buzzer usando o comando tone.', code: 'tone(8, 1000); // Pino 8, 1000Hz' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Tocar Buzzer', text: 'Qual função emite som no pino 8?', codeBefore: '', codeAfter: '(8, 500);', chips: ['tone', 'sound', 'play', 'analogRead'], correctAnswer: 'tone', explanation: 'tone emite ondas sonoras.' },
          { type: 'quiz', badge: 'Prática', title: 'Parar som', text: 'Qual comando interrompe o som do buzzer?', options: ['noTone()', 'stopTone()', 'off()'], correct: 0, explanation: 'noTone(pino) desliga a frequência.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: tone(8, 1000);', correctKeywords: ['tone', '8', '1000'], explanation: 'Excelente!' }
        ]
      }
    ]
  },
  {
    id: 'mod5',
    title: 'Módulo 5: Estruturas de Controle & Funções',
    desc: 'Otimize seu código com loops e modularização.',
    lessons: [
      {
        id: 'l9',
        title: '09. Monitor Serial',
        tag: 'Comunicação',
        learnedConcepts: ['Serial.begin()', 'Serial.println()'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Monitor Serial', text: 'Permite enviar textos e dados do Arduino para a tela do computador.', code: 'Serial.begin(9600);\nSerial.println("Olá");' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Velocidade', text: 'Qual a velocidade padrão mais utilizada no Serial.begin?', codeBefore: 'Serial.begin(', codeAfter: ');', chips: ['9600', '115200', '500'], correctAnswer: '9600', explanation: '9600 bauds é a taxa padrão clássica.' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Imprimir', text: 'Imprima uma mensagem com quebra de linha:', codeBefore: 'Serial.', codeAfter: '("Teste");', chips: ['println', 'print', 'begin'], correctAnswer: 'println', explanation: 'println imprime o texto e pula para a linha seguinte.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: Serial.begin(9600);', correctKeywords: ['Serial.begin', '9600'], explanation: 'Perfeito!' }
        ]
      },
      {
        id: 'l10',
        title: '10. Laço de Repetição (for)',
        tag: 'Lógica',
        learnedConcepts: ['Laço for', 'Contadores'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'O Laço for', text: 'Permite repetir um bloco de código várias vezes de forma controlada.', code: 'for (int i = 0; i < 5; i++) { }' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Comando for', text: 'Qual palavra inicia um loop de contagem?', codeBefore: '', codeAfter: ' (int i = 0; i < 10; i++) { }', chips: ['for', 'while', 'if'], correctAnswer: 'for', explanation: 'for cria loops com contadores automáticos.' },
          { type: 'quiz', badge: 'Prática', title: 'Incremento', text: 'O que o operador i++ realiza a cada volta?', options: ['Adiciona 1 a i', 'Subtrai 1', 'Zera i'], correct: 0, explanation: 'Incrementa uma unidade na variável de controle.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: for (int i = 0; i < 5; i++) { }', correctKeywords: ['for', 'int i = 0', 'i < 5', 'i++'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l11',
        title: '11. Criando Funções Próprias',
        tag: 'C++ Avançado',
        learnedConcepts: ['void', 'Modularização'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Criando Funções', text: 'Funções organizam blocos de código reutilizáveis que realizam tarefas específicas.', code: 'void piscar() {\n  digitalWrite(13, HIGH);\n}' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Retorno Vazio', text: 'Qual palavra indica que uma função não retorna nenhum valor?', codeBefore: '', codeAfter: ' minhaFuncao() { }', chips: ['void', 'int', 'float'], correctAnswer: 'void', explanation: 'void significa que a função executa a tarefa sem retornar dados.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: void minhaFuncao() { }', correctKeywords: ['void', 'minhaFuncao'], explanation: 'Perfeito!' }
        ]
      }
    ]
  },
  {
    id: 'mod6',
    title: 'Módulo 6: Projetos Práticos de Robótica',
    desc: 'Aplique todo o conhecimento em projetos reais montados.',
    lessons: [
      {
        id: 'l12',
        title: '12. Projeto: Semáforo Inteligente',
        tag: 'Projeto',
        learnedConcepts: ['Múltiplos LEDs', 'Temporização'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Semáforo de Trânsito', text: 'Controla LEDs Verde, Amarelo e Vermelho em sequência usando delays.', code: 'digitalWrite(VERDE, HIGH);\ndelay(3000);\ndigitalWrite(VERDE, LOW);' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Temporização', text: 'Qual função pausa o programa por alguns milissegundos?', codeBefore: '', codeAfter: '(3000);', chips: ['delay', 'time', 'sleep'], correctAnswer: 'delay', explanation: 'delay aguarda o tempo determinado em milissegundos.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: delay(3000);', correctKeywords: ['delay', '3000'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l13',
        title: '13. Projeto: Alarme com Sensor',
        tag: 'Projeto',
        learnedConcepts: ['Sensores digitais', 'Atuadores sonoros'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Sistema de Segurança', text: 'Se o sensor detectar movimento, o buzzer é acionado.', code: 'if (digitalRead(SENSOR) == HIGH) {\n  tone(BUZZER, 1500);\n}' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Leitura Sensor', text: 'Como lemos o estado de um sensor conectado ao pino 2?', codeBefore: 'int st = ', codeAfter: '(2);', chips: ['digitalRead', 'analogRead', 'tone'], correctAnswer: 'digitalRead', explanation: 'digitalRead lê estados digitais (0 ou 1).' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: tone(BUZZER, 1500);', correctKeywords: ['tone', 'BUZZER', '1500'], explanation: 'Perfeito!' }
        ]
      },
      {
        id: 'l14',
        title: '14. Projeto: Robô Animatrônico',
        tag: 'Projeto',
        learnedConcepts: ['Servo motor', 'Movimentos de mandíbula'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Movendo a Boca do Robô', text: 'Utilizamos um servo motor para abrir e fechar a mandíbula do robô.', code: 'cabecaServo.write(45);\ndelay(400);\ncabecaServo.write(0);' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Posição do Servo', text: 'Qual comando move o servo para 90 graus?', codeBefore: 'cabecaServo.', codeAfter: '(90);', chips: ['write', 'attach', 'read'], correctAnswer: 'write', explanation: '.write() altera o ângulo do motor.' },
          { type: 'code_challenge', badge: 'Desafio', title: 'Digite do zero!', text: 'Escreva: cabecaServo.write(45);', correctKeywords: ['cabecaServo.write', '45'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l15',
        title: '15. Projeto Final: Estação Meteorológica',
        tag: 'Projeto Final',
        learnedConcepts: ['Múltiplos sensores', 'Monitor Serial'],
        steps: [
          { type: 'explanation', badge: 'Aprender', title: 'Estação Completa', text: 'Você chegou ao topo! Leia dados climáticos e exiba no computador.', code: 'int temp = analogRead(A0);\nSerial.println(temp);' },
          { type: 'interactive_slot', badge: 'Prática', title: 'Exibir no Serial', text: 'Qual comando envia o valor da temperatura para a tela com quebra de linha?', codeBefore: 'Serial.', codeAfter: '(temp);', chips: ['println', 'print', 'begin'], correctAnswer: 'println', explanation: 'Serial.println exibe dados no monitor do computador.' },
          { type: 'code_challenge', badge: 'Desafio Final', title: 'Mestre da Robótica', text: 'Escreva a instrução final de exibição:', correctKeywords: ['Serial.println', 'temp'], explanation: 'Parabéns por concluir toda a jornada de C++ e Robótica!' }
        ]
      }
    ]
  }
];
