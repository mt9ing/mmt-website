import Header from './components/header.component.jsx'
import Router from './Router.jsx'

function App() {
  // Disable website for mobile devices
  if (screen.width < 500) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100dvh',
          padding: '2rem',
        }}
      >
        <h1>Hello, World!</h1>
        <p>NOTE: "This site is only available on (PC\Laptop) devices."</p>
      </div>
    )
  }
  return (
    <>
      <Header />
      <Router />
      {/* <footer>
        <p>© 2023 MMT Website. All rights reserved.</p>
      </footer> */}
    </>
  )
}

export default App
