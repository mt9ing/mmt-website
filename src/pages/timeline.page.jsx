import { Video } from 'lucide-react'
import '../styles/pages/timeline.style.css'

export default function Timeline() {
  return (
    <>
      <h1
        style={{
          marginBlock: '3rem 2rem',
          fontSize: '3rem',
          color: 'gold',
          margin: 0,
        }}
      >
        Our Current Plans
      </h1>

      <div className="live-plans">
        <h2>Live</h2>
        <ul>
          <li>
            <a
              href="https://youtube.com/playlist?list=PLz1Ix46ZbQR00qfeBl2ThiFpT1onf0FJ1&si=bHkkVfCQxEIZBeyr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video />
            </a>

            <div>
              <img src="/JS.png" alt="JS Cousre" loading="lazy" />
              <h4>JavaScript</h4>
              <p>Learn the basics of JavaScript.</p>
            </div>
          </li>
          <li>
            <a
              href="https://youtube.com/playlist?list=PLz1Ix46ZbQR2ImOII44AKDuGLzlUoc_4W&si=Tf0sNAI1GbrIG-gk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video />
            </a>

            <div>
              <img
                src="/LiveCode.png"
                alt="Coding Live Stream"
                loading="lazy"
              />
              <h4>Coding Live Stream</h4>
              <p>Doing programatics live.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="upcoming-plans">
        <h2>Upcoming</h2>
        <ul>
          <li>
            <a
              href="https://youtube.com/playlist?list=PLz1Ix46ZbQR00qfeBl2ThiFpT1onf0FJ1&si=bHkkVfCQxEIZBeyr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video />
            </a>
            <img
              src="/Competitive Programming.png"
              alt="CP Course"
              loading="lazy"
            />
            <div>
              <h4>Competitive Programming</h4>
              <p>
                Start practicing coding challenges, and improve your
                problem-solving skills.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="completed-plans">
        <h2>Completed</h2>
        <ul>
          <li>
            <a
              href="http://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video />
            </a>
            <img src="/PythonCC.png" alt="Python Crash Course" loading="lazy" />
            <div>
              <h4>Python</h4>
              <p>Python Crash Course in 90 Mins.</p>
            </div>
          </li>
          <li>
            <a
              href="https://youtube.com/playlist?list=PLz1Ix46ZbQR2S3HCjMN7isvFcpBfRTYwI&si=rpf4zr7jvBkDbquG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video />
            </a>
            <img src="/VSCode.png" alt="VSCode Mastery Course" loading="lazy" />
            <div>
              <h4>VSCode</h4>
              <p>Master Visual Studio Code, From Beginner to Pro.</p>
            </div>
          </li>
          <li>
            <a
              href="https://youtube.com/playlist?list=PLz1Ix46ZbQR0Oxk75XkMQpY3M0On5e2Py&si=TUYvmosPCbY7OtoZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video />
            </a>
            <img
              src="/Programming Fundamentals.png"
              alt="Programming Fundamentals"
              loading="lazy"
            />
            <div>
              <h4>Programming Fundamentals</h4>
              <p>Start Your Programming Journey Using C++.</p>
            </div>
          </li>
          <li>
            <a
              href="https://youtube.com/playlist?list=PLz1Ix46ZbQR0JwkZEJ1NErxWdA5P_I_Qr&si=_X8-ivx2B_n3m16f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video />
            </a>
            <img src="/OOP.png" alt="OOP" loading="lazy" />
            <div>
              <h4>Object-Oriented Programming</h4>
              <p>Learn the principles of OOP with C++.</p>
            </div>
          </li>
          <li>
            <a
              href="https://youtube.com/playlist?list=PLz1Ix46ZbQR0PNUGyQ5dvuylYIBg-71T3&si=T7Mt1sQLfwOeVnl7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video />
            </a>
            <img
              src="/Programming Projects.png"
              alt="Programming Projects"
              loading="lazy"
            />
            <div>
              <h4>Programming Projects</h4>
              <p>Apply your skills with real-world projects.</p>
            </div>
          </li>
          <li>
            <a
              href="https://youtube.com/playlist?list=PLz1Ix46ZbQR0PNUGyQ5dvuylYIBg-71T3&si=T7Mt1sQLfwOeVnl7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video />
            </a>
            <img
              src="/Portfolio Reviewer.png"
              alt="Portfolio Reviewer"
              loading="lazy"
            />
            <div>
              <h4>Portfolio Reviewer</h4>
              <p>Get feedback on your programming projects.</p>
            </div>
          </li>
          <li>
            <a
              href="https://youtube.com/playlist?list=PLz1Ix46ZbQR1ObtuM5OAh4_lpqUgKt4F5&si=152U-axLbs449gtI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video />
            </a>
            <img src="/CS.png" alt="CS" loading="lazy" />
            <div>
              <h4>Computer Science</h4>
              <p>Explore the fundamentals of computer science.</p>
            </div>
          </li>
          <li>
            <a
              href="https://youtube.com/playlist?list=PLz1Ix46ZbQR0ozx7-pspGJzGu5f1D3z24&si=dNc5G315XmASGr5t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video />
            </a>
            <img src="/Terminal.png" alt="Terminal Basics" loading="lazy" />
            <div>
              <h4>Terminal Basics</h4>
              <p>Learn the use of terminal & how to install it on mobile.</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
