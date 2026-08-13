import {
  FaHeading, FaAlignLeft, FaLink, FaImage, FaPlus, FaCheck, FaUpload,
  FaDownload, FaHashtag, FaArrowsRotate, FaKey, FaWandMagicSparkles, FaCommentDots,
  FaMagnifyingGlass, FaBug, FaMoneyBill, FaBolt, FaLock, FaPlay, FaCode,
  FaHtml5, FaCss3Alt, FaJs, FaTerminal, FaGithub, FaGlobe, FaRobot,
  FaPalette, FaFont, FaListUl, FaVideo, FaTableCells, FaLayerGroup,
  FaRocket, FaCompass, FaCircleInfo, FaKeyboard, FaBrush,
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
  FaCode: <FaCode />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJs: <FaJs />,
  FaTerminal: <FaTerminal />,
  FaGithub: <FaGithub />,
  FaGlobe: <FaGlobe />,
  FaRobot: <FaRobot />,
  FaPalette: <FaPalette />,
  FaFont: <FaFont />,
  FaListUl: <FaListUl />,
  FaVideo: <FaVideo />,
  FaTableCells: <FaTableCells />,
  FaLayerGroup: <FaLayerGroup />,
  FaRocket: <FaRocket />,
  FaCompass: <FaCompass />,
  FaCircleInfo: <FaCircleInfo />,
  FaKeyboard: <FaKeyboard />,
  FaBrush: <FaBrush />,
}

interface CardsSlideProps {
  title: string
  content: CardsContent
}

export default function CardsSlide({ title, content }: CardsSlideProps) {
  return (
    <div className="w-full h-full flex flex-col bg-bg-base p-8 gap-5">
      <div>
        <h2 className="font-heading font-bold text-text-primary text-[38px]">{title}</h2>
        <p className="text-accent-indigo font-semibold text-[24px] mt-1">{content.heading}</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-4">
        {content.items.map((item, i) => (
          <div
            key={i}
            className="bg-bg-card border border-bg-card-alt rounded-2xl p-5 flex gap-3 items-start hover:border-accent-indigo/40 transition-colors"
          >
            <div className="w-12 h-12 bg-accent-indigo/20 text-accent-indigo rounded-xl flex items-center justify-center text-[30px] shrink-0">
              {ICON_MAP[item.icon] ?? <FaPlay />}
            </div>
            <div>
              <h3 className="font-heading font-semibold text-text-primary text-[26px] mb-1">
                {item.title}
              </h3>
              <p className="text-text-muted text-[24px] leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
