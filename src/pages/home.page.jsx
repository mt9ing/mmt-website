import { Link } from 'react-router-dom'
import '../styles/pages/home.style.css'

export default function Home() {
  return (
    <div className="home-page">
      <h1>Hello, World!</h1>
      <div className="welcome-message">
        <h2>Learners Safe Community</h2>
        <p>Empowering learners through collaboration and support.</p>
      </div>
      <div className="CTA-buttons">
        <button>
          <a
            href="https://chat.whatsapp.com/G8TJUOBcHrA2uX7iIFysvD"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our Community
          </a>
        </button>
        <button>
          <Link to="/timeline">See Our Courses</Link>
        </button>
      </div>
    </div>
  )
}
