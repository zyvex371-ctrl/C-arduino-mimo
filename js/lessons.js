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
          'Conceito de variável na memória',
          'Uso da palavra-chave int',
          'Sintaxe com operador = e ;'
        ],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'O que é uma Variável?',
            text: 'Uma variável é um espaço com nome na memória do computador. Ela serve para guardar um valor que o seu programa precisa utilizar.',
            code: 'int idade = 11;'
          },
          {
            type: 'interactive_anatomy',
            badge: 'Exploração',
            badgeType: 'type-anatomy',
            title: 'Toque para entender o código',
            text: 'Descubra a função de cada palavra na declaração de uma variável C++.',
            tokens: [
              { label: 'int', expTitle: 'TIPO DE DADO', expText: 'Informa ao computador que esta variável guardará apenas números Inteiros.' },
              { label: 'idade', expTitle: 'NOME DA VARIÁVEL', expText: 'É o rótulo que você dá para poder encontrar esse dado na memória depois.' },
              { label: '=', expTitle: 'OPERADOR DE ATRIBUIÇÃO', expText: 'Pega o valor da direita e guarda dentro da variável da esquerda.' },
              { label: '11', expTitle: 'VALOR', expText: 'O dado real que será salvo na memória.' },
              { label: ';', expTitle: 'FIM DE INSTRUÇÃO', expText: 'Obrigatório em C++. Avisa que o comando terminou.' }
            ]
          },
          {
            type: 'interactive_slot',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Crie uma variável inteira',
            text: 'Preencha a lacuna com a palavra correta para criar uma variável de número inteiro.',
            codeBefore: '',
            codeAfter: ' pino = 13;',
            chips: ['int', 'float', 'void', 'char'],
            correctAnswer: 'int',
            explanation: 'Excelente! "int" é a palavra-chave reservada.'
          },
          {
            type: 'quiz',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'O que o símbolo = faz?',
            text: 'Baseado no que exploramos na anatomia:',
            options: ['Compara se dois números são iguais', 'Guarda o valor da direita na variável da esquerda', 'Soma dois números'],
            correct: 1,
            explanation: 'Em programação, = significa atribuição (guardar um valor).'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio Prático',
            badgeType: 'type-challenge',
            title: 'Sua vez de digitar!',
            text: 'Escreva o código C++ para declarar a variável.',
            referenceCode: 'int score = 100;',
            placeholder: '',
            correctKeywords: ['int', 'score', '=', '100', ';'],
            explanation: 'Perfeito! Você digitou a declaração completa corretamente.'
          }
        ]
      }
    ]
  }
];
