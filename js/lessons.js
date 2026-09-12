const LessonsData = [
  {
    id: 'mod1',
    title: 'Módulo 1: Conhecendo o C++',
    desc: 'Aprenda os conceitos básicos da linguagem que o Arduino entende.',
    lessons: [
      {
        id: 'l1',
        title: '01. Variáveis e Números em C++',
        tag: 'C++ Básico',
        learnedConcepts: [
          'Conceito de variável na memória',
          'Uso da palavra-chave int para números',
          'Sintaxe com operador = e ;',
          'Como atualizar valores de variáveis'
        ],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'O que é uma Variável?',
            text: 'Uma variável é como uma caixa com um nome na memória do computador. Ela serve para guardar um valor que o seu programa precisa utilizar.',
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
              { label: ';', expTitle: 'FIM DE INSTRUÇÃO', expText: 'Obrigatório em C++. Avisa que a linha de comando terminou.' }
            ]
          },
          {
            type: 'interactive_slot',
            badge: 'Prática no Código',
            badgeType: 'type-practice',
            title: 'Crie uma variável inteira',
            text: 'Preencha a lacuna abaixo tocando na palavra correta para criar uma variável de número inteiro.',
            codeBefore: '',
            codeAfter: ' pino = 13;',
            chips: ['int', 'float', 'void', 'char'],
            correctAnswer: 'int',
            explanation: 'Excelente! "int" é o tipo reservado para números inteiros.'
          },
          {
            type: 'quiz',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'O que o símbolo = faz?',
            text: 'Baseado no que você explorou antes:',
            options: ['Compara se dois números são iguais', 'Guarda o valor da direita na variável da esquerda', 'Soma dois números'],
            correct: 1,
            explanation: 'Em programação, = significa atribuição (guardar um valor).'
          },
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'O valor pode mudar',
            text: 'Como o nome diz, uma "variável" pode ter seu valor alterado a qualquer momento durante a execução do programa!',
            code: 'int nivel = 1;\nnivel = 2; // Agora o nível vale 2'
          },
          {
            type: 'output_quiz',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Qual será o valor final?',
            text: 'Analise a substituição na memória:',
            code: 'int vidas = 3;\nvidas = 5;',
            options: ['3', '5', '8', 'Erro'],
            correct: 1,
            explanation: 'A linha "vidas = 5;" substitui o valor antigo 3 pelo novo valor 5.'
          },
          {
            type: 'interactive_slot',
            badge: 'Prática no Código',
            badgeType: 'type-practice',
            title: 'Defina o valor da variável',
            text: 'Preencha a lacuna para guardar o valor 100 na variável energia:',
            codeBefore: 'int energia = ',
            codeAfter: ';',
            chips: ['100', 'energia', 'int', 'true'],
            correctAnswer: '100',
            explanation: 'Correto! 100 é um valor numérico inteiro válido.'
          },
          {
            type: 'true_false',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Verdadeiro ou Falso',
            text: 'Toda instrução em C++ precisa obrigatoriamente terminar com ponto-e-vírgula (;).',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Exato! O ponto-e-vírgula sinaliza o fim da instrução ao compilador.'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio Prático',
            badgeType: 'type-challenge',
            title: 'Sua vez de digitar!',
            text: 'Escreva a linha completa em C++ para declarar a variável "score" com o valor 100.',
            referenceCode: 'int score = 100;',
            placeholder: '',
            correctKeywords: ['int', 'score', '=', '100', ';'],
            explanation: 'Perfeito! Você digitou a declaração C++ completa e corretamente.'
          }
        ]
      },
      {
        id: 'l2',
        title: '02. Tomando Decisões com (if)',
        tag: 'Lógica',
        learnedConcepts: [
          'Estrutura condicional if (condicao)',
          'Operadores de comparação: ==, !=, <, <=, >, >=',
          'O que são blocos de código {}'
        ],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Tomando Decisões',
            text: 'O bloco "if" (se) permite que seu código execute uma instrução APENAS se uma condição for verdadeira.',
            code: 'if (idade >= 18) {\n  // Acesso liberado\n}'
          },
          {
            type: 'interactive_slot',
            badge: 'Prática de Lógica',
            badgeType: 'type-practice',
            title: 'Complete a condição',
            text: 'Preencha a lacuna para verificar se a temperatura é maior ou igual a 30:',
            codeBefore: 'if (temperatura ',
            codeAfter: ' 30) {\n  Serial.println("Quente!");\n}',
            chips: ['>=', '<=', '==', '!='],
            correctAnswer: '>=',
            explanation: 'Perfeito! >= é o operador lógico "maior ou igual a".'
          },
          {
            type: 'quiz',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Qual operador compara se dois valores são IGUAIS?',
            options: ['==', '=', '!=', '>='],
            correct: 0,
            explanation: 'Em C++, usamos "==" para comparar e "=" para atribuir valor.'
          },
          {
            type: 'interactive_slot',
            badge: 'Prática de Código',
            badgeType: 'type-practice',
            title: 'Verifique o Botão',
            text: 'Preencha a lacuna para comparar se o botão é igual a 1 (pressionado):',
            codeBefore: 'if (botao ',
            codeAfter: ' 1) {\n  digitalWrite(13, HIGH);\n}',
            chips: ['==', '=', '<', '&&'],
            correctAnswer: '==',
            explanation: 'Excelente! Usamos "==" dentro dos parênteses do if para comparar.'
          },
          {
            type: 'true_false',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Blocos de Código',
            text: 'O código dentro das chaves { } só roda se a condição do "if" for verdadeira.',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Exato! Se a condição for falsa, o programa ignora tudo dentro das chaves.'
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
          'O papel dos pinos digitais',
          'Sintaxe e uso da função pinMode()',
          'A diferença prática do parâmetro OUTPUT',
          'void setup() como configurador inicial'
        ],
        steps: [
          {
            type: 'explanation',
            badge: 'Aprender',
            badgeType: 'type-info',
            title: 'Pinos do Arduino',
            text: 'O microcontrolador possui "Pinos Digitais". Eles servem para enviar eletricidade (como ligar um motor) ou receber dados (como ler um botão).',
            code: 'pinMode(13, OUTPUT);'
          },
          {
            type: 'interactive_anatomy',
            badge: 'Exploração',
            badgeType: 'type-anatomy',
            title: 'A Função pinMode()',
            text: 'Toque para entender como preparamos a placa para usar o componente.',
            tokens: [
              { label: 'pinMode', expTitle: 'FUNÇÃO', expText: 'O comando nativo do Arduino para configurar o modo de trabalho de um pino.' },
              { label: '(', expTitle: 'ABERTURA', expText: 'Inicia a passagem dos parâmetros (os dados que a função precisa).' },
              { label: '13', expTitle: 'NÚMERO DO PINO', expText: 'Indica fisicamente em qual buraquinho da placa o fio está conectado.' },
              { label: ',', expTitle: 'SEPARADOR', expText: 'A vírgula separa os parâmetros dentro da função.' },
              { label: 'OUTPUT', expTitle: 'MODO (SAÍDA)', expText: 'Avisa que este pino vai ENVIAR energia (5V) em vez de receber.' },
              { label: ');', expTitle: 'FECHAMENTO E FIM', expText: 'Finaliza o comando.' }
            ]
          },
          {
            type: 'interactive_slot',
            badge: 'Prática de Hardware',
            badgeType: 'type-practice',
            title: 'Configure o modo do pino',
            text: 'Toque na opção para definir que o pino 13 deve enviar energia:',
            codeBefore: 'pinMode(13, ',
            codeAfter: ');',
            chips: ['OUTPUT', 'INPUT', 'HIGH', 'LOW'],
            correctAnswer: 'OUTPUT',
            explanation: 'Isso! OUTPUT (Saída) indica que o pino enviará 5 Volts de eletricidade.'
          },
          {
            type: 'quiz',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Em qual bloco do código configuramos os pinos normalmente?',
            options: ['void setup()', 'void loop()', 'Fora do código'],
            correct: 0,
            explanation: 'A configuração é feita no setup() porque só precisa rodar uma única vez ao ligar a placa.'
          },
          {
            type: 'true_false',
            badge: 'Prática',
            badgeType: 'type-practice',
            title: 'Maiúsculas importam?',
            text: 'A palavra OUTPUT precisa obrigatoriamente ser escrita com todas as letras MAIÚSCULAS.',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Verdadeiro! O compilador do Arduino C++ difere maiúsculas de minúsculas (é case-sensitive).'
          },
          {
            type: 'interactive_slot',
            badge: 'Prática no Código',
            badgeType: 'type-practice',
            title: 'Selecione o pino',
            text: 'Preencha a lacuna para configurar fisicamente o pino 9 do Arduino:',
            codeBefore: 'pinMode(',
            codeAfter: ', OUTPUT);',
            chips: ['9', 'pinMode', 'setup', 'OUTPUT'],
            correctAnswer: '9',
            explanation: 'O primeiro argumento de pinMode() é sempre o número do pino físico.'
          },
          {
            type: 'code_challenge',
            badge: 'Desafio Prático',
            badgeType: 'type-challenge',
            title: 'Escreva a instrução completa!',
            text: 'Agora que você entende o conceito, escreva o código para configurar o pino 13 como OUTPUT.',
            referenceCode: 'pinMode(13, OUTPUT);',
            placeholder: '',
            correctKeywords: ['pinMode', '13', 'OUTPUT'],
            explanation: 'Perfeito! Você dominou a configuração de saídas de hardware!'
          }
        ]
      }
    ]
  }
];
