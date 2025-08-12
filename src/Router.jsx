import { Route, Routes } from 'react-router-dom'
import Header from './components/header.component.jsx'
import About from './pages/about.page.jsx'
import Contact from './pages/contact.page.jsx'
import Home from './pages/home.page'
import NotFoundPage from './pages/notFound.page.jsx'

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
