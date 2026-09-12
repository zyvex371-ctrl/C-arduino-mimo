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
          'Conceito de variável como espaço na memória',
          'Uso da palavra-chave int para inteiros',
          'Sintaxe com operador = e ponto-e-vírgula ;',
          'Como reatribuir e atualizar valores'
        ],
        steps: [
          // ETAPA 1
          {
            type: 'explanation',
            badge: '1/14 Conceito',
            badgeType: 'type-info',
            title: 'O que é uma Variável?',
            text: 'Uma variável é como uma caixa com um nome na memória do computador. Ela guarda dados que o seu programa usa.',
            code: 'int idade = 11;'
          },
          // ETAPA 2
          {
            type: 'interactive_anatomy',
            badge: '2/14 Anatomia',
            badgeType: 'type-anatomy',
            title: 'Toque para entender o código',
            text: 'Explore a função de cada elemento na declaração em C++:',
            tokens: [
              { label: 'int', expTitle: 'TIPO DE DADO', expText: 'Indica que o espaço guardará números inteiros.' },
              { label: 'idade', expTitle: 'NOME', expText: 'O rótulo identificador do dado.' },
              { label: '=', expTitle: 'ATRIBUIÇÃO', expText: 'Armazena o valor da direita na variável.' },
              { label: '11', expTitle: 'VALOR', expText: 'O dado numérico real salvo.' },
              { label: ';', expTitle: 'FIM DA LINHA', expText: 'Obrigatório em C++ para fechar o comando.' }
            ]
          },
          // ETAPA 3
          {
            type: 'interactive_slot',
            badge: '3/14 Prática',
            badgeType: 'type-practice',
            title: 'Defina o Tipo de Dado',
            text: 'Preencha a lacuna com a palavra reservada correta para declarar um número inteiro:',
            codeBefore: '',
            codeAfter: ' pino = 13;',
            chips: ['int', 'float', 'void', 'char'],
            correctAnswer: 'int',
            explanation: '"int" é o tipo de dado para números inteiros.'
          },
          // ETAPA 4
          {
            type: 'quiz',
            badge: '4/14 Fixação',
            badgeType: 'type-practice',
            title: 'Qual parte é o nome da variável?',
            text: 'Analise o comando: int velocidade = 80;',
            options: ['int', 'velocidade', '80', '='],
            correct: 1,
            explanation: '"velocidade" é o nome dado à posição de memória.'
          },
          // ETAPA 5
          {
            type: 'explanation',
            badge: '5/14 Conceito',
            badgeType: 'type-info',
            title: 'Atualizando Variáveis',
            text: 'O valor de uma variável pode mudar durante a execução do programa quantas vezes você precisar.',
            code: 'int vidas = 3;\nvidas = 2; // Agora vale 2'
          },
          // ETAPA 6
          {
            type: 'output_quiz',
            badge: '6/14 Previsão',
            badgeType: 'type-practice',
            title: 'Qual será o valor final?',
            text: 'Observe a sequência de comandos na memória:',
            code: 'int score = 10;\nscore = 50;',
            options: ['10', '50', '60', 'Erro'],
            correct: 1,
            explanation: 'A reatribuição substitui o valor antigo 10 pelo novo valor 50.'
          },
          // ETAPA 7
          {
            type: 'interactive_slot',
            badge: '7/14 Prática',
            badgeType: 'type-practice',
            title: 'Atribua o valor correto',
            text: 'Preencha a lacuna para guardar o número 255 na variável nivel:',
            codeBefore: 'int nivel = ',
            codeAfter: ';',
            chips: ['255', 'nivel', 'int', 'false'],
            correctAnswer: '255',
            explanation: '255 é o valor numérico atribuído à variável.'
          },
          // ETAPA 8
          {
            type: 'true_false',
            badge: '8/14 Sintaxe',
            badgeType: 'type-practice',
            title: 'Verdadeiro ou Falso',
            text: 'O ponto-e-vírgula (;) no final de int x = 10; é opcional em C++.',
            options: ['Verdadeiro', 'Falso'],
            correct: 1,
            explanation: 'Falso! O ponto-e-vírgula é obrigatório, caso contrário gera erro de compilação.'
          },
          // ETAPA 9
          {
            type: 'interactive_slot',
            badge: '9/14 Prática',
            badgeType: 'type-practice',
            title: 'Escolha o operador',
            text: 'Qual operador usamos para atribuir um valor a uma variável?',
            codeBefore: 'int delayTempo ',
            codeAfter: ' 1000;',
            chips: ['=', '==', '+', ';'],
            correctAnswer: '=',
            explanation: 'O sinal de igualdade (=) realiza a atribuição.'
          },
          // ETAPA 10
          {
            type: 'explanation',
            badge: '10/10 Aprofundamento',
            badgeType: 'type-info',
            title: 'Regras de Nomes',
            text: 'Variáveis não podem começar com números e nem conter espaços. Exemplo correto: int ledVermelho = 12;'
          },
          // ETAPA 11
          {
            type: 'quiz',
            badge: '11/14 Fixação',
            badgeType: 'type-practice',
            title: 'Qual declaração é inválida em C++?',
            options: ['int 2aluno = 5;', 'int aluno2 = 5;', 'int _aluno = 5;', 'int aluno = 5;'],
            correct: 0,
            explanation: 'Variáveis em C++ nunca podem iniciar com um número.'
          },
          // ETAPA 12
          {
            type: 'interactive_slot',
            badge: '12/14 Prática',
            badgeType: 'type-practice',
            title: 'Nomeando com sentido',
            text: 'Complete o tipo para uma variável de contagem:',
            codeBefore: '',
            codeAfter: ' contador = 0;',
            chips: ['int', 'digitalWrite', 'delay', 'setup'],
            correctAnswer: 'int',
            explanation: 'Usamos int para o contador numérico.'
          },
          // ETAPA 13
          {
            type: 'true_false',
            badge: '13/14 Revisão',
            badgeType: 'type-practice',
            title: 'Verdadeiro ou Falso',
            text: 'C++ diferencia letras maiúsculas de minúsculas (Case-Sensitive).',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Verdadeiro! "Variavel" e "variavel" seriam tratadas como coisas diferentes.'
          },
          // ETAPA 14
          {
            type: 'code_challenge',
            badge: '14/14 Desafio Final',
            badgeType: 'type-challenge',
            title: 'Desafio Prático!',
            text: 'Digite do zero a instrução C++ para declarar a variável "temperatura" com o valor 28.',
            correctKeywords: ['int', 'temperatura', '=', '28', ';'],
            explanation: 'Excelente! Você concluiu todas as 14 etapas desta lição com maestria!'
          }
        ]
      },
      {
        id: 'l2',
        title: '02. Tomando Decisões com (if)',
        tag: 'Lógica',
        learnedConcepts: [
          'Estrutura condicional if',
          'Operadores de comparação: ==, >=, <',
          'Blocos de código delimitados por chaves {}'
        ],
        steps: [
          // ETAPA 1
          {
            type: 'explanation',
            badge: '1/14 Conceito',
            badgeType: 'type-info',
            title: 'Tomando Decisões',
            text: 'O comando "if" permite que o programa tome caminhos diferentes dependendo de uma condição.',
            code: 'if (temperatura >= 30) {\n  // Ação quente\n}'
          },
          // ETAPA 2
          {
            type: 'interactive_anatomy',
            badge: '2/14 Anatomia',
            badgeType: 'type-anatomy',
            title: 'Estrutura do if',
            text: 'Explore os componentes do comando condicional:',
            tokens: [
              { label: 'if', expTitle: 'COMANDO', expText: 'Palavra-chave que inicia a condição ("se").' },
              { label: '(', expTitle: 'ABERTURA', expText: 'Guarda a regra a ser testada.' },
              { label: 'temperatura >= 30', expTitle: 'CONDIÇÃO', expText: 'Teste lógico que resulta em verdadeiro ou falso.' },
              { label: ')', expTitle: 'FECHAMENTO', expText: 'Encerra a condição.' },
              { label: '{ }', expTitle: 'BLOCO', expText: 'Código executado se o teste for verdadeiro.' }
            ]
          },
          // ETAPA 3
          {
            type: 'interactive_slot',
            badge: '3/14 Prática',
            badgeType: 'type-practice',
            title: 'Operador Maior ou Igual',
            text: 'Preencha a lacuna para testar se idade é maior ou igual a 18:',
            codeBefore: 'if (idade ',
            codeAfter: ' 18) { }',
            chips: ['>=', '<=', '==', '!='],
            correctAnswer: '>=',
            explanation: '>= significa maior ou igual.'
          },
          // ETAPA 4
          {
            type: 'quiz',
            badge: '4/14 Fixação',
            badgeType: 'type-practice',
            title: 'Qual operador testa igualdade?',
            text: 'Lembre-se da diferença entre atribuir (=) e comparar:',
            options: ['==', '=', '!=', '>'],
            correct: 0,
            explanation: 'Usamos "==" para comparações de igualdade.'
          },
          // ETAPA 5
          {
            type: 'explanation',
            badge: '5/14 Conceito',
            badgeType: 'type-info',
            title: 'O Bloco de Código',
            text: 'Tudo o que estiver dentro das chaves { } só roda se a condição do if for verdadeira.'
          },
          // ETAPA 6
          {
            type: 'true_false',
            badge: '6/14 Sintaxe',
            badgeType: 'type-practice',
            title: 'Verdadeiro ou Falso',
            text: 'A condição dentro do if deve ficar obrigatoriamente entre parênteses ( ).',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Verdadeiro! Os parênteses delimitam o teste lógico.'
          },
          // ETAPA 7
          {
            type: 'interactive_slot',
            badge: '7/14 Prática',
            badgeType: 'type-practice',
            title: 'Testando Menoridade',
            text: 'Complete o operador para verificar se o valor é menor que 10:',
            codeBefore: 'if (valor ',
            codeAfter: ' 10) { }',
            chips: ['<', '>', '==', '>='],
            correctAnswer: '<',
            explanation: '< significa menor que.'
          },
          // ETAPA 8
          {
            type: 'quiz',
            badge: '8/14 Fixação',
            badgeType: 'type-practice',
            title: 'O que acontece se a condição for falsa?',
            text: 'Se o teste do if retornar falso:',
            options: ['O código dentro das chaves é ignorado', 'O Arduino reinicia', 'O programa trava', 'Dá erro de sintaxe'],
            correct: 0,
            explanation: 'O programa simplesmente pula o bloco e continua.'
          },
          // ETAPA 9
          {
            type: 'interactive_slot',
            badge: '9/14 Prática',
            badgeType: 'type-practice',
            title: 'Diferente de',
            text: 'Qual operador representa "diferente de" em C++?',
            codeBefore: 'if (estado ',
            codeAfter: ' 0) { }',
            chips: ['!=', '==', '=', '<>'],
            correctAnswer: '!=',
            explanation: '!= é o operador de diferença.'
          },
          // ETAPA 10
          {
            type: 'explanation',
            badge: '10/14 Aprofundamento',
            badgeType: 'type-info',
            title: 'Controlando Atuadores',
            text: 'No Arduino, usamos o if frequentemente para decidir quando ligar um LED ou motor com base em sensores.',
            code: 'if (luz < 200) {\n  digitalWrite(LED, HIGH);\n}'
          },
          // ETAPA 11
          {
            type: 'true_false',
            badge: '11/14 Revisão',
            badgeType: 'type-practice',
            title: 'Verdadeiro ou Falso',
            text: 'Podemos colocar um if dentro de outro if.',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Verdadeiro! São os chamados ifs aninhados.'
          },
          // ETAPA 12
          {
            type: 'interactive_slot',
            badge: '12/14 Prática',
            badgeType: 'type-practice',
            title: 'Iniciando o bloco',
            text: 'Qual palavra-chave inicia a tomada de decisão?',
            codeBefore: '',
            codeAfter: ' (nivel > 5) { }',
            chips: ['if', 'while', 'int', 'setup'],
            correctAnswer: 'if',
            explanation: '"if" é a palavra reservada para a condição.'
          },
          // ETAPA 13
          {
            type: 'quiz',
            badge: '13/14 Fixação',
            badgeType: 'type-practice',
            title: 'Para que servem as chaves { }?',
            options: ['Delimitar o bloco de código do if', 'Multiplicar números', 'Criar variáveis inteiras', 'Ler portas analógicas'],
            correct: 0,
            explanation: 'As chaves agrupam as instruções que pertencem à condição.'
          },
          // ETAPA 14
          {
            type: 'code_challenge',
            badge: '14/14 Desafio Final',
            badgeType: 'type-challenge',
            title: 'Desafio Prático!',
            text: 'Digite do zero a estrutura de condição para testar se a velocidade é maior que 100:',
            correctKeywords: ['if', 'velocidade', '>', '100'],
            explanation: 'Excelente! Estrutura condicional criada perfeitamente!'
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
        learnedConcepts: [
          'Papel dos pinos digitais',
          'Sintaxe da função pinMode()',
          'Parâmetro OUTPUT',
          'Configuração no void setup()'
        ],
        steps: [
          // ETAPA 1
          {
            type: 'explanation',
            badge: '1/14 Hardware',
            badgeType: 'type-info',
            title: 'Pinos Digitais do Arduino',
            text: 'O Arduino possui pinos que podem funcionar como entradas ou saídas de energia elétrica.',
            code: 'void setup() {\n  pinMode(13, OUTPUT);\n}'
          },
          // ETAPA 2
          {
            type: 'interactive_anatomy',
            badge: '2/14 Anatomia',
            badgeType: 'type-anatomy',
            title: 'Anatomia do pinMode',
            text: 'Toque para entender os argumentos da função:',
            tokens: [
              { label: 'pinMode', expTitle: 'FUNÇÃO', expText: 'Comando para configurar o pino.' },
              { label: '13', expTitle: 'PINO', expText: 'Número físico da porta na placa.' },
              { label: 'OUTPUT', expTitle: 'MODO', expText: 'Define que o pino vai enviar 5V (saída).' }
            ]
          },
          // ETAPA 3
          {
            type: 'interactive_slot',
            badge: '3/14 Prática',
            badgeType: 'type-practice',
            title: 'Modo de Saída',
            text: 'Preencha o parâmetro para configurar o pino 13 como saída:',
            codeBefore: 'pinMode(13, ',
            codeAfter: ');',
            chips: ['OUTPUT', 'INPUT', 'HIGH', 'LOW'],
            correctAnswer: 'OUTPUT',
            explanation: 'OUTPUT configura o pino para enviar energia.'
          },
          // ETAPA 4
          {
            type: 'quiz',
            badge: '4/14 Fixação',
            badgeType: 'type-practice',
            title: 'Onde colocamos o pinMode?',
            options: ['Dentro de void setup()', 'Dentro de void loop()', 'Fora de qualquer função', 'No monitor serial'],
            correct: 0,
            explanation: 'Configuramos no setup() pois só precisamos avisar a placa uma vez.'
          },
          // ETAPA 5
          {
            type: 'explanation',
            badge: '5/14 Conceito',
            badgeType: 'type-info',
            title: 'O que significa OUTPUT?',
            text: 'OUTPUT vem do inglês e significa "Saída". É usado quando ligamos LEDs, motores e buzzers.'
          },
          // ETAPA 6
          {
            type: 'true_false',
            badge: '6/14 Sintaxe',
            badgeType: 'type-practice',
            title: 'Verdadeiro ou Falso',
            text: 'A palavra OUTPUT deve ser escrita em letras maiúsculas.',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Verdadeiro! O Arduino exige maiúsculas para parâmetros de pinos.'
          },
          // ETAPA 7
          {
            type: 'interactive_slot',
            badge: '7/14 Prática',
            badgeType: 'type-practice',
            title: 'Escolha o pino físico',
            text: 'Preencha a lacuna para configurar o pino 8:',
            codeBefore: 'pinMode(',
            codeAfter: ', OUTPUT);',
            chips: ['8', '13', 'OUTPUT', 'setup'],
            correctAnswer: '8',
            explanation: 'O primeiro argumento é o número do pino.'
          },
          // ETAPA 8
          {
            type: 'quiz',
            badge: '8/14 Fixação',
            badgeType: 'type-practice',
            title: 'O que o comando pinMode faz?',
            options: ['Define se o pino é entrada ou saída', 'Liga o LED imediatamente', 'Lê o valor de um sensor', 'Imprime texto no computador'],
            correct: 0,
            explanation: 'Ele prepara o comportamento elétrico do pino.'
          },
          // ETAPA 9
          {
            type: 'interactive_slot',
            badge: '9/14 Prática',
            badgeType: 'type-practice',
            title: 'Comando de Configuração',
            text: 'Qual é o nome da função usada para configurar pinos?',
            codeBefore: '',
            codeAfter: '(7, OUTPUT);',
            chips: ['pinMode', 'digitalWrite', 'delay', 'analogRead'],
            correctAnswer: 'pinMode',
            explanation: 'pinMode é a função correta.'
          },
          // ETAPA 10
          {
            type: 'explanation',
            badge: '10/14 Aprofundamento',
            badgeType: 'type-info',
            title: 'Múltiplos Pinos',
            text: 'Se seu projeto usa 3 LEDs, você precisa chamar pinMode() para cada um deles no setup().'
          },
          // ETAPA 11
          {
            type: 'true_false',
            badge: '11/14 Revisão',
            badgeType: 'type-practice',
            title: 'Verdadeiro ou Falso',
            text: 'Podemos mudar o pinMode de um pino no meio do void loop() repetidamente.',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Verdadeiro, embora não seja comum.'
          },
          // ETAPA 12
          {
            type: 'interactive_slot',
            badge: '12/14 Prática',
            badgeType: 'type-practice',
            title: 'Separador de argumentos',
            text: 'Qual símbolo separa o número do pino do modo OUTPUT?',
            codeBefore: 'pinMode(13',
            codeAfter: ' OUTPUT);',
            chips: [',', ';', '=', '.'],
            correctAnswer: ',',
            explanation: 'A vírgula separa os parâmetros.'
          },
          // ETAPA 13
          {
            type: 'quiz',
            badge: '13/14 Fixação',
            badgeType: 'type-practice',
            title: 'Qual parâmetro indica que o pino vai receber um sinal de botão?',
            options: ['INPUT', 'OUTPUT', 'HIGH', 'LOW'],
            correct: 0,
            explanation: 'INPUT significa entrada.'
          },
          // ETAPA 14
          {
            type: 'code_challenge',
            badge: '14/14 Desafio Final',
            badgeType: 'type-challenge',
            title: 'Desafio Prático!',
            text: 'Digite do zero o comando completo em C++ para configurar o pino 9 como OUTPUT:',
            correctKeywords: ['pinMode', '9', 'OUTPUT', ';'],
            explanation: 'Incrível! Lição de hardware concluída com sucesso!'
          }
        ]
      }
    ]
  }
];

