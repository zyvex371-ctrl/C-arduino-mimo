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
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'O que é uma Variável?', text: 'Uma variável é como uma caixa com um nome na memória para guardar dados.', code: 'int idade = 11;' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia da Variável', text: 'Toque nas partes do código para entender sua função:', tokens: [
            { label: 'int', expTitle: 'TIPO', expText: 'Número Inteiro.' },
            { label: 'idade', expTitle: 'NOME', expText: 'Identificador.' },
            { label: '=', expTitle: 'ATRIBUIÇÃO', expText: 'Guarda o valor.' },
            { label: '11', expTitle: 'VALOR', expText: 'Dado salvo.' },
            { label: ';', expTitle: 'FIM', expText: 'Encerra a instrução.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Criando int', text: 'Preencha a lacuna com o tipo correto:', codeBefore: '', codeAfter: ' pino = 13;', chips: ['int', 'float', 'void', 'char'], correctAnswer: 'int', explanation: '"int" armazena números inteiros.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'O operador =', text: 'O que o sinal de igual faz em C++?', options: ['Compara igualdade', 'Atribui valor à esquerda', 'Soma valores'], correct: 1, explanation: 'O sinal = atribui o valor da direita à variável da esquerda.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'O valor pode mudar', text: 'Como o nome diz, o valor de uma variável pode ser alterado a qualquer momento.', code: 'int nivel = 1;\nnivel = 2;' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Uma variável declarada como int pode receber um novo valor depois.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro, o valor pode ser alterado durante a execução.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Atribuindo novo valor', text: 'Preencha para atualizar o score:', codeBefore: 'score = ', codeAfter: ';', chips: ['500', 'int', 'void', 'true'], correctAnswer: '500', explanation: 'Atribuímos o número 500 à variável.' },
          { type: 'output_quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Valor Final', text: 'Qual o valor armazenado ao final?\nint x = 10;\nx = 25;', options: ['10', '25', '35', 'Erro'], correct: 1, explanation: 'O último valor atribuído foi 25.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Nomes de Variáveis', text: 'Os nomes não podem conter espaços ou começar com números.', code: 'int meuScore = 10; // Correto' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Regras de Nomes', text: 'Podemos colocar espaços no nome de uma variável em C++?', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. Nomes de variáveis não aceitam espaços.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Tipo para Caracteres', text: 'Qual tipo usamos para guardar uma única letra?', codeBefore: '', codeAfter: ' letra = \'A\';', chips: ['char', 'int', 'float', 'void'], correctAnswer: 'char', explanation: '"char" armazena caracteres individuais.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Fim de Comando', text: 'Qual caractere é obrigatório no final de cada instrução em C++?', options: ['.', ';', ':', ','], correct: 1, explanation: 'O ponto-e-vírgula (;) encerra a linha de comando.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva a declaração: int score = 100;', correctKeywords: ['int', 'score', '=', '100', ';'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva a declaração: int nivel = 1;', correctKeywords: ['int', 'nivel', '=', '1', ';'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l2',
        title: '02. Tomando Decisões com (if)',
        tag: 'Lógica',
        learnedConcepts: ['Condicional if', 'Operadores de comparação'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'O comando if', text: 'Executa códigos apenas se a condição for verdadeira.', code: 'if (temp >= 30) { }' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia do if', text: 'Toque para explorar:', tokens: [
            { label: 'if', expTitle: 'COMANDO', expText: 'Estrutura condicional.' },
            { label: '(', expTitle: 'INÍCIO', expText: 'Abre a condição.' },
            { label: 'temp >= 30', expTitle: 'CONDIÇÃO', expText: 'Teste lógico.' },
            { label: ')', expTitle: 'FIM', expText: 'Fecha a condição.' },
            { label: '{ }', expTitle: 'BLOCO', expText: 'Código executado se verdadeiro.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Igualdade', text: 'Preencha o operador de comparação de igualdade:', codeBefore: 'if (x ',
          codeAfter: ' 10) { }', chips: ['==', '=', '!=', '>'], correctAnswer: '==', explanation: 'Usamos == para comparar igualdade.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Diferença', text: 'Qual operador significa "diferente de"?', options: ['!=', '==', '>=', '<='], correct: 0, explanation: '!= verifica se os valores são diferentes.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Bloco de Código', text: 'Tudo dentro das chaves {} pertence ao if.', code: 'if (luz < 100) {\n  digitalWrite(LED, HIGH);\n}' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'O código dentro das chaves roda se a condição for falsa.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. Só roda se a condição for verdadeira.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Maior que', text: 'Preencha o operador "maior que":', codeBefore: 'if (valor ',
          codeAfter: ' 50) { }', chips: ['>', '<', '==', '='], correctAnswer: '>', explanation: '> significa estritamente maior que.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Condicional Simples', text: 'O que acontece se a condição do if for falsa e não houver else?', options: ['O programa trava', 'O bloco é ignorado', 'Dá erro de compilação'], correct: 1, explanation: 'O bloco é ignorado e o código continua.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Operador Maior ou Igual', text: 'Combinamos > e = para maior ou igual.', code: 'if (pontos >= 100) { }' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Ordem dos Símbolos', text: 'No operador maior ou igual, escrevemos => com o igual na frente?', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. O correto é >= (maior na frente, igual atrás).' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Menor ou igual', text: 'Preencha o operador menor ou igual:', codeBefore: 'if (nivel ',
          codeAfter: ' 3) { }', chips: ['<=', '>=', '==', '!='], correctAnswer: '<=', explanation: '<= significa menor ou igual.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Sintaxe', text: 'Onde fica a condição do if?', options: ['Dentro de parênteses ()', 'Dentro de colchetes []', 'Fora de chaves'], correct: 0, explanation: 'A condição fica sempre entre parênteses.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: if (x > 10) { }', correctKeywords: ['if', 'x', '>', '10'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: if (ativo == 1) { }', correctKeywords: ['if', 'ativo', '==', '1'], explanation: 'Excelente!' }
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
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Preparando os Pinos', text: 'Precisamos configurar cada pino antes de usar.', code: 'pinMode(13, OUTPUT);' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia pinMode', text: 'Toque para explorar:', tokens: [
            { label: 'pinMode', expTitle: 'FUNÇÃO', expText: 'Configura o pino.' },
            { label: '13', expTitle: 'PINO', expText: 'Número da porta.' },
            { label: 'OUTPUT', expTitle: 'MODO', expText: 'Saída de energia.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Modo Saída', text: 'Defina o modo de saída:', codeBefore: 'pinMode(13, ', codeAfter: ');', chips: ['OUTPUT', 'INPUT', 'HIGH', 'LOW'], correctAnswer: 'OUTPUT', explanation: 'OUTPUT configura como saída.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Onde configurar?', text: 'Em qual bloco colocamos o pinMode?', options: ['setup()', 'loop()', 'Fora de tudo'], correct: 0, explanation: 'No setup() porque roda apenas uma vez.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Modo Entrada (INPUT)', text: 'Usamos INPUT quando queremos ler um botão ou sensor.', code: 'pinMode(2, INPUT);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Maiúsculas', text: 'A palavra OUTPUT deve ser escrita em letras maiúsculas?', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro. O C++ diferencia maiúsculas e minúsculas.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Configurar Pino 8', text: 'Configure o pino 8 como OUTPUT:', codeBefore: 'pinMode(', codeAfter: ', OUTPUT);', chips: ['8', '13', 'A0', 'pinMode'], correctAnswer: '8', explanation: 'Primeiro argumento é o número do pino.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Parâmetros', text: 'Quantos parâmetros o pinMode recebe?', options: ['1', '2', '3', 'Nenhum'], correct: 1, explanation: 'Recebe 2: o pino e o modo.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Pinos Digitais', text: 'O Arduino Uno possui pinos digitais de 0 a 13.', code: 'pinMode(7, OUTPUT);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Podemos usar o pinMode sem especificar o número do pino.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. É obrigatório informar o pino.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Configurar Botão', text: 'Configure o pino 4 como INPUT:', codeBefore: 'pinMode(4, ', codeAfter: ');', chips: ['INPUT', 'OUTPUT', 'HIGH', 'LOW'], correctAnswer: 'INPUT', explanation: 'INPUT para ler sinais externos.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Função do setup', text: 'O setup() serve para...', options: ['Repetir infinitamente', 'Configurações iniciais', 'Desligar a placa'], correct: 1, explanation: 'Configurações iniciais da placa.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: pinMode(13, OUTPUT);', correctKeywords: ['pinMode', '13', 'OUTPUT'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: pinMode(2, INPUT);', correctKeywords: ['pinMode', '2', 'INPUT'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l4',
        title: '04. Escrevendo em Pinos (digitalWrite)',
        tag: 'Hardware',
        learnedConcepts: ['digitalWrite()', 'HIGH e LOW'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Enviando Energia', text: 'digitalWrite liga ou desliga um pino digital.', code: 'digitalWrite(13, HIGH);' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia digitalWrite', text: 'Toque para explorar:', tokens: [
            { label: 'digitalWrite', expTitle: 'COMANDO', expText: 'Escreve sinal digital.' },
            { label: '13', expTitle: 'PINO', expText: 'Alvo da energia.' },
            { label: 'HIGH', expTitle: 'VALOR', expText: 'Ligado (5V).' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Desligar', text: 'Qual comando envia 0V (desligado)?', codeBefore: 'digitalWrite(13, ', codeAfter: ');', chips: ['LOW', 'HIGH', 'OUTPUT', '5V'], correctAnswer: 'LOW', explanation: 'LOW desliga o pino.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Significado HIGH', text: 'O que HIGH representa em volts?', options: ['0V', '5V', '12V', '3.3V'], correct: 1, explanation: 'HIGH representa 5 Volts (ligado).' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'O loop()', text: 'O código dentro do loop() repete sem parar.', code: 'void loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'digitalWrite funciona em pinos configurados como INPUT.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. digitalWrite é para pinos OUTPUT.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Ligar Pino 7', text: 'Ligue o pino 7:', codeBefore: 'digitalWrite(7, ', codeAfter: ');', chips: ['HIGH', 'LOW', 'INPUT', 'OUTPUT'], correctAnswer: 'HIGH', explanation: 'HIGH envia 5V.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Função delay', text: 'O que delay(1000) faz?', options: ['Desliga o Arduino', 'Pausa por 1 segundo', 'Liga o LED'], correct: 1, explanation: 'Pausa a execução por 1000 milissegundos (1s).' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Piscar LED', text: 'Alternando HIGH e LOW criamos o efeito piscar.', code: 'digitalWrite(13, HIGH);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'LOW representa 0 Volts.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro, LOW desliga o circuito.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Desligar pino 8', text: 'Desligue o pino 8:', codeBefore: 'digitalWrite(8, ', codeAfter: ');', chips: ['LOW', 'HIGH', 'INPUT', '5V'], correctAnswer: 'LOW', explanation: 'LOW coloca em 0V.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Repetição', text: 'Onde colocamos o loop de piscar o LED?', options: ['setup()', 'loop()', 'Fora do código'], correct: 1, explanation: 'No loop() para rodar continuamente.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: digitalWrite(13, HIGH);', correctKeywords: ['digitalWrite', '13', 'HIGH'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: digitalWrite(13, LOW);', correctKeywords: ['digitalWrite', '13', 'LOW'], explanation: 'Excelente!' }
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
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Leitura Analógica', text: 'analogRead lê valores de 0 a 1023.', code: 'int valor = analogRead(A0);' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia analogRead', text: 'Toque para explorar:', tokens: [
            { label: 'analogRead', expTitle: 'FUNÇÃO', expText: 'Lê sinal analógico.' },
            { label: 'A0', expTitle: 'PORTA', expText: 'Entrada analógica.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Função de Leitura', text: 'Qual função lê pinos analógicos?', codeBefore: 'int val = ', codeAfter: '(A0);', chips: ['analogRead', 'digitalRead', 'pinMode', 'analogWrite'], correctAnswer: 'analogRead', explanation: 'analogRead lê portas analógicas.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Escala de Valores', text: 'Qual é a faixa máxima de leitura do analogRead?', options: ['0 a 255', '0 a 1023', '0 a 100'], correct: 1, explanation: 'Vai de 0 a 1023 (10 bits de resolução).' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Portas Analógicas', text: 'O Arduino possui portas dedicadas chamadas de A0 até A5.', code: 'int leitura = analogRead(A1);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Podemos usar analogRead em pinos digitais como o pino 13.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. analogRead usa as portas A0-A5.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Ler porta A2', text: 'Leia a porta A2:', codeBefore: 'int sensor = analogRead(', codeAfter: ');', chips: ['A2', '13', 'HIGH', 'OUTPUT'], correctAnswer: 'A2', explanation: 'Passamos a porta A2 como argumento.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Tipo de Retorno', text: 'Que tipo de dado o analogRead retorna?', options: ['int', 'String', 'boolean'], correct: 0, explanation: 'Retorna um número inteiro (int).' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Armazenando dados', text: 'Sempre guardamos o valor lido em uma variável.', code: 'int pot = analogRead(A0);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'O analogRead precisa de pinMode prévio.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. Portas analógicas configuram-se automaticamente.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Atribuir leitura', text: 'Complete a atribuição:', codeBefore: 'int val = ', codeAfter: '(A3);', chips: ['analogRead', 'digitalRead', 'tone', 'write'], correctAnswer: 'analogRead', explanation: 'analogRead realiza a leitura.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Resolução', text: 'Quantos valores diferentes o analogRead pode retornar?', options: ['1024', '256', '2'], correct: 0, explanation: '1024 valores (de 0 a 1023).' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: int valor = analogRead(A0);', correctKeywords: ['int', 'valor', '=', 'analogRead', 'A0'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: analogRead(A1);', correctKeywords: ['analogRead', 'A1'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l6',
        title: '06. Sensor de Luz LDR',
        tag: 'Sensores',
        learnedConcepts: ['Divisor de tensão', 'Mapeamento'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'O que é um LDR?', text: 'Sensor que varia resistência com a luz.', code: 'int luz = analogRead(A2);' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia LDR', text: 'Toque para explorar:', tokens: [
            { label: 'luz', expTitle: 'VARIÁVEL', expText: 'Guarda o nível de luz.' },
            { label: 'analogRead', expTitle: 'LEITURA', expText: 'Lê o sensor.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Leitura do LDR', text: 'Leia o LDR no pino A3:', codeBefore: 'int ldr = ', codeAfter: '(A3);', chips: ['analogRead', 'digitalRead', 'pinMode', 'delay'], correctAnswer: 'analogRead', explanation: 'LDR é lido analogicamente.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Comportamento', text: 'O que acontece com a resistência do LDR no escuro?', options: ['Aumenta muito', 'Zera', 'Fica igual'], correct: 0, explanation: 'No escuro, a resistência aumenta.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Luz e Tomada de Decisão', text: 'Podemos acender um LED automaticamente se estiver escuro.', code: 'if (analogRead(A2) < 300) { digitalWrite(LED, HIGH); }' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'O LDR é um sensor digital.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. Ele fornece valores analógicos contínuos.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Verificar Escuridão', text: 'Preencha a condição para escuro (< 200):', codeBefore: 'if (analogRead(A2) ',
          codeAfter: ' 200) { }', chips: ['<', '>', '==', '!='], correctAnswer: '<', 'explanation': 'Valores baixos indicam baixa luminosidade.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Aplicação', text: 'Onde encontramos sensores LDR no dia a dia?', options: ['Lâmpadas de poste automáticas', 'Controles remotos', 'Baterias'], correct: 0, explanation: 'Postes acendem sozinhos à noite usando LDR.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Variável de Luz', text: 'Sempre é bom salvar a leitura em uma variável para reutilizar.', code: 'int nivelLuz = analogRead(A0);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Podemos ligar um LDR diretamente sem resistores?', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. Precisa de divisor de tensão com resistor.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Atribuir LDR', text: 'Atribua a leitura A1:', codeBefore: 'int foto = ', codeAfter: '(A1);', chips: ['analogRead', 'digitalRead', 'tone', 'write'], correctAnswer: 'analogRead', explanation: 'analogRead faz a leitura.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Porta analógica', text: 'Qual pino podemos usar para o LDR?', options: ['A0', '13', '7'], correct: 0, explanation: 'Pinos analógicos A0 a A5.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: int luz = analogRead(A2);', correctKeywords: ['int', 'luz', '=', 'analogRead', 'A2'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: analogRead(A0);', correctKeywords: ['analogRead', 'A0'], explanation: 'Excelente!' }
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
        learnedConcepts: ['Servo.h', 'write()'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Servo Motor', text: 'Gira de 0 a 180 graus com precisão.', code: '#include <Servo.h>\nServo meuServo;\nmeuServo.attach(9);\nmeuServo.write(90);' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia Servo', text: 'Toque para explorar:', tokens: [
            { label: 'meuServo.write', expTitle: 'MÉTODO', expText: 'Move o eixo.' },
            { label: '90', expTitle: 'GRAUS', expText: 'Posição do motor.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Movimentar', text: 'Qual comando define o ângulo do servo?', codeBefore: 'meuServo.', codeAfter: '(180);', chips: ['write', 'attach', 'read', 'set'], correctAnswer: 'write', explanation: '.write() define o ângulo.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Amplitude', text: 'Qual é o limite de graus de um servo padrão?', options: ['0 a 180', '0 a 360', '0 a 90'], correct: 0, explanation: 'Giram geralmente de 0 a 180 graus.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Biblioteca Servo', text: 'Precisamos incluir a biblioteca no topo do código.', code: '#include <Servo.h>' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'O comando attach() vincula o objeto servo ao pino físico.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro, attach diz em qual pino o servo está.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Vincular pino', text: 'Vincule ao pino 6:', codeBefore: 'meuServo.attach(', codeAfter: ');', chips: ['6', 'HIGH', 'OUTPUT', 'A0'], correctAnswer: '6', explanation: 'Passamos o número do pino digital.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Posição inicial', text: 'Para mover o servo para o centro exato, usamos qual ângulo?', options: ['90', '180', '0'], correct: 0, explanation: '90 graus é o centro (meio termo).' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Criando Objeto', text: 'Criamos uma variável especial do tipo Servo.', code: 'Servo bracoRobo;' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Podemos ligar o servo em qualquer pino analógico sem attach.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. O attach é obrigatório.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Mover para 0', text: 'Mova para 0 graus:', codeBefore: 'meuServo.write(', codeAfter: ');', chips: ['0', '90', '180', 'HIGH'], correctAnswer: '0', explanation: '0 graus representa a posição inicial.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Alimentação', text: 'Por que servos exigem fonte externa de energia em projetos grandes?', options: ['Para não queimar o USB', 'Para esquentar', 'Não precisam'], correct: 0, explanation: 'Eles puxam muita corrente e podem travar o Arduino.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: meuServo.write(90);', correctKeywords: ['meuServo.write', '90'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: meuServo.attach(9);', correctKeywords: ['meuServo.attach', '9'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l8',
        title: '08. Gerando Sons com Buzzer',
        tag: 'Atuadores',
        learnedConcepts: ['tone()', 'noTone()'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Emitindo Sons', text: 'O comando tone toca frequências em um buzzer.', code: 'tone(8, 1000); // Pino 8, 1000Hz' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia tone', text: 'Toque para explorar:', tokens: [
            { label: 'tone', expTitle: 'COMANDO', expText: 'Emite som.' },
            { label: '8', expTitle: 'PINO', expText: 'Porta do buzzer.' },
            { label: '1000', expTitle: 'FREQUÊNCIA', expText: 'Tom da nota.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Tocar Buzzer', text: 'Qual função toca som no pino 8?', codeBefore: '', codeAfter: '(8, 500);', chips: ['tone', 'sound', 'play', 'analogRead'], correctAnswer: 'tone', explanation: 'tone emite a frequência sonora.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Parar som', text: 'Qual comando desliga o som do buzzer?', options: ['noTone()', 'stopTone()', 'off()'], correct: 0, explanation: 'noTone(pino) interrompe o som.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Parando o Som', text: 'Sempre use noTone para calar o buzzer após um delay.', code: 'tone(8, 1000);\ndelay(500);\nnoTone(8);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'O tone() precisa que o pino seja configurado com pinMode.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. A função tone configura o pino automaticamente.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Parar som pino 8', text: 'Pare o som no pino 8:', codeBefore: '', codeAfter: '(8);', chips: ['noTone', 'tone', 'stop', 'off'], correctAnswer: 'noTone', explanation: 'noTone desliga a frequência.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Unidade de Frequência', text: 'Em que unidade a frequência do som é medida?', options: ['Hertz (Hz)', 'Volts', 'Milissegundos'], correct: 0, explanation: 'Em Hertz (Hz).' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Criando Melodias', text: 'Combinando tone, delay e noTone criamos notas musicais.', code: 'tone(8, 440); delay(200); noTone(8);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Podemos tocar duas frequências diferentes no mesmo pino ao mesmo tempo.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. Apenas um som por pino por vez.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Frequência 2000Hz', text: 'Toca 2000Hz no pino 7:', codeBefore: 'tone(7, ', codeAfter: ');', chips: ['2000', '8', 'HIGH', 'LOW'], correctAnswer: '2000', explanation: 'Passamos 2000 como frequência.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Tipo de Buzzer', text: 'Existem buzzers passivos (precisam de frequência) e...', options: ['Ativos (apitam sozinhos)', 'Motorizados', 'Analógicos'], correct: 0, explanation: 'Ativos emitem som contínuo ao receber 5V.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: tone(8, 1000);', correctKeywords: ['tone', '8', '1000'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: noTone(8);', correctKeywords: ['noTone', '8'], explanation: 'Excelente!' }
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
        learnedConcepts: ['Serial.begin()', 'Serial.println()'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Monitor Serial', text: 'Exibe textos e variáveis no computador.', code: 'Serial.begin(9600);\nSerial.println("Olá");' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia Serial', text: 'Toque para explorar:', tokens: [
            { label: 'Serial.begin', expTitle: 'INICIALIZAÇÃO', expText: 'Abre comunicação.' },
            { label: '9600', expTitle: 'BAUD RATE', expText: 'Velocidade de transmissão.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Velocidade Padrão', text: 'Qual a velocidade padrão mais usada no Serial?', codeBefore: 'Serial.begin(', codeAfter: ');', chips: ['9600', '115200', '500', '10'], correctAnswer: '9600', explanation: '9600 bauds é o padrão clássico.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Onde iniciar?', text: 'Onde colocamos o Serial.begin?', options: ['setup()', 'loop()', 'Fora do programa'], correct: 0, explanation: 'No setup() para iniciar junto com a placa.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Imprimindo Linhas', text: 'Serial.println pula linha após imprimir.', code: 'Serial.println(temperatura);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Serial.print() pula linha automaticamente.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. Serial.print mantém na mesma linha.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Imprimir texto', text: 'Imprima "Arduino" com quebra de linha:', codeBefore: 'Serial.', codeAfter: '("Arduino");', chips: ['println', 'print', 'begin', 'read'], correctAnswer: 'println', explanation: 'println imprime e pula linha.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Uso Principal', text: 'Para que serve o Monitor Serial?', options: ['Depurar e ver valores', 'Ligar motores', 'Carregar código'], correct: 0, explanation: 'Excelente para ver o que está acontecendo no código.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Exibindo Variáveis', text: 'Podemos imprimir valores de sensores diretamente.', code: 'Serial.println(analogRead(A0));' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'O Monitor Serial exige cabo USB conectado.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro, os dados trafegam pelo cabo USB.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Imprimir sem pular', text: 'Imprima sem pular linha:', codeBefore: 'Serial.', codeAfter: '(valor);', chips: ['print', 'println', 'begin', 'write'], correctAnswer: 'print', explanation: 'print mantém na mesma linha.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Velocidade', text: 'O que significa 9600 bauds?', options: ['9600 bits por segundo', '9600 graus', '9600 volts'], correct: 0, explanation: 'Velocidade de transmissão de dados.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: Serial.begin(9600);', correctKeywords: ['Serial.begin', '9600'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: Serial.println("Teste");', correctKeywords: ['Serial.println', 'Teste'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l10',
        title: '10. Laço de Repetição (for)',
        tag: 'Lógica',
        learnedConcepts: ['Estrutura for', 'Contadores'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'O Laço for', text: 'Repete um bloco de código várias vezes.', code: 'for (int i = 0; i < 5; i++) { }' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia for', text: 'Toque para explorar:', tokens: [
            { label: 'int i = 0', expTitle: 'INÍCIO', expText: 'Variável de controle.' },
            { label: 'i < 5', expTitle: 'CONDIÇÃO', expText: 'Enquanto for verdade, repete.' },
            { label: 'i++', expTitle: 'INCREMENTO', expText: 'Soma 1 a cada volta.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Palavra-chave', text: 'Qual palavra inicia um loop de contagem?', codeBefore: '', codeAfter: ' (int i = 0; i < 10; i++) { }', chips: ['for', 'while', 'if', 'loop'], correctAnswer: 'for', explanation: 'for cria loops com contagem controlada.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Incremento', text: 'O que o operador i++ faz?', options: ['Adiciona 1 a i', 'Subtrai 1', 'Zera i'], correct: 0, explanation: 'Incrementa 1 unidade na variável i.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Usando o for com LEDs', text: 'Podemos ligar vários LEDs em sequência usando o contador.', code: 'for (int pino = 2; pino <= 5; pino++) {\n  pinMode(pino, OUTPUT);\n}' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'A variável i criada no for só existe dentro do próprio loop.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro, ela tem escopo local.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Condição do loop', text: 'Complete a condição para rodar 10 vezes:', codeBefore: 'for (int i = 0; i ',
          codeAfter: ' 10; i++) { }', chips: ['<', '>', '==', '!='], correctAnswer: '<', explanation: 'Enquanto i for menor que 10.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Quantas vezes?', text: 'Quantas vezes roda o loop: for(int i=0; i<3; i++)?', options: ['3 vezes', '4 vezes', '2 vezes'], correct: 0, explanation: 'Roda para i=0, i=1 e i=2 (total 3 vezes).' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Contagem Regressiva', text: 'Podemos decrementar usando i--.', code: 'for (int i = 10; i > 0; i--) { }' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'O i-- diminui 1 a cada volta.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro, decrementa o contador.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Decremento', text: 'Preencha o operador de decremento:', codeBefore: 'for (int i = 5; i > 0; i',
          codeAfter: ') { }', chips: ['--', '++', '+='], correctAnswer: '--', explanation: '-- subtrai 1.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Sintaxe', text: 'Quantas partes separadas por ponto-e-vírgula ficam dentro dos parênteses do for?', options: ['3 partes', '2 partes', '1 parte'], correct: 0, explanation: 'Inicialização, condição e incremento.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: for (int i = 0; i < 5; i++) { }', correctKeywords: ['for', 'int i = 0', 'i < 5', 'i++'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: for (int p = 2; p <= 6; p++) { }', correctKeywords: ['for', 'p', '<=', 'p++'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l11',
        title: '11. Criando Funções Próprias',
        tag: 'C++ Avançado',
        learnedConcepts: ['void', 'Modularização'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'O que são Funções?', text: 'Blocos de código reutilizáveis que realizam tarefas específicas.', code: 'void piscar() {\n  digitalWrite(13, HIGH);\n  delay(500);\n}' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia Funções', text: 'Toque para explorar:', tokens: [
            { label: 'void', expTitle: 'RETORNO', expText: 'Não retorna nenhum valor.' },
            { label: 'piscar', expTitle: 'NOME', expText: 'Identificador da função.' },
            { label: '{ }', expTitle: 'CORPO', expText: 'Instruções executadas.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Palavra void', text: 'Qual palavra indica que a função não retorna valor?', codeBefore: '', codeAfter: ' minhaFuncao() { }', chips: ['void', 'int', 'null', 'char'], correctAnswer: 'void', explanation: 'void significa "vazio" (sem retorno).' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Vantagem', text: 'Por que criamos funções?', options: ['Para organizar e reaproveitar código', 'Para deixar o Arduino mais rápido', 'Para gastar menos memória'], correct: 0, explanation: 'Evita repetição e organiza o projeto.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Chamando a Função', text: 'Depois de criar a função, chamamos ela pelo nome no loop.', code: 'void loop() {\n  piscar();\n}' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Uma função precisa de parênteses () mesmo se não receber parâmetros.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro, os parênteses são obrigatórios.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Chamar função', text: 'Chame a função alarme():', codeBefore: '',
          codeAfter: ';', chips: ['alarme()', 'void alarme', 'call alarme', 'run alarme'], correctAnswer: 'alarme()', explanation: 'Chamamos pelo nome seguido de parênteses.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Estrutura', text: 'Onde declaramos funções personalizadas normalmente?', options: ['Fora do setup e do loop', 'Dentro do setup', 'Dentro do delay'], correct: 0, explanation: 'Geralmente declaradas fora, acima ou abaixo do setup/loop.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Funções com Parâmetros', text: 'Podemos enviar dados para dentro da função.', code: 'void acender(int pino) {\n  digitalWrite(pino, HIGH);\n}' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Podemos passar valores para dentro de uma função usando parâmetros.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Criar void', text: 'Inicie uma função chamada som:', codeBefore: '', codeAfter: ' som() { }', chips: ['void', 'int', 'float', 'char'], correctAnswer: 'void', explanation: 'void para função sem retorno.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Terminologia', text: 'Executar uma função criada é chamado de...', options: ['Chamar (ou invocar) a função', 'Compilar', 'Queimar'], correct: 0, explanation: 'Chamamos a função pelo nome.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: void minhaFuncao() { }', correctKeywords: ['void', 'minhaFuncao'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva a chamada: ligarLed();', correctKeywords: ['ligarLed'], explanation: 'Excelente!' }
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
        learnedConcepts: ['Múltiplos LEDs', 'Sequência lógica'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Semáforo de Trânsito', text: 'Controla LEDs Verde, Amarelo e Vermelho em sequência.', code: 'digitalWrite(VERDE, HIGH);\ndelay(3000);\ndigitalWrite(VERDE, LOW);' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia Semáforo', text: 'Toque para explorar:', tokens: [
            { label: 'VERDE', expTitle: 'LED', expText: 'Luz verde.' },
            { label: 'delay(3000)', expTitle: 'TEMPO', expText: 'Espera 3 segundos.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Atraso de 3s', text: 'Escreva um delay de 3000 milissegundos:', codeBefore: '', codeAfter: '(3000);', chips: ['delay', 'time', 'sleep', 'wait'], correctAnswer: 'delay', explanation: 'delay pausa a execução.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Ordem', text: 'No semáforo brasileiro padrão, após o verde vem qual luz?', options: ['Amarelo', 'Vermelho direto', 'Azul'], correct: 0, explanation: 'Amarelo sinaliza atenção.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Ciclo Completo', text: 'Ligamos um LED, desligamos os outros e aguardamos o tempo.', code: 'digitalWrite(AMARELO, HIGH);\ndelay(1000);\ndigitalWrite(AMARELO, LOW);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Em um semáforo, podemos deixar verde e vermelho ligados ao mesmo tempo.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. Geraria confusão no trânsito!' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Ligar Vermelho', text: 'Ligue o LED VERMELHO:', codeBefore: 'digitalWrite(VERMELHO, ', codeAfter: ');', chips: ['HIGH', 'LOW', 'OUTPUT', 'INPUT'], correctAnswer: 'HIGH', explanation: 'HIGH acende a luz vermelha.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Estrutura', text: 'Onde o ciclo do semáforo deve ficar rodando?', options: ['loop()', 'setup()', 'Fora do código'], correct: 0, explanation: 'No loop() para funcionar indefinidamente.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Definindo Pinos', text: 'Usamos constantes para nomear os pinos dos LEDs.', code: '#define VERDE 10\n#define AMARELO 11\n#define VERMELHO 12' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: '#define ajuda a organizar quais pinos ligam cada LED.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Definir pino', text: 'Defina a constante VERDE no pino 10:', codeBefore: '#define VERDE ', codeAfter: '', chips: ['10', 'HIGH', 'OUTPUT', 'PIN'], correctAnswer: '10', explanation: '10 é o número do pino físico.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Segurança', text: 'O que o semáforo evita?', options: ['Acidentes de trânsito', 'Falta de bateria', 'Curto-circuito'], correct: 0, explanation: 'Organiza o fluxo de veículos e pedestres.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: delay(3000);', correctKeywords: ['delay', '3000'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: digitalWrite(VERDE, HIGH);', correctKeywords: ['digitalWrite', 'VERDE', 'HIGH'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l13',
        title: '13. Projeto: Alarme com Sensor de Presença',
        tag: 'Projeto',
        learnedConcepts: ['Leitura de Botão/Sensor', 'Ativação de Buzzer'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Sistema de Segurança', text: 'Se o sensor detectar movimento, o alarme dispara.', code: 'if (digitalRead(SENSOR) == HIGH) {\n  tone(BUZZER, 1500);\n}' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia Alarme', text: 'Toque para explorar:', tokens: [
            { label: 'digitalRead', expTitle: 'LEITURA', expText: 'Lê pino digital.' },
            { label: 'tone', expTitle: 'SOM', expText: 'Dispara o buzzer.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Leitura Digital', text: 'Qual função lê o estado de um sensor digital?', codeBefore: 'int estado = ', codeAfter: '(2);', chips: ['digitalRead', 'analogRead', 'pinMode', 'tone'], correctAnswer: 'digitalRead', explanation: 'digitalRead lê 0 ou 1.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Condição', text: 'Quando o alarme deve tocar?', options: ['Apenas se a condição do if for verdadeira', 'Sempre', 'Nunca'], correct: 0, explanation: 'Apenas quando houver intruso detectado.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Desarmando o Alarme', text: 'Se não houver movimento, desligamos o som.', code: 'else {\n  noTone(BUZZER);\n}' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'O comando else executa se a condição do if for falsa.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Desligar buzzer', text: 'Desligue o buzzer no else:', codeBefore: 'else { ',
          codeAfter: '(BUZZER); }', chips: ['noTone', 'tone', 'digitalWrite', 'delay'], correctAnswer: 'noTone', explanation: 'noTone cessa o som do alarme.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Componentes', text: 'Quais componentes formam este projeto básico?', options: ['Sensor, Buzzer e Arduino', 'Motor e Hélice', 'Apenas bateria'], correct: 0, explanation: 'Sensor de presença e atuador sonoro.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Variável de Estado', text: 'Guardamos a leitura do sensor antes de testar.', code: 'int presenca = digitalRead(2);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'digitalRead retorna valores entre 0 e 1023.', options: ['Verdadeiro', 'Falso'], correct: 1, explanation: 'Falso. Retorna HIGH (1) ou LOW (0).' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Atribuir sensor', text: 'Atribua a leitura do pino 4:', codeBefore: 'int s = ', codeAfter: '(4);', chips: ['digitalRead', 'analogRead', 'tone', 'write'], correctAnswer: 'digitalRead', explanation: 'digitalRead lê pinos digitais.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Objetivo', text: 'Qual o propósito de um alarme?', options: ['Alertar sobre intrusos ou perigo', 'Iluminar o ambiente', 'Medir temperatura'], correct: 0, explanation: 'Aviso de segurança.' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: tone(BUZZER, 1500);', correctKeywords: ['tone', 'BUZZER', '1500'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: noTone(BUZZER);', correctKeywords: ['noTone', 'BUZZER'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l14',
        title: '14. Projeto: Robô Animatrônico',
        tag: 'Projeto',
        learnedConcepts: ['Servo motor', 'Movimentos de mandíbula'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Boca do Robô', text: 'Movimentamos a mandíbula do robô com um servo motor.', code: 'cabecaServo.write(45);\ndelay(400);\ncabecaServo.write(0);' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia Animatrônico', text: 'Toque para explorar:', tokens: [
            { label: 'cabecaServo.write', expTitle: 'MOVIMENTO', expText: 'Muda o ângulo.' },
            { label: '45', expTitle: 'ÂNGULO', expText: 'Abre a boca.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Abrir Boca', text: 'Mova o servo para 90 graus:', codeBefore: 'cabecaServo.', codeAfter: '(90);', chips: ['write', 'attach', 'read', 'delay'], correctAnswer: 'write', explanation: '.write() posiciona o servo.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Simulação', text: 'O que o robô animatrônico simula?', options: ['Expressões faciais e fala', 'Velocidade de carro', 'Temperatura'], correct: 0, explanation: 'Movimentos corporais realistas.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Sincronia', text: 'Usamos delays curtos entre os movimentos para parecer natural.', code: 'cabecaServo.write(90); delay(200);' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'O servo motor precisa estar anexado (attach) antes de receber write().', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro, o attach inicializa o pino.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Fechar boca', text: 'Feche a boca posicionando em 0 grau:', codeBefore: 'cabecaServo.write(',
          codeAfter: ');', chips: ['0', '90', '180', 'HIGH'], correctAnswer: '0', explanation: '0 graus fecha a mandíbula.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Componente principal', qual: 'Qual motor usamos para controle de posições exatas?', options: ['Servo motor', 'Motor DC comum', 'Ventoinha'], correct: 0, explanation: 'Servo motor.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Expressões', text: 'Criando sequências de abertura e fechamento.', code: 'void falar() {\n  cabecaServo.write(60);\n  delay(150);\n  cabecaServo.write(0);\n  delay(150);\n}' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', titleText: 'Funções ajudam a organizar os movimentos do robô.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Chamar função falar', text: 'Chame a função:', codeBefore: '', codeAfter: ';', chips: ['falar()', 'void falar', 'write falar', 'delay falar'], correctAnswer: 'falar()', explanation: 'Invocamos a função pelo nome.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Inspiração', text: 'Animatrônicos são muito famosos em parques e em jogos como...', options: ['FNAF (Five Nights at Freddy\'s)', 'Xadrez', 'Tetris'], correct: 0, explanation: 'Robôs animatrônicos icônicos!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: cabecaServo.write(45);', correctKeywords: ['cabecaServo.write', '45'], explanation: 'Perfeito!' },
          { type: 'code_challenge', badge: 'Desafio', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: cabecaServo.write(0);', correctKeywords: ['cabecaServo.write', '0'], explanation: 'Excelente!' }
        ]
      },
      {
        id: 'l15',
        title: '15. Projeto Final: Estação Meteorológica',
        tag: 'Projeto Final',
        learnedConcepts: ['Múltiplos sensores', 'Serial Monitor'],
        steps: [
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Estação Completa', text: 'Você chegou ao topo! Junta sensores, lógica e Serial.', code: 'int temp = analogRead(A0);\nSerial.print("Temp: ");\nSerial.println(temp);' },
          { type: 'interactive_anatomy', badge: 'Exploração', badgeType: 'type-anatomy', title: 'Anatomia Estação', text: 'Toque para explorar:', tokens: [
            { label: 'analogRead(A0)', expTitle: 'SENSOR', expText: 'Lê dados climáticos.' },
            { label: 'Serial.println', expTitle: 'EXIBIÇÃO', expText: 'Mostra no PC.' }
          ]},
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Leitura de Temperatura', text: 'Leia a porta analógica A0 para a temperatura:', codeBefore: 'int t = ', codeAfter: '(A0);', chips: ['analogRead', 'digitalRead', 'tone', 'write'], correctAnswer: 'analogRead', explanation: 'analogRead captura o sensor.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Conclusão', text: 'O que você dominou nesta jornada?', options: ['C++ e Robótica com Arduino', 'Apenas culinária', 'História antiga'], correct: 0, explanation: 'Parabéns por concluir toda a trilha!' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Aviso de Calor', text: 'Podemos acionar um cooler se a temperatura passar do limite.', code: 'if (temp > 600) {\n  digitalWrite(FAN, HIGH);\n}' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Uma estação meteorológica lê dados do ambiente em tempo real.', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Verdadeiro.' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Ligar Cooler', text: 'Ligue o pino do cooler:', codeBefore: 'digitalWrite(FAN, ', codeAfter: ');', chips: ['HIGH', 'LOW', 'OUTPUT', 'INPUT'], correctAnswer: 'HIGH', explanation: 'HIGH liga o ventilador.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Comunicação', text: 'Como visualizamos os dados da estação no computador?', options: ['Monitor Serial', 'Com som do buzzer', 'Com leds piscando apenas'], correct: 0, explanation: 'Usando o Serial Monitor.' },
          { type: 'explanation', badge: 'Aprender', badgeType: 'type-info', title: 'Ciclo de Atualização', text: 'Adicionamos um delay no final do loop para não sobrecarregar.', code: 'void loop() {\n  // código da estação\n  delay(2000);\n}' },
          { type: 'true_false', badge: 'Prática', badgeType: 'type-practice', title: 'Verdadeiro ou Falso', text: 'Você agora é capaz de criar seus próprios projetos de robótica!', options: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'Com certeza absoluto!' },
          { type: 'interactive_slot', badge: 'Prática', badgeType: 'type-practice', title: 'Delay final', text: 'Insira um atraso de 2 segundos:', codeBefore: '', codeAfter: '(2000);', chips: ['delay', 'time', 'sleep', 'wait'], correctAnswer: 'delay', explanation: 'delay(2000) aguarda 2 segundos.' },
          { type: 'quiz', badge: 'Prática', badgeType: 'type-practice', title: 'Parabéns!', text: 'Você concluiu o último módulo do ArduinoGo!', options: ['Sim, com certeza!', 'Ainda falta', 'Não sei'], correct: 0, explanation: 'Excelente trabalho!' },
          { type: 'code_challenge', badge: 'Desafio Final', badgeType: 'type-challenge', title: 'Digite do zero!', text: 'Escreva: Serial.println(temp);', correctKeywords: ['Serial.println', 'temp'], explanation: 'Parabéns por concluir toda a jornada!' },
          { type: 'code_challenge', badge: 'Desafio Final', badgeType: 'type-challenge', title: 'Mestre da Robótica', text: 'Escreva: delay(2000);', correctKeywords: ['delay', '2000'], explanation: 'Curso concluído com sucesso total!' }
        ]
      }
    ]
  }
];
