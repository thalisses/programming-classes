import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml'
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css'
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import type { TwoColumnContent } from '../../../types'

SyntaxHighlighter.registerLanguage('javascript', js)
SyntaxHighlighter.registerLanguage('html', html)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('bash', bash)

interface TwoColumnSlideProps {
  title: string
  content: TwoColumnContent
}

export default function TwoColumnSlide({ title, content }: TwoColumnSlideProps) {
  return (
    <div className="w-full h-full flex flex-col bg-bg-base p-10 gap-6">
      <div>
        <h2 className="font-heading font-bold text-text-primary text-3xl">{title}</h2>
        <p className="text-accent-indigo font-semibold text-lg mt-1">{content.heading}</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
        {/* Left: text bullets */}
        <div className="flex flex-col justify-center gap-3">
          {content.text.map((line, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-indigo shrink-0" />
              <p className="text-text-primary text-base leading-relaxed">{line}</p>
            </div>
          ))}
        </div>

        {/* Right: code */}
        <div className="rounded-xl overflow-hidden text-sm min-h-0">
          <SyntaxHighlighter
            language={content.codeLanguage}
            style={atomOneDark}
            customStyle={{
              height: '100%',
              margin: 0,
              borderRadius: '12px',
              fontSize: '13px',
              lineHeight: '1.6',
              padding: '20px',
            }}
            showLineNumbers
          >
            {content.code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
