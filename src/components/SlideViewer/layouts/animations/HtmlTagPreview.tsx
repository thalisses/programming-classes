import { useState } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './HtmlTagPreview.css'

SyntaxHighlighter.registerLanguage('html', html)

// Imagem em SVG inline (data URI) para não depender de rede.
const IMG_SRC =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='120'><rect width='100%25' height='100%25' fill='%234f46e5'/><text x='50%25' y='50%25' fill='white' font-family='sans-serif' font-size='20' text-anchor='middle' dy='.35em'>Foto</text></svg>"

// Exemplos ESTÁTICOS definidos pelo autor (nunca vêm do usuário/URL) — seguro renderizar.
const EXAMPLES: { id: string; label: string; code: string }[] = [
  {
    id: 'titulos',
    label: 'Títulos',
    code: `<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Seção menor</h3>
<p>Use h1 a h6 para criar hierarquia.</p>`,
  },
  {
    id: 'texto',
    label: 'Texto',
    code: `<p>Texto com <strong>negrito</strong> e
<em>itálico</em>.</p>
<p>Um <mark>destaque</mark> e uma
<a href="#">ligação</a>.</p>
<blockquote>Uma citação famosa.</blockquote>`,
  },
  {
    id: 'listas',
    label: 'Listas',
    code: `<ul>
  <li>Item não-ordenado</li>
  <li>Outro item</li>
</ul>
<ol>
  <li>Primeiro passo</li>
  <li>Segundo passo</li>
</ol>`,
  },
  {
    id: 'link',
    label: 'Link',
    code: `<p>
  <a href="https://developer.mozilla.org"
     target="_blank"
     rel="noopener noreferrer">
    Abrir documentação em nova aba
  </a>
</p>

<p>
  <a href="#formulario">Ir para o formulário da página</a>
</p>

<section id="formulario">
  <strong>Destino do link interno (#formulario)</strong>
</section>`,
  },
  {
    id: 'imagem',
    label: 'Imagem',
    code: `<figure>
  <img src="${IMG_SRC}"
       alt="Bloco azul com texto Foto"
       width="260"
       loading="lazy"
       decoding="async">
  <figcaption>
    Exemplo de img com alt, width e loading.
  </figcaption>
</figure>`,
  },
  {
    id: 'tabela',
    label: 'Tabela',
    code: `<table>
  <thead>
    <tr><th>Nome</th><th>Idade</th></tr>
  </thead>
  <tbody>
    <tr><td>Ana</td><td>20</td></tr>
    <tr><td>Bruno</td><td>25</td></tr>
  </tbody>
</table>`,
  },
  {
    id: 'form',
    label: 'Formulário',
    code: `<form>
  <label for="nome">Nome</label>
  <input id="nome" type="text"
         placeholder="Seu nome">
  <label for="msg">Mensagem</label>
  <textarea id="msg" rows="2"></textarea>
  <button type="button">Enviar</button>
</form>`,
  },
  {
    id: 'semanticas',
    label: 'Semânticas',
    code: `<header><h2>Cabeçalho</h2></header>
<nav>Menu · Início · Sobre</nav>
<main>
  <article>Conteúdo principal</article>
</main>
<footer>Rodapé do site</footer>`,
  },
]

export default function HtmlTagPreview() {
  const [selected, setSelected] = useState(0)
  const example = EXAMPLES[selected]

  return (
    <div className="w-full h-full flex flex-col gap-3">
      {/* Tag selector */}
      <div className="flex flex-wrap gap-1.5">
        {EXAMPLES.map((ex, i) => {
          const active = i === selected
          return (
            <button
              key={ex.id}
              type="button"
              onClick={() => setSelected(i)}
              className={`rounded-lg px-3 py-1 font-code text-[24px] transition-colors ${
                active
                  ? 'bg-accent-indigo text-white'
                  : 'bg-bg-card text-text-muted hover:bg-bg-card-alt'
              }`}
            >
              {ex.label}
            </button>
          )
        })}
      </div>

      {/* Code + live render */}
      <div className="flex-1 grid grid-cols-[1.6fr_0.9fr] gap-4 min-h-0">
        <div className="rounded-xl overflow-hidden min-h-0 h-full">
          <SyntaxHighlighter
            language="html"
            style={atomOneDark}
            customStyle={{
              height: '100%',
              minHeight: '100%',
              margin: 0,
              borderRadius: '12px',
              fontSize: '27px',
              lineHeight: '1.8',
              padding: '26px',
            }}
          >
            {example.code}
          </SyntaxHighlighter>
        </div>

        <div className="flex flex-col min-h-0 h-full">
          <span className="font-code text-[24px] text-text-muted mb-1">resultado no navegador ↓</span>
          {/* Conteúdo estático e literal deste arquivo (sem dados do usuário) — sem risco de XSS. */}
          <div
            className="html-preview flex-1 min-h-0"
            dangerouslySetInnerHTML={{ __html: example.code }}
          />
        </div>
      </div>
    </div>
  )
}
