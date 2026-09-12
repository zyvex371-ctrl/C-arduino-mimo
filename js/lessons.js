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
        learnedConcepts: [
          'Conceito de variável na memória',
          'Uso da palavra-chave int para números',
          'Sintaxe com operador = e ;'
        ],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'O que é uma Variável?',
            text: 'Uma variável é como uma caixa com um nome na memória do computador para guardar dados.',
            code: 'int idade = 11;'
          },
          {
            type: 'interactive_anatomy',
            badge: 'Exploração',
            badgeType: 'type-anatomy',
            title: 'Toque para entender o código',
            text: 'Descubra a função de cada palavra na declaração de uma variável C++.',
            tokens: [
              { label: 'int', expTitle: 'TIPO', expText: 'Número Inteiro.' },
              { label: 'idade', expTitle: 'NOME', expText: 'Rótulo da variável.' },
              { label: '=', expTitle: 'ATRIBUIÇÃO', expText: 'Guarda o valor.' },
              { label: '11', expTitle: 'VALOR', expText: 'Dado salvo.' },
              { label: ';', expTitle: 'FIM', expText: 'Encerra a instrução.' }
            ]
          },
          {
            type: 'interactive_slot',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Crie uma variável inteira',
            text: 'Preencha a lacuna para criar uma variável numérica:',
            codeBefore: '',
            codeAfter: ' pino = 13;',
            chips: ['int', 'float', 'void', 'char'],
            correctAnswer: 'int',
            explanation: '"int" é o tipo reservado para números inteiros.'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio Prático',
            badgeType: 'type-challenge',
            title: 'Digite do zero!',
            text: 'Escreva a linha completa em C++ para declarar a variável "score" com o valor 100.',
            correctKeywords: ['int', 'score', '=', '100', ';'],
            explanation: 'Perfeito! Declaração correta.'
          }
        ]
      },
      {
        id: 'l2',
        title: '02. Tomando Decisões com (if)',
        tag: 'Lógica',
        learnedConcepts: [
          'Estrutura condicional if',
          'Operadores de comparação: ==, >='
        ],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'O comando if',
            text: 'O if permite executar instruções apenas se uma condição for verdadeira.',
            code: 'if (temperatura >= 30) {\n  // Ligar cooler\n}'
          },
          {
            type: 'interactive_slot',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Operador de Igualdade',
            text: 'Qual operador compara se dois valores são iguais em C++?',
            codeBefore: 'if (botao ',
            codeAfter: ' 1) { }',
            chips: ['==', '=', '!=', '<'],
            correctAnswer: '==',
            explanation: 'Usamos "==" para comparar igualdade.'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Escreva uma estrutura if',
            text: 'Digite uma verificação se o valor é maior que 50:',
            correctKeywords: ['if', '>', '50'],
            explanation: 'Excelente! Condição estruturada com sucesso.'
          }
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
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Preparando os Pinos',
            text: 'Antes de usar qualquer pino no Arduino, precisamos configurá-lo no setup().',
            code: 'pinMode(13, OUTPUT);'
          },
          {
            type: 'interactive_slot',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Modo Saída',
            text: 'Preencha o parâmetro para configurar o pino como saída de energia:',
            codeBefore: 'pinMode(13, ',
            codeAfter: ');',
            chips: ['OUTPUT', 'INPUT', 'HIGH', 'LOW'],
            correctAnswer: 'OUTPUT',
            explanation: 'OUTPUT indica que o pino enviará 5V.'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Configure o pino 8',
            text: 'Escreva o comando para configurar o pino 8 como OUTPUT:',
            correctKeywords: ['pinMode', '8', 'OUTPUT'],
            explanation: 'Perfeito!'
          }
        ]
      },
      {
        id: 'l4',
        title: '04. Escrevendo em Pinos (digitalWrite)',
        tag: 'Hardware',
        learnedConcepts: ['digitalWrite()', 'HIGH e LOW'],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Ligando e Desligando LEDs',
            text: 'O comando digitalWrite envia 5V (HIGH) ou 0V (LOW) para o pino.',
            code: 'digitalWrite(13, HIGH);'
          },
          {
            type: 'interactive_slot',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Desligar componente',
            text: 'Qual valor envia 0V (desligado) para o pino?',
            codeBefore: 'digitalWrite(13, ',
            codeAfter: ');',
            chips: ['LOW', 'HIGH', 'OUTPUT', '5V'],
            correctAnswer: 'LOW',
            explanation: 'LOW desliga o pino.'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Ligue o pino 13',
            text: 'Escreva a instrução para colocar o pino 13 em HIGH:',
            correctKeywords: ['digitalWrite', '13', 'HIGH'],
            explanation: 'Excelente!'
          }
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
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Leitura Analógica',
            text: 'Diferente do digital (0 ou 1), o analogRead lê valores de 0 a 1023.',
            code: 'int valor = analogRead(A0);'
          },
          {
            type: 'interactive_slot',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Função de Leitura',
            text: 'Qual função lê um pino analógico?',
            codeBefore: 'int sensor = ',
            codeAfter: '(A0);',
            chips: ['analogRead', 'digitalRead', 'pinMode', 'analogWrite'],
            correctAnswer: 'analogRead',
            explanation: 'analogRead lê portas analógicas.'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Faça a leitura',
            text: 'Escreva o comando para ler a porta analógica A1:',
            correctKeywords: ['analogRead', 'A1'],
            explanation: 'Muito bom!'
          }
        ]
      },
      {
        id: 'l6',
        title: '06. Sensor de Luz LDR',
        tag: 'Sensores',
        learnedConcepts: ['Divisor de tensão', 'Mapeamento de valores'],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'LDR e Escuridão',
            text: 'O LDR altera sua resistência conforme a luz incidente, permitindo detectar dia e noite.',
            code: 'int luz = analogRead(A2);'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Atribua o valor do LDR',
            text: 'Escreva uma linha lendo o sensor LDR conectado no pino A3:',
            correctKeywords: ['analogRead', 'A3'],
            explanation: 'Perfeito!'
          }
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
        title: '07. Controlando Servo Motores (SG90)',
        tag: 'Motores',
        learnedConcepts: ['Biblioteca Servo.h', 'write() de ângulos'],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Movimento Preciso',
            text: 'Servo motores giram de 0 a 180 graus com precisão.',
            code: '#include <Servo.h>\nServo meuServo;\nmeuServo.attach(9);\nmeuServo.write(90);'
          },
          {
            type: 'interactive_slot',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Definindo Ângulo',
            text: 'Qual comando define a posição do servo motor para 180 graus?',
            codeBefore: 'meuServo.',
            codeAfter: '(180);',
            chips: ['write', 'attach', 'read', 'set'],
            correctAnswer: 'write',
            explanation: '.write() define o ângulo do eixo.'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Gire o motor',
            text: 'Escreva o comando para mover o servo para 0 graus:',
            correctKeywords: ['write', '0'],
            explanation: 'Excelente!'
          }
        ]
      },
      {
        id: 'l8',
        title: '08. Gerando Sons com Buzzer',
        tag: 'Atuadores',
        learnedConcepts: ['tone()', 'noTone()'],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Buzzer Sonoro',
            text: 'Podemos emitir frequências sonoras usando a função tone().',
            code: 'tone(8, 1000); // Pino 8, Frequência 1000Hz'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Emita um som',
            text: 'Escreva o comando tone para tocar no pino 7 com frequência 500:',
            correctKeywords: ['tone', '7', '500'],
            explanation: 'Mandou bem!'
          }
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
        title: '09. Monitor Serial (Serial.begin)',
        tag: 'Comunicação',
        learnedConcepts: ['Serial.begin(9600)', 'Serial.println()'],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Conversando com o PC',
            text: 'O Monitor Serial permite exibir textos e variáveis na tela do seu computador.',
            code: 'Serial.begin(9600);\nSerial.println("Ola Arduino");'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Imprima na tela',
            text: 'Escreva o comando para imprimir a palavra "Teste" no Serial:',
            correctKeywords: ['Serial.println', 'Teste'],
            explanation: 'Perfeito!'
          }
        ]
      },
      {
        id: 'l10',
        title: '10. Laço de Repetição (for)',
        tag: 'Lógica',
        learnedConcepts: ['Estrutura for', 'Iterações e contadores'],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Repetindo Tarefas',
            text: 'O loop for repete um bloco de código um número específico de vezes.',
            code: 'for (int i = 0; i < 5; i++) {\n  // Repete 5 vezes\n}'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Escreva um loop for',
            text: 'Digite a inicialização básica de um loop for com int i = 0:',
            correctKeywords: ['for', 'int i = 0'],
            explanation: 'Excelente!'
          }
        ]
      },
      {
        id: 'l11',
        title: '11. Criando Funções Próprias',
        tag: 'C++ Avançado',
        learnedConcepts: ['void nomeFuncao()', 'Reutilização de código'],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Modularizando o Código',
            text: 'Funções ajudam a organizar blocos de código que se repetem.',
            code: 'void piscarLed() {\n  digitalWrite(13, HIGH);\n  delay(500);\n}'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Declare uma função void',
            text: 'Escreva a assinatura inicial de uma função vazia chamada "alarme":',
            correctKeywords: ['void', 'alarme'],
            explanation: 'Perfeito!'
          }
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
        learnedConcepts: ['Múltiplos LEDs', 'Temporização com delay'],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Lógica de Trânsito',
            text: 'Neste projeto, controlaremos três LEDs (Vermelho, Amarelo e Verde) em sequência.',
            code: 'digitalWrite(VERDE, HIGH);\ndelay(3000);\ndigitalWrite(VERDE, LOW);'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Atraso de tempo',
            text: 'Escreva um comando delay de 2 segundos (2000 milissegundos):',
            correctKeywords: ['delay', '2000'],
            explanation: 'Excelente!'
          }
        ]
      },
      {
        id: 'l13',
        title: '13. Projeto: Alarme com Sensor de Presença',
        tag: 'Projeto',
        learnedConcepts: ['Leitura de Botão/Sensor', 'Ativação de Buzzer'],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Sistema de Segurança',
            text: 'Se o sensor for acionado, o buzzer toca e o LED pisca.',
            code: 'if (digitalRead(SENSOR) == HIGH) {\n  tone(BUZZER, 1500);\n}'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Verifique o sensor',
            text: 'Escreva uma estrutura if verificando se digitalRead(2) é igual a HIGH:',
            correctKeywords: ['if', 'digitalRead', '2', 'HIGH'],
            explanation: 'Perfeito!'
          }
        ]
      },
      {
        id: 'l14',
        title: '14. Projeto: Robô Animatrônico',
        tag: 'Projeto',
        learnedConcepts: ['Servo motor controlado por lógica', 'Movimentos de mandíbula'],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Movendo a Boca do Robô',
            text: 'Usamos o servo motor para abrir e fechar a boca do robô animatrônico.',
            code: 'cabecaServo.write(45);\ndelay(400);\ncabecaServo.write(0);'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio',
            badgeType: 'type-challenge',
            title: 'Posicione o servo',
            text: 'Escreva o comando para posicionar o servo chamado cabecaServo em 90 graus:',
            correctKeywords: ['cabecaServo.write', '90'],
            explanation: 'Muito bem!'
          }
        ]
      },
      {
        id: 'l15',
        title: '15. Projeto Final: Estação Meteorológica',
        tag: 'Projeto Final',
        learnedConcepts: ['Leitura de múltiplos sensores', 'Exibição no Serial Monitor'],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Consolidação Final',
            text: 'Você concluiu a jornada de C++ e Robótica! Agora junta sensores, atuadores e lógica.',
            code: 'int temp = analogRead(A0);\nSerial.print("Temp: ");\nSerial.println(temp);'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio Final',
            badgeType: 'type-challenge',
            title: 'Imprima a temperatura',
            text: 'Escreva o comando para imprimir a variável temp no Serial:',
            correctKeywords: ['Serial.println', 'temp'],
            explanation: 'Parabéns! Você concluiu todos os módulos!'
          }
        ]
      }
    ]
  }
];
