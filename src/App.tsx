import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import ThemeProvider from './context/ThemeProvider'
import Dashboard from './pages/Dashboard'
import ModulePage from './pages/ModulePage'
import SlidesPage from './pages/SlidesPage'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dia/:day/:moduleSlug" element={<ModulePage />} />
          <Route path="/dia/:day/:moduleSlug/slides" element={<SlidesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
