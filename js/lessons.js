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
        steps: [
          {
            type: 'intro',
            badge: '1/15 Introdução',
            title: 'O que é uma Variável?',
            text: 'Uma variável é um espaço com nome na memória do computador. Ela serve para guardar um valor que o seu programa precisa utilizar.',
            code: 'int idade = 11;'
          },
          {
            type: 'explanation',
            badge: '2/15 Explicação',
            title: 'Tipos de Dados em C++',
            text: 'Para guardar números inteiros em C++, usamos a palavra "int".\nVeja abaixo como uma variável é construída:',
            code: 'int idade = 11;'
          },
          {
            type: 'code_breakdown',
            badge: '3/15 Anatomia do Código',
            title: 'Decomposição do Código',
            text: 'Observe cada bloco da instrução C++:',
            breakdown: [
              { token: 'int', label: 'Tipo (Inteiro)' },
              { token: 'idade', label: 'Nome' },
              { token: '=', label: 'Operador' },
              { token: '11', label: 'Valor' },
              { token: ';', label: 'Fim de Linha' }
            ]
          },
          {
            type: 'explanation',
            badge: '4/15 Alterando Valores',
            title: 'Como o valor pode mudar',
            text: 'O valor armazenado dentro de uma variável pode ser substituído a qualquer momento durante a execução do programa!',
            code: 'int nivel = 1;\nnivel = 2; // Agora o nível vale 2'
          },
          {
            type: 'quiz',
            badge: '5/15 Pergunta de Fixação',
            title: 'Qual parte indica que a variável guarda um número inteiro?',
            text: 'Examine o código abaixo:',
            code: 'int velocidade = 80;',
            options: ['int', 'velocidade', '80', '='],
            correct: 0,
            explanation: 'Correto! "int" é a palavra-chave reservada em C++ para o tipo inteiro (integer).'
          },
          {
            type: 'fill_blank',
            badge: '6/15 Prática',
            title: 'Complete o código',
            text: 'Crie uma variável chamada "pino" que guarde o valor 13:',
            codeTemplate: '___ pino = 13;',
            correctAnswer: 'int',
            explanation: 'Perfeito! "int" deve anteceder o nome da variável.'
          },
          {
            type: 'true_false',
            badge: '7/15 Regra de Sintaxe',
            title: 'Verdadeiro ou Falso',
            text: 'Toda instrução em C++ precisa obrigatoriamente terminar com ponto-e-vírgula (;).',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Correto! O ponto-e-vírgula avisa ao compilador que a instrução terminou.'
          },
          {
            type: 'blocks',
            badge: '8/15 Organização',
            title: 'Monte o código na ordem correta',
            text: 'Organize os blocos para declarar a variável "brilho" com valor 255:',
            available: ['255;', '=', 'brilho', 'int'],
            correctOrder: ['int', 'brilho', '=', '255;'],
            explanation: 'Excelente! A ordem correta é Tipo + Nome + Igual + Valor + Ponto-e-vírgula.'
          },
          {
            type: 'output_quiz',
            badge: '9/15 Previsão de Saída',
            title: 'Qual será o valor final?',
            text: 'Analise o comportamento do código:',
            code: 'int vidas = 3;\nvidas = 5;',
            options: ['3', '5', '8', 'Erro'],
            correct: 1,
            explanation: 'A linha "vidas = 5;" substitui o valor 3 antigo pelo novo valor 5.'
          },
          {
            type: 'quiz',
            badge: '10/15 Operadores',
            title: 'O que o símbolo = faz em C++?',
            options: ['Guarda um valor dentro da variável', 'Compara se dois números são iguais', 'Apaga os dados da memória', 'Cria uma nova função'],
            correct: 0,
            explanation: 'O sinal de igual (=) é o operador de atribuição de valor.'
          },
          {
            type: 'fill_blank',
            badge: '11/15 Atribuição',
            title: 'Atribuindo o valor',
            text: 'Complete o código para atribuir 100 à variável energia:',
            codeTemplate: 'int energia ___ 100;',
            correctAnswer: '=',
            explanation: 'Usamos o operador = para atribuir o valor à variável.'
          },
          {
            type: 'explanation',
            badge: '12/15 Aplicação Prática',
            title: 'Robôs e Variáveis',
            text: 'Na robótica, usamos variáveis para guardar dados de sensores, velocidade dos motores e estado dos componentes.',
            code: 'int velocidadeMotor = 255;'
          },
          {
            type: 'code_challenge',
            badge: '13/15 Desafio Final',
            title: 'Desafio Prático!',
            text: 'Escreva a linha completa em C++ para declarar a variável "score" com o valor 100:',
            placeholder: 'int score = 100;',
            correctKeywords: ['int', 'score', '=', '100;'],
            explanation: 'Excelente! Você completou a declaração de código C++ com sucesso!'
          },
          {
            type: 'summary',
            badge: '14/15 Resumo da Lição',
            title: 'O que você aprendeu nesta aula:',
            summaryItems: [
              '✓ O conceito de variáveis como caixas de memória',
              '✓ O tipo int para representar números inteiros',
              '✓ A sintaxe com o operador = e o ponto-e-vírgula ;',
              '✓ Como atualizar o valor armazenado em uma variável'
            ]
          },
          {
            type: 'completion',
            badge: '15/15 Conclusão',
            title: 'LIÇÃO CONCLUÍDA',
            subtitle: 'Variáveis e Números em C++',
            summaryItems: [
              '✓ Aprendeu o que é uma variável',
              '✓ Dominou a declaração do tipo "int"',
              '✓ Praticou a atribuição e alteração de valores',
              '✓ Concluiu o desafio de código C++'
            ]
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
        steps: [
          {
            type: 'intro',
            badge: '1/15 Introdução',
            title: 'Pinos do Arduino',
            text: 'O microcontrolador possui pinos digitais numerados. Eles servem para enviar eletricidade ou receber dados.',
            code: 'pinMode(13, OUTPUT);'
          },
          {
            type: 'explanation',
            badge: '2/15 Explicação',
            title: 'A Função pinMode()',
            text: 'Usamos a função pinMode() dentro do setup() para avisar ao Arduino como o pino será usado.',
            code: 'void setup() {\n  pinMode(13, OUTPUT);\n}'
          },
          {
            type: 'code_breakdown',
            badge: '3/15 Anatomia do Código',
            title: 'Decomposição do Comando',
            text: 'Examine os parâmetros da função:',
            breakdown: [
              { token: 'pinMode', label: 'Função' },
              { token: '(', label: 'Abre' },
              { token: '13', label: 'Número do Pino' },
              { token: ',', label: 'Vírgula' },
              { token: 'OUTPUT', label: 'Modo (Saída)' },
              { token: ');', label: 'Fecha & Fim' }
            ]
          },
          {
            type: 'explanation',
            badge: '4/15 O que é OUTPUT?',
            title: 'Saída de Energia',
            text: 'OUTPUT indica que o pino vai enviar 5 Volts para acionar um componente (como um LED ou Buzzer).',
            code: 'pinMode(13, OUTPUT);'
          },
          {
            type: 'quiz',
            badge: '5/15 Fixação',
            title: 'Qual função configura o modo do pino?',
            options: ['pinMode()', 'digitalWrite()', 'setup()', 'start()'],
            correct: 0,
            explanation: 'pinMode() é a função oficial para configurar pinos no Arduino.'
          },
          {
            type: 'fill_blank',
            badge: '6/15 Completar',
            title: 'Defina a Saída',
            text: 'Complete o comando para definir o pino 13 como saída:',
            codeTemplate: 'pinMode(13, ___);',
            correctAnswer: 'OUTPUT',
            explanation: 'OUTPUT em maiúsculas indica saída de corrente elétrica.'
          },
          {
            type: 'true_false',
            badge: '7/15 Sintaxe',
            title: 'Verdadeiro ou Falso',
            text: 'A palavra OUTPUT no Arduino precisa ser escrita com todas as letras MAIÚSCULAS.',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Verdadeiro! C++ diferencia maiúsculas de minúsculas.'
          },
          {
            type: 'blocks',
            badge: '8/15 Organização',
            title: 'Monte o comando na ordem',
            text: 'Organize os blocos da instrução:',
            available: ['OUTPUT);', '13,', 'pinMode('],
            correctOrder: ['pinMode(', '13,', 'OUTPUT);'],
            explanation: 'pinMode( pino , modo );'
          },
          {
            type: 'quiz',
            badge: '9/15 Estrutura',
            title: 'Em qual bloco do código a configuração é feita?',
            options: ['void setup()', 'void loop()', 'Fora do código', 'No terminal'],
            correct: 0,
            explanation: 'setup() roda uma única vez quando o Arduino é ligado.'
          },
          {
            type: 'fill_blank',
            badge: '10/15 Número do Pino',
            title: 'Escolha do Pino',
            text: 'Configure o pino 12 como saída:',
            codeTemplate: 'pinMode(___, OUTPUT);',
            correctAnswer: '12',
            explanation: 'O primeiro argumento é o número do pino físico.'
          },
          {
            type: 'true_false',
            badge: '11/15 Aplicação',
            title: 'Verdadeiro ou Falso',
            text: 'Um pino em modo OUTPUT pode acender um LED conectado a ele.',
            options: ['Verdadeiro', 'Falso'],
            correct: 0,
            explanation: 'Exato! OUTPUT envia 5 Volts de energia elétrica.'
          },
          {
            type: 'explanation',
            badge: '12/15 Robótica Prática',
            title: 'Motores e LEDs',
            text: 'Tudo o que consome energia (motores, LEDs, luzes) precisa ter seu pino configurado como OUTPUT.',
            code: 'pinMode(9, OUTPUT); // Pino do motor'
          },
          {
            type: 'code_challenge',
            badge: '13/15 Desafio Final',
            title: 'Escreva o comando!',
            text: 'Digite o comando completo para configurar o pino 13 como OUTPUT:',
            placeholder: 'pinMode(13, OUTPUT);',
            correctKeywords: ['pinMode', '13', 'OUTPUT'],
            explanation: 'Perfeito! Você aprendeu a configurar saídas de hardware!'
          },
          {
            type: 'summary',
            badge: '14/15 Resumo da Lição',
            title: 'O que você aprendeu:',
            summaryItems: [
              '✓ O papel dos pinos digitais do Arduino',
              '✓ O uso da função pinMode()',
              '✓ O parâmetro OUTPUT em maiúsculas',
              '✓ A configuração inicial dentro de void setup()'
            ]
          },
          {
            type: 'completion',
            badge: '15/15 Conclusão',
            title: 'LIÇÃO CONCLUÍDA',
            subtitle: 'Configurando Saídas com pinMode()',
            summaryItems: [
              '✓ Aprendeu os pinos digitais',
              '✓ Dominou a função pinMode()',
              '✓ Configurou saídas OUTPUT',
              '✓ Concluiu o desafio de hardware'
            ]
          }
        ]
      }
    ]
  }
];
