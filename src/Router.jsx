import { Route, Routes } from 'react-router-dom'
import About from './pages/about.page.jsx'
import Contact from './pages/contact.page.jsx'
import Home from './pages/home.page'
import NotFoundPage from './pages/notFound.page.jsx'
import Timeline from './pages/timeline.page.jsx'

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
