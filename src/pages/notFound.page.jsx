import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <h1 style={{ fontSize: '20rem', margin: 0, color: 'red' }}>404</h1>
      <h2 style={{ margin: '0', fontSize: '3rem' }}>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link
        to="/"
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          background: '#007bff',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
        }}
      >
        Go Home
      </Link>
    </div>
  )
}
