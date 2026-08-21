import type { Module } from '../types'

// ─── DIA 1 ───────────────────────────────────────────────────────────────────

const introducaoModule: Module = {
  id: 'dia-1/introducao',
  day: 1,
  title: 'Boas-vindas — O que é o Desenvolvimento Web',
  summary: 'Visão geral rápida (~15 min) de HTML, CSS e JavaScript antes de colocar a mão no código.',
  tags: ['Introdução', 'Web', 'Visão Geral'],
  icon: 'FaGraduationCap',
  topics: [
    'Como a web funciona: navegador, servidor e a página',
    'A tríade: HTML (conteúdo), CSS (estilo) e JavaScript (interatividade)',
    'A mesma página evoluindo com cada tecnologia',
    'Roteiro dos 3 dias do curso',
    'Ferramentas que vamos usar: navegador, VS Code, DevTools e terminal',
  ],
  exercises: [
    {
      label: 'Aquecimento: abrir as DevTools e preparar o ambiente',
      steps: [
        'Abra qualquer site no navegador e pressione <code>F12</code> (ou clique com o botão direito → "Inspecionar")',
        'Na aba <strong>Elements</strong>, passe o mouse sobre o código e veja partes da página acendendo',
        'Mude um texto qualquer direto no inspetor e veja a página atualizar na hora',
        'Crie uma pasta chamada <code>curso-dev</code> no seu computador para guardar os projetos da semana',
        'Abra essa pasta no <strong>VS Code</strong> (Arquivo → Abrir Pasta)',
      ],
    },
  ],
  slides: [
    {
      id: 1,
      layout: 'cover',
      title: 'Bem-vindo ao Desenvolvimento Web',
      content: {
        badge: 'DIA 1 · INTRODUÇÃO',
        subtitle: 'Uma visão geral rápida antes de começarmos a programar de verdade.',
      },
    },
    {
      id: 2,
      layout: 'two-column',
      title: 'Como a Web Funciona',
      content: {
        heading: 'Do clique até a página aparecer',
        text: [
          'Você digita um endereço ou clica em um link no navegador',
          'O navegador pede os arquivos a um servidor pela internet',
          'O servidor responde com HTML, CSS e JavaScript',
          'O navegador lê esses arquivos e desenha a página na tela',
        ],
        image: {
          src:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 520 340' width='520' height='340' font-family='sans-serif'><rect x='20' y='70' width='190' height='200' rx='14' fill='%231e293b' stroke='%234f46e5' stroke-width='2'/><rect x='20' y='70' width='190' height='34' rx='14' fill='%23334155'/><circle cx='42' cy='87' r='5' fill='%23ef4444'/><circle cx='60' cy='87' r='5' fill='%23f59e0b'/><circle cx='78' cy='87' r='5' fill='%2310b981'/><text x='115' y='160' fill='%23f1f5f9' font-size='19' text-anchor='middle' font-weight='bold'>Navegador</text><text x='115' y='186' fill='%2394a3b8' font-size='13' text-anchor='middle'>seu computador</text><rect x='310' y='70' width='190' height='200' rx='14' fill='%231e293b' stroke='%2310b981' stroke-width='2'/><rect x='330' y='96' width='150' height='28' rx='6' fill='%23334155'/><rect x='330' y='132' width='150' height='28' rx='6' fill='%23334155'/><circle cx='348' cy='110' r='4' fill='%2310b981'/><circle cx='348' cy='146' r='4' fill='%2310b981'/><text x='405' y='212' fill='%23f1f5f9' font-size='19' text-anchor='middle' font-weight='bold'>Servidor</text><text x='405' y='238' fill='%2394a3b8' font-size='13' text-anchor='middle'>na internet</text><text x='260' y='118' fill='%2394a3b8' font-size='13' text-anchor='middle'>1. pedido</text><line x1='215' y1='134' x2='303' y2='134' stroke='%234f46e5' stroke-width='3'/><polygon points='305,134 292,128 292,140' fill='%234f46e5'/><text x='260' y='292' fill='%2394a3b8' font-size='12' text-anchor='middle'>2. HTML + CSS + JS</text><line x1='305' y1='222' x2='217' y2='222' stroke='%2310b981' stroke-width='3'/><polygon points='215,222 228,216 228,228' fill='%2310b981'/></svg>",
          alt: 'Diagrama: o navegador envia um pedido ao servidor e recebe HTML, CSS e JavaScript de volta',
        },
      },
    },
    {
      id: 3,
      layout: 'cards',
      title: 'As Três Linguagens da Web',
      content: {
        heading: 'Cada uma tem um papel bem definido',
        items: [
          {
            icon: 'FaHtml5',
            title: 'HTML — Conteúdo',
            description: 'A estrutura da página: textos, imagens, links, listas e botões. É o "esqueleto".',
          },
          {
            icon: 'FaCss3Alt',
            title: 'CSS — Estilo',
            description: 'A aparência: cores, fontes, espaçamentos e o layout. É a "roupa" da página.',
          },
          {
            icon: 'FaJs',
            title: 'JavaScript — Interatividade',
            description: 'O comportamento: reagir a cliques, validar formulários e atualizar a tela. É o "movimento".',
          },
          {
            icon: 'FaCompass',
            title: 'Trabalham juntos',
            description: 'Toda página que você usa combina as três. Nesta semana vamos aprender uma de cada vez.',
          },
        ],
      },
    },
    {
      id: 4,
      layout: 'two-column',
      title: 'A Mesma Página, Camada por Camada',
      content: {
        heading: 'Uma analogia com uma casa',
        text: [
          'Só HTML: paredes cruas, tudo empilhado e sem cor',
          '+ CSS: pintura, móveis e organização dos ambientes',
          '+ JS: interruptores, portas que abrem e campainha',
          'Juntando as três, temos um site completo e vivo',
        ],
        code: `<!-- Só HTML -->
<button>Curtir</button>

/* + CSS */
button { background: #4f46e5; color: #fff; }

// + JavaScript
button.onclick = () => alert('Obrigado!')`,
        codeLanguage: 'html',
      },
    },
    {
      id: 5,
      layout: 'table',
      title: 'Nosso Roteiro da Semana',
      content: {
        heading: 'O que vamos construir em cada dia',
        headers: ['Dia', 'Tema', 'O que você vai saber fazer'],
        rows: [
          ['Dia 1', 'HTML + CSS', 'Estruturar e estilizar uma página com Flexbox e Grid'],
          ['Dia 2', 'JavaScript', 'Usar variáveis, condições e repetições para dar interatividade'],
          ['Dia 3', 'Git & Deploy', 'Versionar com Git/GitHub e publicar o site no ar'],
        ],
      },
    },
    {
      id: 6,
      layout: 'cards',
      title: 'Ferramentas que Vamos Usar',
      content: {
        heading: 'Tudo gratuito e já no seu computador',
        items: [
          {
            icon: 'FaGlobe',
            title: 'Navegador',
            description: 'Chrome, Edge ou Firefox. É onde a página realmente aparece.',
          },
          {
            icon: 'FaCode',
            title: 'VS Code',
            description: 'O editor onde vamos escrever o código dos projetos.',
          },
          {
            icon: 'FaSearch',
            title: 'DevTools (F12)',
            description: 'As ferramentas do navegador para inspecionar e depurar a página.',
          },
          {
            icon: 'FaTerminal',
            title: 'Terminal',
            description: 'Uma linha de comando para navegar em pastas e usar o Git no Dia 3.',
          },
        ],
      },
    },
  ],
}

const htmlModule: Module = {
  id: 'dia-1/html',
  day: 1,
  title: 'HTML — Fundamentos',
  summary: 'Aprenda a estrutura básica de qualquer página web com HTML5.',
  tags: ['HTML', 'Web', 'Fundamentos'],
  icon: 'FaHtml5',
  topics: [
    'O que é HTML e para que serve',
    'Estrutura moderna: <!DOCTYPE html>, lang, <meta charset> e viewport',
    'Tags essenciais: títulos, parágrafos, links e imagens',
    'Formatação de texto, listas ordenadas e não-ordenadas',
    'Imagens otimizadas com alt e loading="lazy"',
    'Tabelas e formulários (input, label, button)',
    'Tags semânticas do HTML5: header, main, nav, footer',
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
        heading: 'Todo site moderno começa com essa estrutura',
        text: [
          '<!DOCTYPE html> informa ao navegador que o documento usa HTML5',
          '<head> é a área de configuração invisível: título da aba, metadados, links de CSS e scripts',
          '<meta charset="UTF-8"> e lang="pt-BR" garantem acentuação correta, acessibilidade e melhor SEO',
          '<body> é a área visível da página: textos, imagens, botões e tudo que o usuário realmente interage',
        ],
        code: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0" />
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
      layout: 'animated-demo',
      title: 'Galeria de Tags — Código e Resultado',
      content: {
        heading: 'Escolha uma tag e veja o navegador renderizar',
        animationType: 'html-tag-preview',
        description: 'À esquerda o código HTML, à direita o resultado real. Troque entre títulos, texto, listas, imagem, tabela, formulário e tags semânticas.',
      },
    },
    {
      id: 5,
      layout: 'cards',
      title: 'Mídia, Formatação e Semântica',
      content: {
        heading: 'Além do texto: enriqueça a página',
        items: [
          {
            icon: 'FaImage',
            title: 'Imagens otimizadas',
            description: 'Use alt para acessibilidade e loading="lazy" para carregar só quando aparecer.',
          },
          {
            icon: 'FaAlignLeft',
            title: 'Formatação de texto',
            description: '<strong> para importância, <em> para ênfase e <mark> para destaque.',
          },
          {
            icon: 'FaListUl',
            title: 'Listas',
            description: '<ul> para itens sem ordem e <ol> para passos numerados.',
          },
          {
            icon: 'FaLayerGroup',
            title: 'Tags semânticas',
            description: '<header>, <nav>, <main> e <footer> dão significado à estrutura.',
          },
        ],
      },
    },
    {
      id: 6,
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
      id: 7,
      layout: 'two-column',
      title: 'Formulários — Capturando Dados',
      content: {
        heading: 'O básico de um formulário acessível',
        text: [
          'Todo <input> deve ter um <label> associado pelo id',
          'O atributo type muda o teclado e a validação (email, number...)',
          'placeholder é apenas uma dica, não substitui o label',
          '<button type="submit"> envia o formulário',
        ],
        code: `<form>
  <label for="email">E-mail</label>
  <input id="email" type="email"
         placeholder="voce@email.com" required />

  <label for="msg">Mensagem</label>
  <textarea id="msg" rows="3"></textarea>

  <button type="submit">Enviar</button>
</form>`,
        codeLanguage: 'html',
      },
    },
    {
      id: 8,
      layout: 'checklist',
      title: 'Missão HTML — O que fazer agora',
      content: {
        heading: 'Exercício prático: seu primeiro site',
        items: [
          'Criar pasta meu-site e o arquivo index.html',
          'Adicionar a estrutura base com <meta viewport>',
          'Inserir um <h1> com seu nome completo',
          'Adicionar um <p> com uma breve apresentação',
          'Incluir uma imagem com <img src="" alt="" loading="lazy">',
          'Criar uma lista <ul> com 3 hobbies ou interesses',
          'Organizar a página com <header>, <main> e <footer>',
          'Adicionar um pequeno formulário de contato',
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
    'Flexbox interativo: justify-content, align-items, gap e wrap',
    'CSS Grid interativo: grid-template-columns e gap',
    'Cores, fontes e unidades modernas (rem, %, vh, clamp())',
    'Estados acessíveis: :hover, :focus-visible, :active',
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
        heading: 'Organize itens em linha ou coluna com total controle',
        text: [
          'display: flex — ativa o Flexbox no elemento pai; os filhos diretos viram "itens flex"',
          'flex-direction — define a direção: row (→ horizontal, padrão) ou column (↓ vertical)',
          'justify-content — distribui os itens no eixo principal: flex-start, center, flex-end, space-between…',
          'align-items — alinha os itens no eixo cruzado: stretch (padrão, ocupa toda a altura), center, flex-start…',
          'flex-wrap: wrap — permite que os itens quebrem para a próxima linha quando não há espaço',
          'gap — espaço entre os itens, sem precisar de margin em cada filho',
        ],
        code: `.container {
  display: flex;            /* ativa o Flexbox       */
  flex-direction: row;      /* → direção horizontal  */
  justify-content: flex-start; /* itens no início    */
  align-items: stretch;     /* ocupa toda a altura   */
  flex-wrap: nowrap;        /* sem quebra de linha   */
  gap: 16px;                /* 16px entre os itens   */
}`,
        codeLanguage: 'css',
      },
    },
    {
      id: 4,
      layout: 'animated-demo',
      title: 'Flexbox na Prática — Playground',
      content: {
        heading: 'Mexa nos controles e veja as caixas se moverem',
        animationType: 'flexbox-playground',
        description: 'Altere flex-direction, justify-content, align-items, wrap e gap. O CSS gerado aparece embaixo em tempo real.',
      },
    },
    {
      id: 5,
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
      id: 6,
      layout: 'two-column',
      title: 'CSS Grid — Layout em Duas Dimensões',
      content: {
        heading: 'Linhas e colunas ao mesmo tempo — ideal para layouts de página',
        text: [
          'display: grid — ativa o Grid no elemento pai; os filhos se posicionam nas células automaticamente',
          'grid-template-columns — define o número e o tamanho das colunas: repeat(3, 1fr) cria 3 colunas iguais',
          'fr (fraction) — unidade proporcional que divide o espaço disponível: 1fr 2fr dá 1/3 e 2/3',
          'gap — espaço entre linhas e colunas ao mesmo tempo, sem margin nos filhos',
          'auto-fit + minmax() — cria colunas responsivas sem media query: os itens se ajustam ao tamanho da tela',
        ],
        code: `.galeria {
  display: grid;               /* ativa o Grid          */
  grid-template-columns:
    repeat(3, 1fr);            /* 3 colunas iguais      */
  gap: 16px;                   /* espaço entre células  */
}

/* Responsivo sem media query: */
.galeria-auto {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  /* cada coluna tem no mínimo 200px
     e cresce para preencher o espaço */
}`,
        codeLanguage: 'css',
      },
    },
    {
      id: 7,
      layout: 'animated-demo',
      title: 'CSS Grid na Prática — Playground',
      content: {
        heading: 'Controle colunas, espaçamento e número de itens',
        animationType: 'grid-playground',
        description: 'Ajuste o número de colunas, o gap e a quantidade de itens para ver como o Grid reorganiza tudo automaticamente.',
      },
    },
    {
      id: 8,
      layout: 'cards',
      title: 'Cores, Fontes e CSS Moderno',
      content: {
        heading: 'Toques que deixam o site profissional',
        items: [
          {
            icon: 'FaPalette',
            title: 'Cores',
            description: 'Use hex (#4f46e5), rgb() ou a moderna oklch() para cores vivas e consistentes.',
          },
          {
            icon: 'FaFont',
            title: 'Fontes e rem',
            description: 'Prefira rem para tamanhos que respeitam a preferência do usuário. Importe fontes do Google Fonts.',
          },
          {
            icon: 'FaBrush',
            title: 'clamp() responsivo',
            description: 'font-size: clamp(1rem, 2vw, 2rem) cresce com a tela sem media query.',
          },
          {
            icon: 'FaKey',
            title: ':focus-visible',
            description: 'Mostra o contorno de foco só para quem usa teclado — acessibilidade moderna.',
          },
        ],
      },
    },
    {
      id: 9,
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
          'Montar uma galeria de cards com CSS Grid (auto-fit)',
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
  summary: 'Módulo rápido: navegue pelo sistema de arquivos e execute comandos como um dev.',
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
/Users/aluno/Documents

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

const jsIntroModule: Module = {
  id: 'dia-2/javascript-introducao',
  day: 2,
  title: 'Introdução ao JavaScript',
  summary: 'Recap do Dia 1 com a metáfora da casa, primeiros scripts JS e interações com o usuário e a página.',
  tags: ['JavaScript', 'Introdução', 'HTML', 'CSS'],
  icon: 'FaJs',
  topics: [
    'Recap: HTML (estrutura), CSS (estilo) e JS (ações) — a metáfora da casa',
    'O que é JavaScript e onde ele roda',
    'Integrando JS no HTML com a tag <script>',
    'Arquivo JS externo — criar e linkar no HTML',
    'Funções em JavaScript e o evento onclick',
    'console.log() — depurando no DevTools',
    'Interação com o usuário: alert(), prompt() e confirm()',
    'Interação com a página: getElementById() e innerHTML',
  ],
  exercises: [
    {
      label: 'Tarefa 1 — Olá, Mundo! (script inline)',
      steps: [
        'Crie uma pasta <code>ex001</code> com um arquivo <code>index.html</code> dentro',
        'Adicione a estrutura base do HTML (<code>!</code> + Enter no VS Code)',
        'Antes do <code>&lt;/body&gt;</code>, adicione: <code>&lt;script&gt;window.alert(\'Olá, Mundo!\')&lt;/script&gt;</code>',
        'Abra o arquivo no navegador e veja o alerta aparecer',
        'Se não funcionar, abra o DevTools (<code>F12</code>) → aba <strong>Console</strong> e leia o erro',
      ],
    },
    {
      label: 'Tarefa 2 — Arquivo JS Externo',
      steps: [
        'Na mesma pasta <code>ex001</code>, crie um arquivo chamado <code>scripts.js</code>',
        'Dentro de <code>scripts.js</code>, escreva: <code>console.log(\'Script carregado!\')</code>',
        'No <code>index.html</code>, substitua o <code>&lt;script&gt;</code> inline por: <code>&lt;script src="scripts.js"&gt;&lt;/script&gt;</code>',
        'Recarregue o navegador, abra o DevTools (<code>F12</code>) → aba <strong>Console</strong> e veja a mensagem aparecer',
      ],
    },
    {
      label: 'Tarefa 3 — Interação com o Usuário',
      steps: [
        'Crie uma pasta <code>ex002</code> com <code>index.html</code> e <code>scripts.js</code>',
        'No HTML, crie um botão: <code>&lt;button onclick="inicio()"&gt;Clique em mim!&lt;/button&gt;</code>',
        'No <code>scripts.js</code>, escreva: <code>function inicio() { window.alert(\'Você clicou!\') }</code>',
        'Carregue no navegador e clique no botão para testar',
        'Modifique a função para pedir o nome com <code>prompt()</code> e exibir com <code>alert()</code>',
      ],
    },
    {
      label: 'Tarefa 4 — Resultado na Página',
      steps: [
        'Crie uma pasta <code>ex003</code> com <code>index.html</code> e <code>scripts.js</code>',
        'No HTML, adicione: <code>&lt;section id="resultado"&gt;&lt;p&gt;Aqui vai aparecer o resultado...&lt;/p&gt;&lt;/section&gt;</code>',
        'Conecte um botão ao HTML com <code>onclick="inicio()"</code>',
        'No <code>scripts.js</code>, escreva a função <code>inicio()</code>',
        'Dentro da função, capture o elemento: <code>let res = document.getElementById(\'resultado\')</code>',
        'Altere o conteúdo: <code>res.innerHTML = \'&lt;p&gt;Olá! Seja bem-vindo!&lt;/p&gt;\'</code>',
      ],
    },
  ],
  slides: [
    {
      id: 1,
      layout: 'cover',
      title: 'Introdução ao JavaScript',
      content: {
        badge: 'DIA 2 · INTRODUÇÃO AO JS',
        subtitle: 'Da estrutura e estilo... à interatividade. Vamos colocar vida nas suas páginas!',
      },
    },
    {
      id: 2,
      layout: 'two-column',
      title: 'A Tríade da Web — A Metáfora da Casa',
      content: {
        heading: 'HTML, CSS e JS têm papéis bem definidos',
        text: [
          '🏗️ HTML é a estrutura — paredes, portas e janelas da casa',
          '🎨 CSS é a pintura — cores, decoração e o estilo de cada ambiente',
          '⚡ JavaScript são as ações — a tomada que liga, a porta que abre',
        ],
        image: {
          src: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 520 340' width='520' height='340' font-family='sans-serif'><rect width='520' height='340' fill='%230f172a'/><rect x='120' y='170' width='280' height='140' fill='%231e293b' stroke='%234f46e5' stroke-width='2.5'/><polygon points='100,170 260,70 420,170' fill='%23334155' stroke='%234f46e5' stroke-width='2.5'/><rect x='215' y='220' width='90' height='90' fill='%23475569' stroke='%236366f1' stroke-width='1.5'/><circle cx='298' cy='268' r='5' fill='%23fbbf24'/><rect x='140' y='195' width='55' height='45' fill='%230ea5e9' opacity='0.6' stroke='%236366f1' stroke-width='1'/><rect x='325' y='195' width='55' height='45' fill='%230ea5e9' opacity='0.6' stroke='%236366f1' stroke-width='1'/><text x='260' y='50' fill='%236366f1' font-size='12' text-anchor='middle' font-weight='bold'>HTML</text><text x='260' y='65' fill='%2394a3b8' font-size='10' text-anchor='middle'>estrutura</text><line x1='260' y1='68' x2='260' y2='88' stroke='%236366f1' stroke-width='1.5' stroke-dasharray='3,2'/><text x='58' y='208' fill='%2310b981' font-size='12' text-anchor='middle' font-weight='bold'>CSS</text><text x='58' y='223' fill='%2394a3b8' font-size='10' text-anchor='middle'>estilo</text><line x1='93' y1='208' x2='118' y2='200' stroke='%2310b981' stroke-width='1.5' stroke-dasharray='3,2'/><text x='462' y='208' fill='%23f59e0b' font-size='12' text-anchor='middle' font-weight='bold'>JS</text><text x='462' y='223' fill='%2394a3b8' font-size='10' text-anchor='middle'>ações</text><line x1='427' y1='263' x2='407' y2='263' stroke='%23f59e0b' stroke-width='1.5' stroke-dasharray='3,2'/><polygon points='455,238 448,263 453,263 446,283 460,255 455,255' fill='%23f59e0b' opacity='0.9'/></svg>`,
          srcLight: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 520 340' width='520' height='340' font-family='sans-serif'><rect x='120' y='170' width='280' height='140' fill='%23ede9fe' stroke='%234f46e5' stroke-width='2.5'/><polygon points='100,170 260,70 420,170' fill='%23ddd6fe' stroke='%234f46e5' stroke-width='2.5'/><rect x='215' y='220' width='90' height='90' fill='%23c7d2fe' stroke='%234f46e5' stroke-width='1.5'/><circle cx='298' cy='268' r='5' fill='%23d97706'/><rect x='140' y='195' width='55' height='45' fill='%2393c5fd' opacity='0.8' stroke='%234f46e5' stroke-width='1'/><rect x='325' y='195' width='55' height='45' fill='%2393c5fd' opacity='0.8' stroke='%234f46e5' stroke-width='1'/><text x='260' y='50' fill='%234f46e5' font-size='12' text-anchor='middle' font-weight='bold'>HTML</text><text x='260' y='65' fill='%2364748b' font-size='10' text-anchor='middle'>estrutura</text><line x1='260' y1='68' x2='260' y2='88' stroke='%234f46e5' stroke-width='1.5' stroke-dasharray='3,2'/><text x='58' y='208' fill='%23059669' font-size='12' text-anchor='middle' font-weight='bold'>CSS</text><text x='58' y='223' fill='%2364748b' font-size='10' text-anchor='middle'>estilo</text><line x1='93' y1='208' x2='118' y2='200' stroke='%23059669' stroke-width='1.5' stroke-dasharray='3,2'/><text x='462' y='208' fill='%23d97706' font-size='12' text-anchor='middle' font-weight='bold'>JS</text><text x='462' y='223' fill='%2364748b' font-size='10' text-anchor='middle'>ações</text><line x1='427' y1='263' x2='407' y2='263' stroke='%23d97706' stroke-width='1.5' stroke-dasharray='3,2'/><polygon points='455,238 448,263 453,263 446,283 460,255 455,255' fill='%23d97706' opacity='0.9'/></svg>`,
          alt: 'Casa representando a tríade: HTML é a estrutura, CSS é o estilo, JS são as ações',
        },
      },
    },
    {
      id: 3,
      layout: 'cards',
      title: 'Recap — HTML',
      content: {
        heading: 'O que aprendemos no Dia 1',
        items: [
          {
            icon: 'FaHtml5',
            title: 'Estrutura Base',
            description: '<!DOCTYPE html>, <html>, <head> e <body> — o esqueleto de toda página.',
          },
          {
            icon: 'FaCode',
            title: 'Tags Principais',
            description: 'h1–h6, p, a, img, ul/li, div, section, button — os blocos de conteúdo.',
          },
          {
            icon: 'FaLayerGroup',
            title: 'Atributos',
            description: 'id, class, href, src, alt — informações extras que damos às tags.',
          },
        ],
      },
    },
    {
      id: 4,
      layout: 'cards',
      title: 'Recap — CSS',
      content: {
        heading: 'Estilo e layout que aprendemos',
        items: [
          {
            icon: 'FaCss3Alt',
            title: 'Seletores',
            description: 'Por tag (p), por classe (.destaque) e por id (#topo) — como mirar um elemento.',
          },
          {
            icon: 'FaCompass',
            title: 'Box Model',
            description: 'margin (fora), border (borda) e padding (dentro) — todo elemento é uma caixa.',
          },
          {
            icon: 'FaPalette',
            title: 'Cores & Fontes',
            description: 'color, background-color, font-family, font-size — a identidade visual da página.',
          },
        ],
      },
    },
    {
      id: 5,
      layout: 'two-column',
      title: 'O que é JavaScript?',
      content: {
        heading: 'A linguagem que dá vida à página',
        text: [
          'JavaScript roda diretamente no navegador — sem instalar nada',
          'Também pode rodar no servidor com Node.js',
          'É a única linguagem de programação nativa da web',
          'Controla comportamentos: reage a cliques, valida dados, atualiza a tela',
        ],
        code: `// Teste agora! Abra o DevTools (F12) → Console:

console.log("Olá, mundo!")        // imprime no Console
console.log(1 + 1)                // 2
console.log(typeof "texto")       // "string"`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 6,
      layout: 'two-column',
      title: 'Integrando JS no HTML',
      content: {
        heading: 'Duas formas de adicionar JavaScript',
        text: [
          'Inline: tag <script> dentro do próprio HTML, acima do </body>',
          'Externo: arquivo .js separado, linkado com src="scripts.js"',
          'Prefira o arquivo externo — mais organizado e reutilizável',
          'O navegador lê o JS na ordem — coloque sempre no fim do body',
        ],
        code: `<!-- ① Inline (para testes rápidos) -->
<body>
  <h1>Minha Página</h1>
  <script>
    window.alert('Olá, Mundo!')
  </script>
</body>

<!-- ② Arquivo externo (recomendado) -->
<body>
  <h1>Minha Página</h1>
  <script src="scripts.js"></script>
</body>`,
        codeLanguage: 'html',
      },
    },
    {
      id: 7,
      layout: 'two-column',
      title: 'Funções em JavaScript',
      content: {
        heading: 'Agrupando comandos com function',
        text: [
          'function define um bloco de código reutilizável',
          'O bloco fica entre chaves { } e só roda quando chamado',
          'onclick="nomeDaFuncao()" dispara a função ao clicar no botão',
          'Os parênteses () são obrigatórios na definição e na chamada',
        ],
        code: `<!-- HTML: botão chama a função ao ser clicado -->
<button onclick="clicou()">Clica em mim!</button>
<script src="scripts.js"></script>

// scripts.js
function clicou() {
  window.alert('Você clicou no botão!')
}`,
        codeLanguage: 'html',
      },
    },
    {
      id: 8,
      layout: 'two-column',
      title: 'console.log() — Seu Melhor Amigo',
      content: {
        heading: 'Depurando com o Console do DevTools',
        text: [
          'console.log() imprime qualquer valor no Console (F12)',
          'Use para verificar se um valor chegou como esperado',
          'O console mostra erros em vermelho com a linha do problema',
          'Abra sempre o DevTools enquanto desenvolve — é sua lanterna!',
        ],
        code: `// scripts.js
function inicio() {
  console.log("Função inicio() foi chamada!")

  let nome = window.prompt("Qual é o seu nome?")
  console.log("Nome recebido:", nome)

  window.alert("Olá, " + nome + "!")
}

// No Console você verá:
// → Função inicio() foi chamada!
// → Nome recebido: Ana`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 9,
      layout: 'two-column',
      title: 'Interação com o Usuário',
      content: {
        heading: 'alert, prompt e confirm',
        text: [
          'alert() abre uma janelinha com uma mensagem',
          'prompt() pede um dado e devolve o texto digitado',
          'confirm() faz uma pergunta de sim/não — devolve true ou false',
          'window. é opcional: alert() e window.alert() são idênticos',
        ],
        code: `function inicio() {
  // Exibir uma mensagem
  alert("Bem-vindo ao curso!")

  // Pedir um dado ao usuário
  let nome = prompt("Qual é o seu nome?")
  alert("Olá, " + nome + "!")

  // Pergunta de sim ou não
  let certeza = confirm("Deseja continuar?")
  if (certeza) {
    alert("Ótimo! Vamos lá!")
  }
}`,
        codeLanguage: 'javascript',
      },
    },
    {
      id: 10,
      layout: 'two-column',
      title: 'Interação com a Página',
      content: {
        heading: 'Mudando elementos do HTML com JS',
        text: [
          'getElementById("id") captura um elemento pelo atributo id',
          '.innerHTML = "..." substitui o conteúdo dentro do elemento',
          '.innerHTML += "..." acumula — adiciona sem apagar o que tinha',
          'O id no HTML é a "porta" que o JS usa para entrar',
        ],
        code: `<!-- HTML -->
<section id="resultado">
  <p>Aqui vai aparecer o resultado...</p>
</section>

// scripts.js
function inicio() {
  let nome = prompt("Qual é o seu nome?")

  let res = document.getElementById("resultado")
  res.innerHTML = "<p>Olá, <strong>" + nome + "</strong>!</p>"
}`,
        codeLanguage: 'html',
      },
    },
    {
      id: 11,
      layout: 'checklist',
      title: 'Tarefas em Aula',
      content: {
        heading: 'Coloque em prática agora!',
        items: [
          'Tarefa 1: criar index.html e exibir window.alert("Olá, Mundo!") com <script> inline',
          'Tarefa 2: criar scripts.js, adicionar console.log e linkar com <script src="scripts.js">',
          'Tarefa 2: abrir DevTools (F12) → Console e confirmar a mensagem impressa',
          'Tarefa 3: criar botão com onclick e função que usa prompt() + alert()',
          'Tarefa 4: adicionar <section id="resultado"> e atualizar innerHTML com o nome digitado',
          'Extra: usar console.log() dentro das funções para ver os valores em tempo real',
        ],
      },
    },
  ],
}

const jsVariaveisModule: Module = {
  id: 'dia-2/javascript-variaveis',
  day: 2,
  title: 'JavaScript — Variáveis & Tipos',
  summary: 'Entenda como armazenar e manipular dados com JavaScript moderno.',
  tags: ['JavaScript', 'Variáveis', 'Tipos'],
  icon: 'FaJs',
  topics: [
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
      label: 'Desafio — Ficha de Jogador (RPG)',
      description: 'Você foi contratado para criar a estrutura inicial de um jogo de RPG no navegador. Armazene as informações básicas do herói antes da partida começar.',
      steps: [
        'Crie um objeto <code>heroi</code> usando <code>const</code>',
        'Dentro do objeto adicione: <strong>nome</strong> (String), <strong>nivel</strong> (Number, valor 1), <strong>hp</strong> (Number, valor 100), <strong>inventario</strong> (Array com 3 itens), <strong>estaVivo</strong> (Boolean, <code>true</code>)',
        'O herói encontrou um baú! Use <code>.push()</code> para adicionar <code>"anel magico"</code> no <strong>inventario</strong>',
        'Exiba no console usando template literal: <code>`O heroi [nome] esta nivel [nivel] e possui [quantidade] itens no inventario!`</code>',
        'Dica: use <code>.length</code> para descobrir a quantidade de itens',
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
      label: 'Desafio — Sistema de Validação de Evento Tech',
      description: 'Um site precisa validar se um usuário pode entrar na área VIP de um evento de tecnologia. O sistema de regras é rigoroso.',
      steps: [
        'Crie as variáveis com <code>let</code>: <code>idade = 17</code>, <code>possuiConvite = true</code>, <code>estaAcompanhadoResponsavel = true</code>',
        '<strong>Regra 1:</strong> se tiver 18+ anos <strong>E</strong> possuir convite → exibir <code>"Acesso VIP Liberado!"</code>',
        '<strong>Regra 2:</strong> se for menor de 18, mas tiver convite <strong>E</strong> acompanhante responsável → exibir <code>"Acesso Liberado com Acompanhante!"</code>',
        '<strong>Regra 3:</strong> se tiver convite mas não cumprir as regras anteriores → exibir <code>"Acesso Negado: Necessário acompanhante maior de idade."</code>',
        '<strong>Regra 4:</strong> se não tiver convite → exibir <code>"Acesso Negado: Convite inválido ou ausente."</code>',
        'Altere os valores das variáveis para simular diferentes clientes e veja o resultado no console!',
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
      label: 'Desafio — Detector de Fraude no Carrinho de Compras',
      description: 'Em um e-commerce, o sistema precisa somar os valores das compras do cliente e identificar itens com valor suspeito ou zerado.',
      steps: [
        'Crie o array de preços: <code>const precos = [15, 30, 0, 45, 120, 200]</code>',
        'Crie a variável acumuladora: <code>let total = 0</code> (lembre-se: <code>const</code> não pode ser reatribuída, use <code>let</code>)',
        'Use um loop <code>for...of</code> para percorrer a lista de <code>precos</code>',
        'Dentro do loop: se o preço for <code>=== 0</code>, exibir <code>"Aviso: item gratuito ou com erro"</code> e usar <code>continue</code> para não somar',
        'Dentro do loop: se o preço for <code>&gt; 100</code>, exibir <code>`Item de alto valor encontrado: R$ [preco]`</code>',
        'Para todos os itens válidos, some o valor com <code>total += preco</code>',
        'Fora do loop, exiba: <code>`O valor total da compra é: R$ [total]`</code>',
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
      url: 'https://github.com/thalisses/meu-primeiro-site',
      description: 'Acesse o repositório, abra um Codespace e use o Copilot para gerar sua página.',
      steps: [
        'Acesse o repositório do projeto (link acima) e clique em "fork"',
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
  introducaoModule,
  htmlModule,
  cssModule,
  terminalModule,
  jsIntroModule,
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
