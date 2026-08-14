import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml'
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css'
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import type { TwoColumnContent } from '../../../types'
import { useTheme } from '../../../hooks/useTheme'

SyntaxHighlighter.registerLanguage('javascript', js)
SyntaxHighlighter.registerLanguage('html', html)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('bash', bash)

interface TwoColumnSlideProps {
  title: string
  content: TwoColumnContent
}

function buildCodeSections(code: string, language?: string | string[]) {
  const normalizedLanguages = Array.isArray(language)
    ? language
    : language
      ? [language]
      : ['javascript']

  if (normalizedLanguages.length > 1) {
    return normalizedLanguages.map((lang, index) => ({
      language: lang,
      code: index === 0 ? code.split(/\n\s*\n\/\/ scripts\.js\s*\n/)[0]?.trim() ?? code : `// scripts.js\n${code.split(/\n\s*\n\/\/ scripts\.js\s*\n/)[1]?.trim() ?? code}`,
    }))
  }

  const hasHtmlAndJs = code.includes('<!--') && code.includes('// scripts.js')
  const hasHtmlAndJsAlt = code.includes('<section id="resultado">') && code.includes('// scripts.js')

  if (hasHtmlAndJs || hasHtmlAndJsAlt) {
    const [htmlPart, jsPart] = code.split(/\n\s*\n\/\/ scripts\.js\s*\n/)
    return [
      { language: 'html', code: htmlPart.trim() },
      { language: 'javascript', code: `// scripts.js\n${jsPart.trim()}` },
    ]
  }

  return [{ language: normalizedLanguages[0], code }]
}

export default function TwoColumnSlide({ title, content }: TwoColumnSlideProps) {
  const { theme } = useTheme()
  const imgSrc = content.image?.srcLight && theme === 'light'
    ? content.image.srcLight
    : content.image?.src
  const codeTheme = theme === 'light' ? atomOneLight : atomOneDark
  const codeSections = buildCodeSections(content.code ?? '', content.codeLanguage)

  return (
    <div className="w-full h-full flex flex-col bg-bg-base p-8 gap-5">
      <div>
        <h2 className="font-heading font-bold text-text-primary text-[38px]">{title}</h2>
        <p className="text-accent-indigo font-semibold text-[24px] mt-1">{content.heading}</p>
      </div>

      <div className="flex-1 grid grid-cols-[1fr_1.45fr] gap-5 min-h-0">
        {/* Left: text bullets */}
        <div className="flex flex-col justify-center gap-4">
          {content.text.map((line, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="mt-[17px] w-2.5 h-2.5 rounded-full bg-accent-indigo shrink-0" />
              <p className="text-text-primary text-[24px] leading-relaxed">{line}</p>
            </div>
          ))}
        </div>

        {/* Right: code or illustration */}
        {content.image ? (
          <div className="flex items-center justify-center rounded-xl bg-bg-card border border-bg-card-alt p-6 min-h-0 h-full">
            <img
              src={imgSrc}
              alt={content.image!.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ) : (
          <div className="rounded-xl overflow-hidden text-[24px] min-h-0 h-full">
            {codeSections.length > 1 ? (
              <div className="flex flex-col gap-3 h-full">
                {codeSections.map((section, index) => (
                  <div key={`${section.language}-${index}`} className="flex-1 min-h-0 rounded-xl overflow-hidden">
                    <SyntaxHighlighter
                      language={section.language}
                      style={codeTheme}
                      customStyle={{
                        height: '100%',
                        minHeight: '100%',
                        margin: 0,
                        borderRadius: '12px',
                        fontSize: '24px',
                        lineHeight: '1.8',
                        padding: '28px',
                        background: theme === 'light' ? '#f8fafc' : '#0f172a',
                        border: `1px solid ${theme === 'light' ? '#cbd5e1' : '#334155'}`,
                        color: theme === 'light' ? '#0f172a' : '#f1f5f9',
                      }}
                      showLineNumbers
                    >
                      {section.code}
                    </SyntaxHighlighter>
                  </div>
                ))}
              </div>
            ) : (
              <SyntaxHighlighter
                language={codeSections[0].language}
                style={codeTheme}
                customStyle={{
                  height: '100%',
                  minHeight: '100%',
                  margin: 0,
                  borderRadius: '12px',
                  fontSize: '24px',
                  lineHeight: '1.8',
                  padding: '28px',
                  background: theme === 'light' ? '#f8fafc' : '#0f172a',
                  border: `1px solid ${theme === 'light' ? '#cbd5e1' : '#334155'}`,
                  color: theme === 'light' ? '#0f172a' : '#f1f5f9',
                }}
                showLineNumbers
              >
                {codeSections[0].code}
              </SyntaxHighlighter>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
