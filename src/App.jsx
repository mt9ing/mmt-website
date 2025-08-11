import Home from './pages/home.page.jsx'

function App() {
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
      <Home />
    </>
  )
}

export default App
