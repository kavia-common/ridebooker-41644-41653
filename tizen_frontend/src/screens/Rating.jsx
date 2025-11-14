import { useState } from 'react'
import { useRouter } from '../routerContext'
import { useStore } from '../storeContext'

/** Rating screen after ride completion. */
export default function Rating() {
  const { state, actions } = useStore()
  const { navigate, routes } = useRouter()
  const lastRide = state.rides[0] // Most recent ride

  const [rating, setRating] = useState(5)
  const [hover, setHover] = useState(0)
  const [comments, setComments] = useState('')

  function submit() {
    if (!lastRide) {
      navigate(routes.home)
      return
    }
    actions.rateRide(lastRide.id, rating, comments)
    navigate(routes.history)
  }

  if (!lastRide) {
    return (
      <div className="route card">
        <div className="helper">No ride to rate.</div>
        <button className="btn btn-primary" onClick={() => navigate(routes.home)}>Back to Home</button>
      </div>
    )
  }

  return (
    <div className="route" style={{ display: 'grid', gap: 20 }}>
      <section className="card">
        <h2 style={{ marginTop: 0, fontSize: 32, fontWeight: 800 }}>Rate your ride</h2>
        <div className="helper">From {lastRide.from} to {lastRide.to}</div>
        <div className="rating" aria-label="Star rating">
          {[1,2,3,4,5].map(i => (
            <button
              key={i}
              className="btn btn-ghost"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(i)}
              aria-label={`${i} star`}
            >
              <span style={{ fontSize: 48 }}>{(hover || rating) >= i ? '★' : '☆'}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="input" style={{ gridTemplateColumns: '52px 1fr' }}>
          <div className="icon">💬</div>
          <input
            type="text"
            placeholder="Share your feedback (optional)"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
      </section>

      <div style={{ display: 'flex', gap: 16 }}>
        <button className="btn btn-primary" onClick={submit}>Submit rating</button>
        <button className="btn btn-ghost" onClick={() => navigate(routes.home)}>Skip</button>
      </div>
    </div>
  )
}
