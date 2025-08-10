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
            <li>Home</li>
            <li>About</li>
            <li>Timeline</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </>
  )
}
