import { useEffect, useState } from 'react'

const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api/v1'

export default function App () {
  const [message, setMessage] = useState('Loading...')
  const [health, setHealth] = useState('unknown')

  useEffect(() => {
    fetch(`${apiBase}/hello`).then(async (r) => {
      const data = await r.json()
      setMessage(data.message)
    }).catch(() => setMessage('Failed to reach backend'))

    fetch(apiBase.replace('/api/v1', '/health'))
      .then(async (r) => setHealth(r.ok ? 'ok' : 'degraded'))
      .catch(() => setHealth('down'))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>MERN App</h1>
      <p><strong>Backend health:</strong> {health}</p>
      <p><strong>API says:</strong> {message}</p>
    </div>
  )
}


