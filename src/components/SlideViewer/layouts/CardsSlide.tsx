import {
  FaHeading, FaAlignLeft, FaLink, FaImage, FaPlus, FaCheck, FaUpload,
  FaDownload, FaHashtag, FaArrowsRotate, FaKey, FaWandMagicSparkles, FaCommentDots,
  FaMagnifyingGlass, FaBug, FaMoneyBill, FaBolt, FaLock, FaPlay, FaCode,
} from 'react-icons/fa6'
import type { CardsContent } from '../../../types'

const ICON_MAP: Record<string, React.ReactNode> = {
  FaHeading: <FaHeading />,
  FaAlignLeft: <FaAlignLeft />,
  FaLink: <FaLink />,
  FaImage: <FaImage />,
  FaPlus: <FaPlus />,
  FaCheck: <FaCheck />,
  FaUpload: <FaUpload />,
  FaDownload: <FaDownload />,
  FaHashtag: <FaHashtag />,
  FaArrowsRotate: <FaArrowsRotate />,
  FaKey: <FaKey />,
  FaFunctionSymbol: <FaCode />,
  FaMagic: <FaWandMagicSparkles />,
  FaCommentDots: <FaCommentDots />,
  FaSearch: <FaMagnifyingGlass />,
  FaBug: <FaBug />,
  FaMoneyBill: <FaMoneyBill />,
  FaBolt: <FaBolt />,
  FaLock: <FaLock />,
}

interface CardsSlideProps {
  title: string
  content: CardsContent
}

export default function CardsSlide({ title, content }: CardsSlideProps) {
  return (
    <div className="w-full h-full flex flex-col bg-bg-base p-10 gap-6">
      <div>
        <h2 className="font-heading font-bold text-text-primary text-3xl">{title}</h2>
        <p className="text-accent-indigo font-semibold text-lg mt-1">{content.heading}</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-5">
        {content.items.map((item, i) => (
          <div
            key={i}
            className="bg-bg-card border border-bg-card-alt rounded-2xl p-6 flex gap-4 items-start hover:border-accent-indigo/40 transition-colors"
          >
            <div className="w-11 h-11 bg-accent-indigo/20 text-accent-indigo rounded-xl flex items-center justify-center text-xl shrink-0">
              {ICON_MAP[item.icon] ?? <FaPlay />}
            </div>
            <div>
              <h3 className="font-heading font-semibold text-text-primary text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
