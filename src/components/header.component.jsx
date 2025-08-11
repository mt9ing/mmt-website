import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header>
        <div className="logo-container">
          <img src="/mmt-logo.png" alt="Logo" />
          <span>MMT</span>
        </div>
        <div className="routing-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
