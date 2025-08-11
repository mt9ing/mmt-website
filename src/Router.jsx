import { Route, Routes } from 'react-router-dom'
import Header from './components/header.component.jsx'
import Home from './pages/home.page'
import NotFoundPage from './pages/notFound.page.jsx'

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<NotFoundPage />} /> */}
        {/* Add more routes as needed */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
