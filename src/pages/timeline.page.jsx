export default function Timeline() {
  return (
    <>
      <h1>Our Current Plans</h1>

      <div className="live-plans">
        <h2>Live</h2>
        <ul>
          <li>
            <img src="/JS.png" alt="JS" />
            <h4>JavaScript</h4>
            <p>Learn the basics of JavaScript.</p>
          </li>
        </ul>
      </div>
      <div className="upcoming-plans">
        <h2>Upcoming</h2>
        <ul>
          <li>
            <img src="/JS.png" alt="HTML" />
            <div>
              <h4>HTML</h4>
              <p>Learn the basics of HTML.</p>
            </div>
          </li>
          <li>
            <img src="/JS.png" alt="CSS" />
            <div>
              {' '}
              <h4>CSS</h4>
              <p>Learn the basics of CSS.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="completed-plans">
        <h2>Completed</h2>
        <ul>
          <li>
            <img src="/JS.png" alt="React" />
            <div>
              <h4>React</h4>
              <p>Learn the basics of React.</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
