import type { Module } from '../types'

// ─── DIA 1 ───────────────────────────────────────────────────────────────────

const htmlModule: Module = {
  id: 'dia-1/html',
  day: 1,
  title: 'HTML — Fundamentos',
  summary: 'Aprenda a estrutura básica de qualquer página web com HTML5.',
  tags: ['HTML', 'Web', 'Fundamentos'],
  icon: 'FaHtml5',
  topics: [
    'O que é HTML e para que serve',
    'Estrutura: <!DOCTYPE html>, <html>, <head>, <body>',
    'Tags essenciais: títulos, parágrafos, links e imagens',
    'Listas ordenadas e não-ordenadas',
    'Elementos de bloco vs. inline: <div> e <span>',
    'Hello World: criar o primeiro index.html',
  ],
  exercises: [
    {
      label: 'Criar seu primeiro index.html',
      steps: [
        'Crie uma pasta chamada <code>meu-site</code> no seu computador',
        'Dentro dela, crie um arquivo chamado <code>index.html</code>',
        'Abra o arquivo em um editor de texto (VS Code, Notepad++)',
        'Cole a estrutura básica: <code>&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;&lt;/body&gt;&lt;/html&gt;</code>',
        'Adicione um <code>&lt;h1&gt;</code> com seu nome e um <code>&lt;p&gt;</code> com uma apresentação',
        'Abra o arquivo no browser (duplo clique no arquivo)',
        'Experimente adicionar: foto com <code>&lt;img&gt;</code>, links com <code>&lt;a href&gt;</code> e uma lista com <code>&lt;ul&gt;</code>',
      ],
    },
  ],
  slides: [
    {
      id: 1,
      layout: 'cover',
      title: 'HTML — Fundamentos',
      content: {
        badge: 'DIA 1',
        subtitle: 'A linguagem que estrutura a web — tudo começa aqui.',
      },
    },
    {
      id: 2,
      layout: 'two-column',
      title: 'Estrutura de um Documento HTML',
      content: {
        heading: 'Todo site começa com essa estrutura',
        text: [
          '<!DOCTYPE html> informa ao browser a versão do HTML',
          '<html> é o elemento raiz que envolve tudo',
          '<head> contém metadados: título, fontes, SEO',
          '<body> contém tudo que o usuário VÊ na tela',
        ],
        code: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Site</title>
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
    <p>Minha primeira página web.</p>
  </body>
</html>`,
        codeLanguage: 'html',
      },
    },
    {
      id: 3,
      layout: 'cards',
      title: 'Tags Essenciais',
      content: {
        heading: 'As tags que você vai usar todo dia',
        items: [
          {
            icon: 'FaHeading',
            title: 'Títulos: h1 – h6',
            description: '<h1> é o mais importante, <h6> o menor. Use hierarquia.',
          },
          {
            icon: 'FaAlignLeft',
            title: 'Parágrafo: <p>',
            description: 'Bloco de texto. Sempre envolva textos em <p>.',
          },
          {
            icon: 'FaLink',
            title: 'Link: <a href="">',
            description: 'href define o destino. Use target="_blank" para abrir em nova aba.',
          },
          {
            icon: 'FaImage',
            title: 'Imagem: <img src="">',
            description: 'src é o caminho, alt é a descrição para acessibilidade.',
          },
        ],
      },
    },
    {
      id: 4,
      layout: 'table',
      title: 'Elementos de Bloco vs. Inline',
      content: {
        heading: 'Dois comportamentos fundamentais',
        headers: ['Tipo', 'Tags Comuns', 'Comportamento'],
        rows: [
          ['Bloco', '<div>, <p>, <h1>, <ul>, <section>', 'Ocupa toda a largura disponível. Começa em nova linha.'],
          ['Inline', '<span>, <a>, <img>, <strong>, <em>', 'Ocupa só o espaço do conteúdo. Fica na mesma linha.'],
          ['Semânticos', '<header>, <main>, <footer>, <nav>', 'São blocos com significado para SEO e acessibilidade.'],
          ['Formulários', '<input>, <button>, <form>, <label>', 'Capturam interação do usuário.'],
        ],
      },
    },
    {
      id: 5,
      layout: 'checklist',
      title: 'Missão HTML — O que fazer agora',
      content: {
        heading: 'Exercício prático: seu primeiro site',
        items: [
          'Criar pasta meu-site e o arquivo index.html',
          'Adicionar a estrutura base: DOCTYPE, html, head, body',
          'Inserir um <h1> com seu nome completo',
          'Adicionar um <p> com uma breve apresentação',
          'Incluir uma imagem com <img src="" alt="">',
          'Criar uma lista <ul> com 3 hobbies ou interesses',
          'Adicionar um link <a href=""> para um site favorito',
          'Abrir o arquivo no browser e ver o resultado',
        ],
      },
    },
  ],
}

const cssModule: Module = {
  id: 'dia-1/css',
  day: 1,
  title: 'CSS — Estilo & Layout',
  summary: 'Dê vida visual às suas páginas com cores, fontes, Flexbox e Grid.',
  tags: ['CSS', 'Layout', 'Flexbox', 'Grid'],
  icon: 'FaCss3Alt',
  topics: [
    'Seletores: tag, .classe, #id e pseudo-classes',
    'Box Model: margin, padding, border, width e height',
    'Flexbox: display flex, justify-content, align-items',
    'CSS Grid: display grid, grid-template-columns, gap',
    'Cores, fontes e unidades (px, %, rem, vh)',
    'Estados: :hover, :focus, :active',
  ],
  exercises: [
    {
      label: 'Exercício Embutido: Criar uma TODO List',
      steps: [
        'Crie um arquivo <code>todo.html</code> com uma <code>&lt;ul&gt;</code> contendo 4 tarefas (<code>&lt;li&gt;</code>)',
        'Crie <code>todo.css</code> e vincule ao HTML com <code>&lt;link rel="stylesheet"&gt;</code>',
        'Estilize a lista: fundo escuro (<code>#1e293b</code>), padding 20px, borda arredondada (<code>border-radius: 12px</code>)',
        'Adicione uma classe <code>.done</code> com <code>text-decoration: line-through; opacity: 0.5</code>',
        'Use Flexbox para alinhar um ícone ✅ com o texto de cada item: <code>display: flex; align-items: center; gap: 8px</code>',
        'Aplique a classe <code>.done</code> em 2 tarefas e veja o efeito de "concluído"',
        'Bônus: adicione <code>:hover</code> nos itens com mudança de cor de fundo',
      ],
    },
    {
      label: 'CSS Grid Garden (externo)',
      url: 'https://cssgridgarden.com/',
      description: 'Jogo interativo para aprender CSS Grid praticando.',
    },
    {
      label: 'Flexbox Froggy (externo)',
      url: 'https://flexboxfroggy.com/',
      description: 'Jogo interativo para aprender Flexbox praticando.',
    },
  ],
  slides: [
    {
      id: 1,
      layout: 'cover',
      title: 'CSS — Estilo & Layout',
      content: {
        badge: 'DIA 1',
        subtitle: 'Transforme HTML sem estilo em interfaces bonitas e organizadas.',
      },
    },
    {
      id: 2,
      layout: 'two-column',
      title: 'Seletores e Box Model',
      content: {
        heading: 'Como o CSS sabe onde aplicar o estilo',
        text: [
          'Seletor de tag: aplica a todos os elementos daquele tipo',
          '.classe: aplica a qualquer elemento com class="nome"',
          '#id: aplica ao elemento único com id="nome"',
          'Box Model: todo elemento é uma caixa (content + padding + border + margin)',
        ],
        code: `/* Seletor de tag */
h1 { color: #4f46e5; }

/* Classe */
.card { background: #1e293b; padding: 16px; }

/* ID */
#titulo { font-size: 2rem; }

/* Box Model */
.box {
  width: 200px;
  padding: 16px;   /* espaço interno */
  border: 2px solid #4f46e5;
  margin: 24px;    /* espaço externo */
}`,
        codeLanguage: 'css',
      },
    },
    {
      id: 3,
      layout: 'two-column',
      title: 'Flexbox — Layout em Uma Dimensão',
      content: {
        heading: 'Alinhamento horizontal e vertical com facilidade',
        text: [
          'display: flex transforma o elemento em container flex',
          'justify-content controla o eixo principal (horizontal)',
          'align-items controla o eixo cruzado (vertical)',
          'gap define espaço entre os filhos',
        ],
        code: `.container {
  display: flex;
  justify-content: center;   /* centraliza horizontal */
  align-items: center;       /* centraliza vertical   */
  gap: 16px;                 /* espaço entre filhos  */
  flex-wrap: wrap;           /* quebra linha se precisar */
}

/* Valores de justify-content:
   flex-start | center | flex-end
   space-between | space-around | space-evenly */`,
        codeLanguage: 'css',
      },
    },
    {
      id: 4,
      layout: 'table',
      title: 'Flexbox vs. CSS Grid',
      content: {
        heading: 'Quando usar cada um',
        headers: ['Propriedade', 'Flexbox', 'CSS Grid'],
        rows: [
          ['Dimensões', '1D (linha ou coluna)', '2D (linhas E colunas)'],
          ['Uso ideal', 'Navbars, cards em linha, botões', 'Layouts de página, galerias'],
          ['Container', 'display: flex', 'display: grid'],
          ['Espaçamento', 'gap', 'gap'],
          ['Colunas fixas', 'flex: 1 (proporcional)', 'grid-template-columns: 1fr 1fr'],
          ['Alinhamento', 'justify-content / align-items', 'place-items: center'],
        ],
      },
    },
    {
      id: 5,
      layout: 'checklist',
      title: 'Missão CSS — O que fazer agora',
      content: {
        heading: 'Exercícios práticos do dia',
        items: [
          'Criar todo.html com uma lista de 4 tarefas',
          'Criar todo.css e vincular ao HTML',
          'Estilizar a lista com fundo escuro e border-radius',
          'Criar classe .done com text-decoration: line-through',
          'Usar Flexbox para alinhar ícone + texto em cada item',
          'Jogar CSS Grid Garden (https://cssgridgarden.com/)',
          'Jogar Flexbox Froggy (https://flexboxfroggy.com/)',
        ],
      },
    },
  ],
}

const terminalModule: Module = {
  id: 'dia-1/terminal',
  day: 1,
  title: 'Terminal — CLI Básico',
  summary: 'Navegue pelo sistema de arquivos e execute comandos como um dev.',
  tags: ['Terminal', 'CLI', 'Linha de Comando'],
  icon: 'FaTerminal',
  topics: [
    'O que é o Terminal e por que usar',
    'pwd — ver diretório atual',
    'ls / dir — listar arquivos e pastas',
    'cd pasta — navegar entre diretórios',
    'mkdir — criar uma pasta',
    'touch / echo — criar um arquivo',
    'rm / del — remover arquivo',
    'rmdir — remover pasta vazia',
  ],
  exercises: [
    {
      label: 'Missão CLI: Criar, navegar e deletar',
      steps: [
        'Abra o Terminal (Mac: <code>Cmd+Espaço</code> → "Terminal" | Windows: <code>Win+R</code> → "cmd")',
        'Execute <code>pwd</code> (Mac/Linux) ou <code>cd</code> (Windows) para ver onde você está',
        'Execute <code>mkdir meu-projeto</code> para criar a pasta do projeto',
        'Execute <code>cd meu-projeto</code> para entrar na pasta',
        'Execute <code>touch index.html</code> (Mac/Linux) ou <code>echo. &gt; index.html</code> (Windows)',
        'Execute <code>ls</code> (Mac/Linux) ou <code>dir</code> (Windows) para confirmar que o arquivo existe',
        'Execute <code>rm index.html</code> (Mac/Linux) ou <code>del index.html</code> (Windows) para removê-lo',
        'Execute <code>cd ..</code> para voltar à pasta anterior',
        'Execute <code>rmdir meu-projeto</code> para deletar a pasta',
        'Execute <code>ls</code> novamente para confirmar que a pasta foi removida ✅',
      ],
    },
  ],
  slides: [
    {
      id: 1,
      layout: 'cover',
      title: 'Terminal — CLI Básico',
      content: {
        badge: 'DIA 1',
        subtitle: 'O poder do teclado: controle total do seu computador via comandos.',
      },
    },
    {
      id: 2,
      layout: 'two-column',
      title: 'Navegando pelo Sistema de Arquivos',
      content: {
        heading: 'Os comandos mais usados no dia a dia',
        text: [
          'pwd mostra exatamente onde você está no sistema',
          'ls lista todos os arquivos da pasta atual',
          'cd nome-da-pasta entra em uma pasta',
          'cd .. volta um nível acima',
        ],
        code: `# Ver onde você está
$ pwd
/Users/thalissa/Documents

# Listar arquivos
$ ls
projetos  downloads  notas.txt

# Entrar em uma pasta
$ cd projetos

# Voltar um nível
$ cd ..

# Mac/Linux: ls -la (lista com detalhes)
$ ls -la`,
        codeLanguage: 'bash',
      },
    },
    {
      id: 3,
      layout: 'two-column',
      title: 'Criando e Removendo Arquivos',
      content: {
        heading: 'Gerenciar arquivos sem sair do teclado',
        text: [
          'mkdir cria uma nova pasta no diretório atual',
          'touch cria um arquivo vazio (Mac/Linux)',
          'rm remove um arquivo permanentemente',
          'rmdir remove uma pasta vazia',
        ],
        code: `# Criar pasta
$ mkdir meu-projeto
$ cd meu-projeto

# Criar arquivo (Mac/Linux)
$ touch index.html

# Criar arquivo (Windows)
$ echo. > index.html

# Remover arquivo (Mac/Linux)
$ rm index.html

# Remover arquivo (Windows)
$ del index.html

# Remover pasta vazia
$ cd ..
$ rmdir meu-projeto`,
        codeLanguage: 'bash',
      },
    },
    {
      id: 4,
      layout: 'table',
      title: 'Comandos: Mac/Linux vs Windows',
      content: {
        heading: 'Mesma ação, comando diferente por sistema',
        headers: ['Ação', 'Mac / Linux', 'Windows (CMD)'],
        rows: [
          ['Ver diretório atual', 'pwd', 'cd'],
          ['Listar arquivos', 'ls', 'dir'],
          ['Entrar em pasta', 'cd pasta', 'cd pasta'],
          ['Criar pasta', 'mkdir nome', 'mkdir nome'],
          ['Criar arquivo', 'touch arquivo.txt', 'echo. > arquivo.txt'],
          ['Remover arquivo', 'rm arquivo.txt', 'del arquivo.txt'],
          ['Remover pasta', 'rmdir pasta', 'rmdir pasta'],
          ['Limpar tela', 'clear', 'cls'],
        ],
      },
    },
    {
      id: 5,
      layout: 'checklist',
      title: 'Missão CLI — Execute agora',
      content: {
        heading: '10 passos da Missão CLI',
        items: [
          'Abrir o Terminal ou Prompt de Comando',
          'Executar pwd (Mac) ou cd (Windows) para ver onde está',
          'Executar mkdir meu-projeto',
          'Executar cd meu-projeto para entrar',
          'Criar index.html com touch ou echo',
          'Verificar com ls ou dir que o arquivo existe',
          'Remover o arquivo com rm ou del',
          'Voltar com cd ..',
          'Deletar a pasta com rmdir meu-projeto',
          'Confirmar que a pasta sumiu com ls',
        ],
      },
    },
  ],
}

// ─── DIA 2 ───────────────────────────────────────────────────────────────────

const jsVariaveisModule: Module = {
  id: 'dia-2/javascript-variaveis',
  day: 2,
  title: 'JavaScript — Variáveis & Tipos',
  summary: 'Entenda como armazenar e manipular dados com JavaScript moderno.',
  tags: ['JavaScript', 'Variáveis', 'Tipos'],
  icon: 'FaJs',
  topics: [
    'O que é JavaScript e onde roda (browser + Node.js)',
    'var — escopo de função e hoisting (evitar em código moderno)',
    'let — escopo de bloco, reatribuível',
    'const — escopo de bloco, não reatribuível (use como padrão)',
    'Tipos primitivos: String, Number, Boolean, null, undefined',
    'Arrays: [1, 2, 3] e métodos push, pop, length, indexOf',
    'Objetos: { chave: valor } e acesso por ponto ou colchete',
    'typeof e conversão implícita vs explícita',
  ],
  exercises: [
    {
      label: 'Exercícios no Console do Browser',
      steps: [
        'Abra o browser, pressione <code>F12</code> e clique em "Console"',
        'Declare: <code>const nome = "Seu Nome"</code> e exiba com <code>console.log(nome)</code>',
        'Declare: <code>let idade = 25</code>, mude para 26 com <code>idade = 26</code>',
        'Crie: <code>const frutas = ["maçã", "banana", "uva"]</code> e adicione uma 4ª com <code>frutas.push("manga")</code>',
        'Crie: <code>const aluno = { nome: "Ana", idade: 20, curso: "Dev" }</code>',
        'Acesse propriedades: <code>console.log(aluno.nome)</code> e <code>console.log(aluno["curso"])</code>',
        'Verifique tipos: <code>typeof nome</code>, <code>typeof idade</code>, <code>typeof frutas</code>',
      ],
    },
  ],
  slides: [
    {
      id: 1,
      layout: 'cover',
      title: 'JavaScript — Variáveis & Tipos',
      content: {
        badge: 'DIA 2',
        subtitle: 'Aprenda a armazenar, nomear e manipular dados na memória.',
      },
    },
    {
      id: 2,
      layout: 'two-column',
      title: 'var, let e const — Qual usar?',
      content: {
        heading: 'As 3 formas de declarar variáveis',
        text: [
          'const: não pode ser reatribuída. Use como padrão.',
          'let: pode ser reatribuída. Use quando o valor muda.',
          'var: escopo de função + hoisting. Evite em código moderno.',
        ],
        code: `// ✅ const — valor não muda
const PI = 3.14
const nome = "Ana"

// ✅ let — valor pode mudar
let pontos = 0
pontos = 10  // OK

// ❌ const não aceita reatribuição
const max = 100
// max = 200  // TypeError!

// ⚠️ var — evite (escopo confuso)
var x = 1
if (true) {
  var x = 2  // mesma variável!
  console.log(x) // 2
}
console.log(x) // 2 (vazou do if!)`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 3,
      layout: 'two-column',
      title: 'Tipos Primitivos',
      content: {
        heading: 'Os blocos básicos de qualquer dado',
        text: [
          'String: texto entre aspas simples, duplas ou backtick',
          'Number: inteiros e decimais (não há Int/Float separados)',
          'Boolean: apenas true ou false',
          'null: ausência intencional de valor',
          'undefined: variável declarada mas sem valor atribuído',
        ],
        code: `const nome = "Maria"          // String
const preco = 29.90           // Number
const ativo = true            // Boolean
const vazio = null            // null (intencional)
let indefinido                // undefined

// typeof retorna o tipo como string
console.log(typeof nome)      // "string"
console.log(typeof preco)     // "number"
console.log(typeof ativo)     // "boolean"
console.log(typeof null)      // "object" ← quirk do JS!
console.log(typeof indefinido)// "undefined"

// Template literals (backtick)
const msg = \`Olá, \${nome}! Preço: R$\${preco}\``,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 4,
      layout: 'two-column',
      title: 'Arrays — Listas de Dados',
      content: {
        heading: 'Guardando múltiplos valores em uma variável',
        text: [
          'Array é criado com colchetes [ ]',
          'Índices começam em 0 (primeiro item = [0])',
          'push() adiciona ao final, pop() remove o último',
          'length retorna a quantidade de itens',
        ],
        code: `const frutas = ["maçã", "banana", "uva"]

// Acessar por índice
console.log(frutas[0])   // "maçã"
console.log(frutas[2])   // "uva"

// Adicionar item
frutas.push("manga")
console.log(frutas.length) // 4

// Remover último
const ultimo = frutas.pop()
console.log(ultimo)      // "manga"

// Verificar existência
const indice = frutas.indexOf("banana")
console.log(indice)      // 1

// Iterar com forEach
frutas.forEach(fruta => {
  console.log(fruta)
})`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 5,
      layout: 'two-column',
      title: 'Objetos — Dados Estruturados',
      content: {
        heading: 'Agrupar dados relacionados com chave e valor',
        text: [
          'Objeto é criado com chaves { }',
          'Cada par chave: valor descreve uma propriedade',
          'Acesse com ponto (.) ou colchetes (["chave"])',
          'Pode conter strings, numbers, arrays e outros objetos',
        ],
        code: `const aluno = {
  nome: "Carlos",
  idade: 22,
  curso: "Desenvolvimento Web",
  hobbies: ["música", "games"],
  ativo: true
}

// Acesso com ponto
console.log(aluno.nome)   // "Carlos"

// Acesso com colchete (útil com variáveis)
const campo = "idade"
console.log(aluno[campo]) // 22

// Adicionar propriedade
aluno.turma = "Turma A"

// Desestruturação
const { nome, curso } = aluno
console.log(nome, curso)  // "Carlos" "Desenvolvimento Web"`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 6,
      layout: 'table',
      title: 'Cheat Sheet — Tipos & typeof',
      content: {
        heading: 'Referência rápida de tipos em JavaScript',
        headers: ['Tipo', 'Exemplo', 'typeof', 'Uso comum'],
        rows: [
          ['String', '"Olá" / \'Oi\' / `texto`', '"string"', 'Textos, nomes, mensagens'],
          ['Number', '42 / 3.14 / -10', '"number"', 'Cálculos, idades, preços'],
          ['Boolean', 'true / false', '"boolean"', 'Condições, flags, estados'],
          ['null', 'null', '"object" ⚠️', 'Ausência intencional de valor'],
          ['undefined', 'let x (sem valor)', '"undefined"', 'Variável não inicializada'],
          ['Array', '[1, 2, 3]', '"object"', 'Listas, coleções de dados'],
          ['Object', '{ chave: valor }', '"object"', 'Entidades, registros, configs'],
        ],
      },
    },
    {
      id: 7,
      layout: 'checklist',
      title: 'Missão Variáveis — Console do Browser',
      content: {
        heading: 'Abra o F12 e pratique agora',
        items: [
          'Abrir DevTools com F12 e ir para a aba Console',
          'Declarar const nome com seu nome e exibir com console.log',
          'Declarar let pontos = 0 e incrementar para 10',
          'Criar array frutas com 3 itens e adicionar 1 com push',
          'Criar objeto aluno com nome, idade e curso',
          'Acessar propriedades do objeto com ponto e com colchete',
          'Usar typeof para verificar o tipo de cada variável criada',
        ],
      },
    },
  ],
}

const jsCondicionaisModule: Module = {
  id: 'dia-2/javascript-condicionais',
  day: 2,
  title: 'JavaScript — Condicionais',
  summary: 'Ensine seu código a tomar decisões com if, else e switch.',
  tags: ['JavaScript', 'Lógica', 'Condicionais'],
  icon: 'FaCodeBranch',
  topics: [
    'O problema da tomada de decisão no código',
    'if, else if, else — estrutura e indentação',
    'Operadores de comparação: ===, !==, >, <, >=, <=',
    'Diferença entre == (loose) e === (strict equality)',
    'Operadores lógicos: && (E), || (OU), ! (NÃO)',
    'Operador ternário: condição ? valorTrue : valorFalse',
    'switch case — quando usar no lugar do if/else if',
  ],
  exercises: [
    {
      label: 'Desafios de Lógica de Decisão',
      steps: [
        'Abra o Console do browser (F12)',
        'Escreva um <code>if/else</code> que verifica se a variável <code>numero = 7</code> é positivo, negativo ou zero',
        'Use operadores lógicos: verifique se <code>x = 15</code> está entre 10 e 20 (<code>x > 10 && x < 20</code>)',
        'Converta o exercício 1 para operador ternário em uma linha',
        'Crie um <code>switch</code> que receba um número de 1 a 7 e retorne o nome do dia da semana',
        'Bônus: escreva uma função que recebe uma nota (0–10) e retorna "Aprovado", "Recuperação" ou "Reprovado"',
      ],
    },
  ],
  slides: [
    {
      id: 1,
      layout: 'cover',
      title: 'JavaScript — Condicionais',
      content: {
        badge: 'DIA 2',
        subtitle: 'Código que pensa: ensine seu programa a tomar decisões.',
      },
    },
    {
      id: 2,
      layout: 'two-column',
      title: 'if / else if / else',
      content: {
        heading: 'A estrutura de decisão fundamental',
        text: [
          'if avalia uma condição — se for true, executa o bloco',
          'else if adiciona condições alternativas em sequência',
          'else é o "caso contrário" — executa se nada foi true',
          'Apenas UM bloco é executado por vez',
        ],
        code: `const nota = 7.5

if (nota >= 9) {
  console.log("Excelente! Nota A")
} else if (nota >= 7) {
  console.log("Bom! Nota B")    // ← este executa
} else if (nota >= 5) {
  console.log("Recuperação")
} else {
  console.log("Reprovado")
}

// Condição simples (sem else)
const logado = true
if (logado) {
  console.log("Bem-vindo!")
}`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 3,
      layout: 'animated-demo',
      title: 'Fluxo de Decisão — Visualização',
      content: {
        heading: 'Como o if/else funciona por dentro',
        animationType: 'if-else-flow',
        description: 'Veja o fluxo de execução: a condição é avaliada, e apenas um dos caminhos é percorrido.',
      },
    },
    {
      id: 4,
      layout: 'table',
      title: 'Operadores de Comparação e Lógicos',
      content: {
        heading: 'Os símbolos que formam condições',
        headers: ['Operador', 'Significado', 'Exemplo', 'Resultado'],
        rows: [
          ['===', 'Igual (valor E tipo)', '5 === "5"', 'false'],
          ['!==', 'Diferente (valor ou tipo)', '5 !== "5"', 'true'],
          ['>', 'Maior que', '10 > 5', 'true'],
          ['<', 'Menor que', '3 < 1', 'false'],
          ['>=', 'Maior ou igual', '5 >= 5', 'true'],
          ['&&', 'E (ambos devem ser true)', 'true && false', 'false'],
          ['||', 'OU (pelo menos um true)', 'true || false', 'true'],
          ['!', 'NÃO (inverte o valor)', '!true', 'false'],
        ],
      },
    },
    {
      id: 5,
      layout: 'two-column',
      title: 'Operador Ternário',
      content: {
        heading: 'if/else em uma única linha',
        text: [
          'Sintaxe: condição ? valor_se_true : valor_se_false',
          'Ideal para atribuições simples com duas opções',
          'Evite aninhar ternários — fica ilegível',
          'Para lógica complexa, prefira if/else convencional',
        ],
        code: `// if/else convencional
let mensagem
if (pontos >= 60) {
  mensagem = "Aprovado"
} else {
  mensagem = "Reprovado"
}

// ✅ Equivalente com ternário
const mensagem = pontos >= 60 ? "Aprovado" : "Reprovado"

// Uso em JSX / template
const status = ativo ? "🟢 Online" : "🔴 Offline"

// ❌ Evite ternários aninhados
// confuso demais — use if/else
const nivel = x > 90 ? "A" : x > 70 ? "B" : "C"`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 6,
      layout: 'two-column',
      title: 'Switch Case',
      content: {
        heading: 'Quando há muitas opções para um mesmo valor',
        text: [
          'switch compara um valor com múltiplos casos',
          'break interrompe a execução — sempre inclua',
          'default é executado se nenhum case combinou',
          'Use quando testar o mesmo valor contra 3+ opções',
        ],
        code: `const dia = 3

switch (dia) {
  case 1:
    console.log("Segunda-feira")
    break
  case 2:
    console.log("Terça-feira")
    break
  case 3:
    console.log("Quarta-feira") // ← executa
    break
  case 6:
  case 7:
    console.log("Fim de semana!") // agrupa casos
    break
  default:
    console.log("Dia inválido")
}`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 7,
      layout: 'checklist',
      title: 'Missão Condicionais — Desafios',
      content: {
        heading: 'Pratique no console do browser',
        items: [
          'Abrir Console (F12) e criar variável numero = 7',
          'Escrever if/else para verificar positivo, negativo ou zero',
          'Testar: verificar se x = 15 está entre 10 e 20 com &&',
          'Converter o exercício 1 para operador ternário',
          'Criar switch para dias da semana (1 = "Segunda", etc.)',
          'Bônus: função que recebe nota e retorna "Aprovado", "Recuperação" ou "Reprovado"',
        ],
      },
    },
  ],
}

const jsLoopsModule: Module = {
  id: 'dia-2/javascript-loops',
  day: 2,
  title: 'JavaScript — Loops',
  summary: 'Automatize tarefas repetitivas com for, while e forEach.',
  tags: ['JavaScript', 'Loops', 'Repetição'],
  icon: 'FaArrowsRotate',
  topics: [
    'Por que precisamos de repetição no código',
    'for — anatomia: inicialização, condição e incremento',
    'while — executa enquanto a condição for verdadeira',
    'do...while — executa pelo menos uma vez',
    'for...of — iterar valores de um array',
    'for...in — iterar chaves de um objeto',
    'Array.forEach() — iteração funcional',
    'break e continue — controle de fluxo no loop',
  ],
  exercises: [
    {
      label: 'Desafios de Repetição',
      steps: [
        'Abra o Console do browser (F12)',
        'Use <code>for</code> para imprimir os números de 1 a 10',
        'Use <code>while</code> para contar regressivamente de 5 até 1',
        'Use <code>for...of</code> para percorrer um array de nomes e exibir cada um',
        'Use <code>forEach</code> para calcular a soma de <code>[10, 20, 30, 40]</code>',
        'Use <code>for</code> com <code>break</code> para encontrar o primeiro número par maior que 7 no array <code>[1, 3, 5, 8, 11]</code>',
        'Bônus: use <code>for...in</code> para listar todas as chaves de um objeto <code>aluno</code>',
      ],
    },
  ],
  slides: [
    {
      id: 1,
      layout: 'cover',
      title: 'JavaScript — Loops',
      content: {
        badge: 'DIA 2',
        subtitle: 'Faça o computador trabalhar por você: automatize repetições.',
      },
    },
    {
      id: 2,
      layout: 'two-column',
      title: 'O Loop for — Anatomia Completa',
      content: {
        heading: 'Três partes que controlam o loop',
        text: [
          'Inicialização: roda uma vez antes do loop começar',
          'Condição: verificada antes de cada iteração',
          'Incremento: roda ao final de cada iteração',
          'O loop para quando a condição se torna false',
        ],
        code: `//          init  condição  incremento
for (let i = 0; i < 5;    i++) {
  console.log("Iteração:", i)
}
// Saída: 0, 1, 2, 3, 4

// Loop em array com índice
const cores = ["vermelho", "verde", "azul"]
for (let i = 0; i < cores.length; i++) {
  console.log(i, cores[i])
}
// 0 "vermelho"
// 1 "verde"
// 2 "azul"

// Loop decrescente
for (let i = 5; i > 0; i--) {
  console.log(i) // 5, 4, 3, 2, 1
}`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 3,
      layout: 'animated-demo',
      title: 'Loop em Ação — Visualização',
      content: {
        heading: 'Veja o loop executando passo a passo',
        animationType: 'loop-counter',
        description: 'Acompanhe o contador i incrementando e o array sendo preenchido a cada iteração.',
      },
    },
    {
      id: 4,
      layout: 'two-column',
      title: 'while e do...while',
      content: {
        heading: 'Quando não sabemos quantas vezes repetir',
        text: [
          'while: verifica a condição ANTES de executar',
          'do...while: executa PELO MENOS UMA VEZ antes de verificar',
          'Útil quando o número de iterações depende de entrada do usuário',
          'Cuidado: se a condição nunca for false → loop infinito!',
        ],
        code: `// while: pode não executar nenhuma vez
let tentativas = 0
while (tentativas < 3) {
  console.log("Tentativa:", tentativas + 1)
  tentativas++
}

// do...while: executa pelo menos 1 vez
let senha = ""
do {
  senha = prompt("Digite a senha:")
} while (senha !== "1234")
console.log("Acesso liberado!")

// ⚠️ Loop infinito — NUNCA faça isso:
// while (true) { console.log("infinito!") }`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 5,
      layout: 'cards',
      title: 'Quando Usar Cada Loop',
      content: {
        heading: 'Escolha o loop certo para cada situação',
        items: [
          {
            icon: 'FaHashtag',
            title: 'for',
            description: 'Quando você sabe quantas vezes repetir. Ideal para arrays com índice.',
          },
          {
            icon: 'FaArrowsRotate',
            title: 'for...of',
            description: 'Para percorrer valores de arrays. Mais legível que o for clássico.',
          },
          {
            icon: 'FaKey',
            title: 'for...in',
            description: 'Para percorrer as chaves (propriedades) de um objeto.',
          },
          {
            icon: 'FaFunctionSymbol',
            title: 'forEach',
            description: 'Estilo funcional para arrays. Não aceita break — use for...of se precisar.',
          },
        ],
      },
    },
    {
      id: 6,
      layout: 'two-column',
      title: 'break e continue',
      content: {
        heading: 'Controlando o fluxo dentro do loop',
        text: [
          'break para o loop imediatamente e sai',
          'continue pula a iteração atual e vai para a próxima',
          'Ambos funcionam no for, while e for...of',
          'Use com moderação — podem dificultar a leitura',
        ],
        code: `const numeros = [1, 3, 5, 8, 11, 14]

// break: para ao encontrar o primeiro par
for (const n of numeros) {
  if (n % 2 === 0) {
    console.log("Primeiro par:", n) // 8
    break
  }
}

// continue: pula os ímpares
for (const n of numeros) {
  if (n % 2 !== 0) continue
  console.log("Par:", n) // 8, 14
}

// forEach não aceita break
// use for...of quando precisar de break`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 7,
      layout: 'checklist',
      title: 'Missão Loops — Desafios no Console',
      content: {
        heading: 'Execute no F12 agora',
        items: [
          'Usar for para imprimir números de 1 a 10',
          'Usar while para contagem regressiva de 5 a 1',
          'Criar array com 4 nomes e iterar com for...of',
          'Calcular soma de [10, 20, 30, 40] com forEach',
          'Usar for com break para achar o primeiro par > 7',
          'Usar for...in para listar chaves de um objeto aluno',
          'Bônus: criar tabuada do 7 com for (7×1 até 7×10)',
        ],
      },
    },
  ],
}

// ─── DIA 3 ───────────────────────────────────────────────────────────────────

const githubModule: Module = {
  id: 'dia-3/github',
  day: 3,
  title: 'GitHub — Versionamento',
  summary: 'Salve o histórico do seu código e colabore com outros devs.',
  tags: ['Git', 'GitHub', 'Versionamento'],
  icon: 'FaGithub',
  topics: [
    'O que é controle de versão e por que usar',
    'Git vs GitHub — a diferença',
    'Criar conta no GitHub (passo a passo)',
    'Comandos básicos: git init, git add, git commit, git push',
    'Criar repositório e fazer o primeiro commit',
    'Clone, pull e o fluxo básico de trabalho',
  ],
  exercises: [
    {
      label: 'Criar sua conta e primeiro repositório',
      steps: [
        'Acesse <code>https://github.com</code> e clique em "Sign Up"',
        'Escolha username, email e senha — guarde bem!',
        'Confirme o email recebido na caixa de entrada',
        'Clique em "New repository", dê o nome <code>meu-primeiro-site</code>',
        'Marque "Add a README file" e clique em "Create repository"',
        'No terminal, execute: <code>git clone URL-DO-SEU-REPO</code>',
        'Entre na pasta, faça uma alteração e execute: <code>git add . && git commit -m "primeiro commit" && git push</code>',
      ],
    },
  ],
  slides: [
    {
      id: 1,
      layout: 'cover',
      title: 'GitHub — Versionamento',
      content: {
        badge: 'DIA 3',
        subtitle: 'Nunca perca uma linha de código e colabore com o mundo.',
      },
    },
    {
      id: 2,
      layout: 'two-column',
      title: 'Git vs GitHub',
      content: {
        heading: 'Dois conceitos diferentes, complementares',
        text: [
          'Git é o software de versionamento que roda no seu computador',
          'GitHub é a plataforma online que hospeda repositórios Git',
          'Pense no Git como o sistema de save e o GitHub como a nuvem',
          'Alternativas ao GitHub: GitLab, Bitbucket — mas GitHub é o mais usado',
        ],
        code: `# Configurar identidade (uma vez por computador)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Iniciar repositório na pasta atual
git init

# Ver status dos arquivos
git status

# Adicionar arquivos ao stage
git add .          # todos os arquivos
git add index.html # arquivo específico

# Criar um commit (save permanente)
git commit -m "Adiciona página inicial"

# Enviar para o GitHub
git push origin main`,
        codeLanguage: 'bash',
      },
    },
    {
      id: 3,
      layout: 'cards',
      title: 'Os 4 Comandos Essenciais',
      content: {
        heading: 'O fluxo básico de todo desenvolvedor',
        items: [
          {
            icon: 'FaPlus',
            title: 'git add',
            description: 'Seleciona quais arquivos entrarão no próximo commit. "Prepara o save."',
          },
          {
            icon: 'FaCheck',
            title: 'git commit -m',
            description: 'Cria um registro permanente com mensagem descritiva. "Salva o jogo."',
          },
          {
            icon: 'FaUpload',
            title: 'git push',
            description: 'Envia os commits locais para o GitHub. "Sobe para a nuvem."',
          },
          {
            icon: 'FaDownload',
            title: 'git pull',
            description: 'Baixa as alterações do GitHub para o seu computador. "Sincroniza."',
          },
        ],
      },
    },
    {
      id: 4,
      layout: 'table',
      title: 'Comandos Git — Referência Rápida',
      content: {
        heading: 'Cheat sheet do dia a dia',
        headers: ['Comando', 'O que faz'],
        rows: [
          ['git init', 'Inicializa repositório Git na pasta atual'],
          ['git clone <url>', 'Copia repositório remoto para o computador'],
          ['git status', 'Mostra arquivos modificados/não commitados'],
          ['git add .', 'Adiciona todos os arquivos ao stage'],
          ['git commit -m "msg"', 'Cria um commit com mensagem'],
          ['git push', 'Envia commits para o repositório remoto'],
          ['git pull', 'Baixa e mescla alterações do remoto'],
          ['git log --oneline', 'Lista o histórico de commits resumido'],
        ],
      },
    },
    {
      id: 5,
      layout: 'checklist',
      title: 'Missão GitHub — Primeiro Repositório',
      content: {
        heading: 'Passo a passo para hoje',
        items: [
          'Criar conta em github.com e confirmar o email',
          'Criar repositório "meu-primeiro-site" com README',
          'Copiar a URL do repositório (botão verde "Code")',
          'Executar git clone URL-DO-REPO no terminal',
          'Adicionar/modificar o README.md com seu nome',
          'Executar git add . && git commit -m "meu primeiro commit"',
          'Executar git push e verificar no GitHub',
        ],
      },
    },
  ],
}

const codespacesModule: Module = {
  id: 'dia-3/codespaces-ia',
  day: 3,
  title: 'GitHub Codespaces + IA',
  summary: 'Use VS Code na nuvem com IA para criar sua página pessoal.',
  tags: ['Codespaces', 'GitHub Copilot', 'IA', 'VS Code'],
  icon: 'FaRobot',
  topics: [
    'O que é o GitHub Codespaces (VS Code na nuvem)',
    'Abrir um Codespace a partir de um repositório template',
    'Interface do VS Code: explorer, terminal integrado, extensões',
    'GitHub Copilot: autocomplete com IA',
    'Prompt engineering básico para gerar código',
    'Revisar e ajustar o código gerado pela IA',
  ],
  exercises: [
    {
      label: 'Criar sua página pessoal com IA',
      url: 'https://github.com/template-curso',
      description: 'Acesse o repositório template, abra um Codespace e use o Copilot para gerar sua página.',
      steps: [
        'Acesse o repositório template (link acima) e clique em "Use this template"',
        'Clique no botão verde "Code" → aba "Codespaces" → "Create codespace"',
        'Aguarde o Codespace iniciar (leva ~30 segundos)',
        'No terminal integrado (Ctrl+`), você já está no ambiente configurado',
        'Abra o arquivo <code>index.html</code> e comece a digitar um comentário',
        'O GitHub Copilot vai sugerir código — pressione <code>Tab</code> para aceitar',
        'Prompt de exemplo: "// Crie uma página pessoal com meu nome, foto e habilidades"',
        'Revise o código gerado, ajuste o conteúdo e salve',
      ],
    },
  ],
  slides: [
    {
      id: 1,
      layout: 'cover',
      title: 'GitHub Codespaces + IA',
      content: {
        badge: 'DIA 3',
        subtitle: 'VS Code na nuvem + IA: crie sem instalar nada no seu computador.',
      },
    },
    {
      id: 2,
      layout: 'two-column',
      title: 'O que é GitHub Codespaces',
      content: {
        heading: 'VS Code completo rodando na nuvem',
        text: [
          'Codespaces é um ambiente de desenvolvimento hospedado pelo GitHub',
          'Roda no browser — sem instalação, sem configuração local',
          'Cada Codespace é uma VM Linux com terminal real',
          'Gratuito até 60 horas/mês para contas pessoais',
        ],
        code: `# O Codespace já vem com tudo instalado:
# - VS Code no browser
# - Terminal Linux integrado
# - Git configurado
# - GitHub Copilot disponível

# Você pode rodar comandos normalmente:
node --version   # v20.x
npm --version    # 10.x
git log          # histórico do repo

# E fazer commit direto do Codespace:
git add .
git commit -m "Página pessoal criada com IA"
git push`,
        codeLanguage: 'bash',
      },
    },
    {
      id: 3,
      layout: 'cards',
      title: 'GitHub Copilot — IA para Código',
      content: {
        heading: 'Seu par programador com IA',
        items: [
          {
            icon: 'FaMagic',
            title: 'Autocomplete Inteligente',
            description: 'Sugere linhas e blocos inteiros enquanto você digita. Tab para aceitar.',
          },
          {
            icon: 'FaCommentDots',
            title: 'Geração por Comentário',
            description: 'Escreva um comentário descrevendo o que quer e o Copilot gera o código.',
          },
          {
            icon: 'FaSearch',
            title: 'Explicação de Código',
            description: 'Selecione código, clique com botão direito → "Explain" para entender.',
          },
          {
            icon: 'FaBug',
            title: 'Correção de Bugs',
            description: 'Selecione código com erro → "Fix" para sugestão de correção.',
          },
        ],
      },
    },
    {
      id: 4,
      layout: 'table',
      title: 'Prompts que Funcionam',
      content: {
        heading: 'Como pedir para a IA gerar código útil',
        headers: ['Prompt (comentário no código)', 'O que gera'],
        rows: [
          ['// Crie um header com meu nome e foto de perfil', 'HTML do header com classes CSS'],
          ['// Adicione uma seção de habilidades com cards', 'Grid de cards com ícones'],
          ['// Estilize esta página com tema escuro e cor roxa', 'CSS variables + dark theme'],
          ['// Crie um formulário de contato com nome, email e mensagem', 'Form HTML com validação'],
          ['// Adicione animação de fade-in quando a página carregar', 'CSS @keyframes + JS'],
          ['// Faça o menu ser responsivo no mobile', 'Media queries + hamburger menu'],
        ],
      },
    },
    {
      id: 5,
      layout: 'checklist',
      title: 'Missão Codespaces — Sua Página com IA',
      content: {
        heading: 'Crie sua página pessoal hoje',
        items: [
          'Acessar o repositório template e criar uma cópia',
          'Abrir um Codespace (botão verde "Code" → Codespaces)',
          'Explorar a interface: Explorer, Terminal, Extensões',
          'Abrir index.html e escrever um comentário descritivo',
          'Aceitar a sugestão do Copilot com Tab',
          'Personalizar o conteúdo gerado com seus dados reais',
          'Fazer commit: git add . && git commit -m "minha página"',
          'Fazer push e verificar no GitHub',
        ],
      },
    },
  ],
}

const githubPagesModule: Module = {
  id: 'dia-3/github-pages',
  day: 3,
  title: 'Deploy com GitHub Pages',
  summary: 'Publique seu site gratuitamente para o mundo em minutos.',
  tags: ['Deploy', 'GitHub Pages', 'Hospedagem'],
  icon: 'FaGlobe',
  topics: [
    'O que é hospedagem e como funciona o DNS',
    'GitHub Pages: hospedagem gratuita para sites estáticos',
    'Configurar o repositório: Settings → Pages → Source',
    'URL gerada: https://usuario.github.io/repositorio',
    'Atualizar o site com git push (deploy automático)',
    'Domínio customizado (opcional): apontar seu .com para o GitHub',
  ],
  exercises: [
    {
      label: 'Publicar seu site com GitHub Pages',
      steps: [
        'No repositório do GitHub, clique em <code>Settings</code> (engrenagem)',
        'No menu lateral esquerdo, clique em <code>Pages</code>',
        'Em "Source", selecione "Deploy from a branch"',
        'Em "Branch", selecione <code>main</code> e a pasta <code>/ (root)</code>',
        'Clique em <code>Save</code> e aguarde 1-2 minutos',
        'Recarregue a página — um link aparecerá no topo: <code>https://SEU-USUARIO.github.io/meu-primeiro-site</code>',
        'Acesse o link e veja seu site no ar! 🎉',
        'Bônus: faça uma alteração, git push, e veja o site atualizar em ~1 minuto',
      ],
    },
  ],
  slides: [
    {
      id: 1,
      layout: 'cover',
      title: 'Deploy com GitHub Pages',
      content: {
        badge: 'DIA 3',
        subtitle: 'Seu site no ar em 3 cliques — hospedagem gratuita para sempre.',
      },
    },
    {
      id: 2,
      layout: 'two-column',
      title: 'Como Funciona a Hospedagem',
      content: {
        heading: 'Da pasta do seu PC para o mundo',
        text: [
          'Hospedagem = um computador que fica ligado 24h servindo seus arquivos',
          'GitHub Pages hospeda sites estáticos (HTML, CSS, JS) de graça',
          'A cada git push, o GitHub republica seu site automaticamente',
          'Seu site fica em: https://usuario.github.io/repositorio',
        ],
        code: `# Fluxo completo: código → GitHub → site ao vivo

# 1. Editar seu site localmente
nano index.html

# 2. Salvar as mudanças no Git
git add .
git commit -m "Atualiza seção de projetos"

# 3. Enviar para o GitHub
git push origin main

# ✅ Em ~60 segundos, seu site está atualizado em:
# https://usuario.github.io/meu-primeiro-site

# Para ver o histórico de deploys:
# GitHub → seu repo → Actions`,
        codeLanguage: 'bash',
      },
    },
    {
      id: 3,
      layout: 'cards',
      title: 'Por que GitHub Pages?',
      content: {
        heading: 'As vantagens para quem está começando',
        items: [
          {
            icon: 'FaMoneyBill',
            title: '100% Gratuito',
            description: 'Sem cartão de crédito, sem limite de tempo. Hospedagem permanente.',
          },
          {
            icon: 'FaBolt',
            title: 'Deploy Automático',
            description: 'Git push = site atualizado. Sem painel de controle complicado.',
          },
          {
            icon: 'FaLock',
            title: 'HTTPS Grátis',
            description: 'Certificado SSL automático. Seu site já vem com o cadeado verde.',
          },
          {
            icon: 'FaLink',
            title: 'Domínio Customizado',
            description: 'Pode apontar seu próprio .com para o GitHub Pages gratuitamente.',
          },
        ],
      },
    },
    {
      id: 4,
      layout: 'table',
      title: 'Configurando o GitHub Pages',
      content: {
        heading: 'Passo a passo visual',
        headers: ['Passo', 'Onde', 'O que fazer'],
        rows: [
          ['1', 'Repositório no GitHub', 'Clique em Settings (ícone de engrenagem)'],
          ['2', 'Menu lateral', 'Clique em Pages'],
          ['3', 'Source', 'Selecione "Deploy from a branch"'],
          ['4', 'Branch', 'Selecione "main" e "/ (root)"'],
          ['5', 'Save', 'Clique em Save e aguarde ~2 minutos'],
          ['6', 'Topo da página Pages', 'Copie a URL gerada e acesse'],
        ],
      },
    },
    {
      id: 5,
      layout: 'checklist',
      title: 'Missão Deploy — Seu Site ao Vivo',
      content: {
        heading: 'Coloque seu site no ar hoje',
        items: [
          'Ir em Settings → Pages no repositório',
          'Configurar Source: branch main, pasta root',
          'Salvar e aguardar o deploy (1-2 min)',
          'Copiar e acessar a URL github.io gerada',
          'Compartilhar o link com alguém! 🎉',
          'Fazer uma alteração no index.html e git push',
          'Aguardar ~1 minuto e ver o site atualizado',
          'Bônus: configurar domínio customizado nas Settings',
        ],
      },
    },
  ],
}

// ─── Exportações ─────────────────────────────────────────────────────────────

export const MODULES: Module[] = [
  htmlModule,
  cssModule,
  terminalModule,
  jsVariaveisModule,
  jsCondicionaisModule,
  jsLoopsModule,
  githubModule,
  codespacesModule,
  githubPagesModule,
]

export function getModuleById(id: string): Module | undefined {
  return MODULES.find((m) => m.id === id)
}
