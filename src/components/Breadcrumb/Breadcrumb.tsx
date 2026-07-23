import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa6'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
      <Link
        to="/"
        className="flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors"
      >
        <FaChevronLeft className="text-xs" />
        Voltar aos Módulos
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="text-bg-card-alt">/</span>
          {item.href ? (
            <Link to={item.href} className="hover:text-text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-text-primary">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
