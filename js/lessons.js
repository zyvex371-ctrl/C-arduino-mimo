const LessonsData = [
  {
    id: 'mod1',
    title: 'Módulo 1: Conhecendo o C++',
    desc: 'Aprenda como o computador armazena dados na memória.',
    lessons: [
      {
        id: 'l1',
        title: '01. Variáveis e Números em C++',
        tag: 'C++ Básico',
        learnedConcepts: [
          'Conceito de variável como espaço na memória',
          'Uso da palavra-chave int para números inteiros',
          'Sintaxe com operador = e ponto-e-vírgula ;',
          'Como reatribuir e atualizar valores de variáveis'
        ],
        steps: [
          {
            type: 'intro',
            badge: '1/10 Introdução',
            title: 'O que é uma Variável?',
            text: 'Uma variável é um espaço com nome na memória do computador. Ela serve para guardar um valor que o seu programa precisa utilizar.',
            code: 'int idade = 11;'
          },
          {
            type: 'explanation',
            badge: '2/10 Explicação',
            title: 'Tipos de Dados em C++',
            text: 'Para guardar números inteiros em C++, usamos a palavra "int".\nVeja a estrutura abaixo:',
            code: 'int idade = 11;'
          },
          {
            type: 'code_breakdown',
            badge: '3/10 Anatomia do Código',
            title: 'Decomposição do Código',
            text: 'Observe cada trecho da instrução C++:',
            breakdown: [
              { token: 'int', label: 'Tipo (Inteiro)' },
              { token: 'idade', label: 'Nome' },
              { token: '=', label: 'Operador' },
              { token: '11', label: 'Valor' },
              { token: ';', label: 'Fim de Linha' }
            ]
          },
          // NOVO FORMATO DE EXERCÍCIO COM LACUNA ATIVA (INSPIRADO NA REFERÊNCIA)
          {
            type: 'interactive_slot',
            badge: '4/10 Prática no Código',
            title: 'Preencha a lacuna para criar uma variável inteira',
            text: 'Toque no trecho abaixo para completar a declaração da variável pino:',
            codeBefore: '',
            codeAfter: ' pino = 13;',
            chips: ['int', 'float', 'void', 'char'],
            correctAnswer: 'int',
            explanation: 'Excelente! "int" é o tipo reservado para números inteiros.'
          },
          {
            type: 'quiz',
            badge: '5/10 Fixação',
            title: 'Qual parte indica o nome da variável?',
            text: 'Examine a instrução:',
            code: 'int velocidade = 80;',
            options: ['int', 'velocidade', '80', '='],
            correct: 1,
            explanation: '"velocidade" é o nome dado à posição de memória.'
          },
          {
            type: 'true_false',
            badge: '6/10 Sintaxe',
            title: 'Verdadeiro ou Falso',
            text: 'Toda instrução em C++ precisa obrigatoriamente terminar com ponto-e-vírgula (;).',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Exato! O ponto-e-vírgula sinaliza o fim da instrução ao compilador.'
          },
          {
            type: 'interactive_slot',
            badge: '7/10 Atribuição de Valor',
            title: 'Defina o valor da variável',
            text: 'Preencha a lacuna para guardar o valor 100 na variável energia:',
            codeBefore: 'int energia = ',
            codeAfter: ';',
            chips: ['100', 'energia', 'int', 'true'],
            correctAnswer: '100',
            explanation: 'Correto! 100 é um valor inteiro válido.'
          },
          {
            type: 'output_quiz',
            badge: '8/10 Previsão de Saída',
            title: 'Qual será o valor final?',
            text: 'Analise a substituição na memória:',
            code: 'int vidas = 3;\nvidas = 5;',
            options: ['3', '5', '8', 'Erro'],
            correct: 1,
            explanation: 'A linha "vidas = 5;" substitui o valor antigo 3 pelo novo valor 5.'
          },
          {
            type: 'interactive_slot',
            badge: '9/10 Operadores',
            title: 'Escolha o operador correto',
            text: 'Toque no operador para atribuir o valor à variável:',
            codeBefore: 'int pontos ',
            codeAfter: ' 500;',
            chips: ['=', '==', '+', ';'],
            correctAnswer: '=',
            explanation: 'O sinal de igual = é o operador de atribuição de valor.'
          },
          {
            type: 'code_challenge',
            badge: '10/10 Desafio Final',
            title: 'Desafio Prático!',
            text: 'Digite a linha completa em C++ para declarar a variável "score" com o valor 100:',
            placeholder: 'int score = 100;',
            correctKeywords: ['int', 'score', '=', '100;'],
            explanation: 'Incrível! Você dominou o conceito de variáveis em C++!'
          }
        ]
      }
    ]
  },
  {
    id: 'mod2',
    title: 'Módulo 2: Pinos Digitais & Robótica',
    desc: 'Controle o envio de energia no Arduino.',
    lessons: [
      {
        id: 'l2',
        title: '02. Configurando Saídas com pinMode()',
        tag: 'Arduino',
        learnedConcepts: [
          'Papel dos pinos digitais do Arduino',
          'Sintaxe da função pinMode()',
          'Parâmetro OUTPUT para envio de energia',
          'Configuração inicial dentro de void setup()'
        ],
        steps: [
          {
            type: 'intro',
            badge: '1/8 Introdução',
            title: 'Pinos do Arduino',
            text: 'O microcontrolador possui pinos digitais numerados para acionar componentes.',
            code: 'pinMode(13, OUTPUT);'
          },
          {
            type: 'explanation',
            badge: '2/8 Explicação',
            title: 'A Função pinMode()',
            text: 'Usamos pinMode() dentro do setup() para avisar ao Arduino como o pino será usado.',
            code: 'void setup() {\n  pinMode(13, OUTPUT);\n}'
          },
          {
            type: 'code_breakdown',
            badge: '3/8 Anatomia',
            title: 'Decomposição do Comando',
            text: 'Examine os parâmetros:',
            breakdown: [
              { token: 'pinMode', label: 'Função' },
              { token: '(', label: 'Abre' },
              { token: '13', label: 'Pino' },
              { token: ',', label: 'Vírgula' },
              { token: 'OUTPUT', label: 'Modo' },
              { token: ');', label: 'Fecha' }
            ]
          },
          {
            type: 'interactive_slot',
            badge: '4/8 Prática com Pinos',
            title: 'Configure o modo do pino',
            text: 'Toque na opção para definir o pino 13 como saída:',
            codeBefore: 'pinMode(13, ',
            codeAfter: ');',
            chips: ['OUTPUT', 'INPUT', 'HIGH', 'LOW'],
            correctAnswer: 'OUTPUT',
            explanation: 'OUTPUT indica que o pino enviará 5 Volts de eletricidade.'
          },
          {
            type: 'quiz',
            badge: '5/8 Fixação',
            title: 'Em qual bloco do código configuramos os pinos?',
            options: ['void setup()', 'void loop()', 'Fora do código', 'No terminal'],
            correct: 0,
            explanation: 'setup() roda uma única vez ao ligar a placa.'
          },
          {
            type: 'true_false',
            badge: '6/8 Sintaxe',
            title: 'Verdadeiro ou Falso',
            text: 'A palavra OUTPUT no Arduino deve ser escrita inteiramente em maiúsculas.',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Verdadeiro! C++ diferencia maiúsculas de minúsculas.'
          },
          {
            type: 'interactive_slot',
            badge: '7/8 Escolha do Pino',
            title: 'Selecione o pino correto',
            text: 'Preencha a lacuna para configurar o pino 12:',
            codeBefore: 'pinMode(',
            codeAfter: ', OUTPUT);',
            chips: ['12', 'pinMode', 'setup', 'OUTPUT'],
            correctAnswer: '12',
            explanation: 'O primeiro argumento de pinMode() é o número do pino físico.'
          },
          {
            type: 'code_challenge',
            badge: '8/8 Desafio Final',
            title: 'Escreva a instrução!',
            text: 'Digite o comando completo para configurar o pino 13 como OUTPUT:',
            placeholder: 'pinMode(13, OUTPUT);',
            correctKeywords: ['pinMode', '13', 'OUTPUT'],
            explanation: 'Perfeito! Você dominou a configuração de pinos no Arduino!'
          }
        ]
      }
    ]
  }
];
