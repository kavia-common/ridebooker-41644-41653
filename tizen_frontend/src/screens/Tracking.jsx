import { useEffect } from 'react'
import { useRouter } from '../routerContext'
import { useStore } from '../storeContext'

/** Tracking screen: Show driver details, ETA, progress, and cancellation. */
export default function Tracking() {
  const { state, actions } = useStore()
  const { navigate, routes } = useRouter()
  const ride = state.currentRide

  useEffect(() => {
    if (!ride) return
    const timer = setInterval(() => {
      actions.advanceStatus()
    }, 2000)
    return () => clearInterval(timer)
  }, [ride, actions])

  useEffect(() => {
    if (ride?.status === 'completed') {
      // Move to rating after short pause
      const t = setTimeout(() => navigate(routes.rating), 800)
      return () => clearTimeout(t)
    }
  }, [ride, navigate, routes])

  if (!ride) {
    return (
      <div className="route card">
        <div className="helper">No active ride. Return to Home to request one.</div>
        <button className="btn btn-primary" onClick={() => navigate(routes.home)}>Back to Home</button>
      </div>
    )
  }

  return (
    <div className="route" style={{ display: 'grid', gap: 20 }}>
      <section className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 32, fontWeight: 800 }}>En route • {ride.type === 'bike' ? 'Bike' : 'Car'}</h2>
            <div className="helper">Status: <strong style={{ color: '#2563EB' }}>{ride.status}</strong></div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="helper">ETA</div>
            <div style={{ fontSize: 36, fontWeight: 800 }}>{ride.eta || 0} min</div>
          </div>
        </div>
      </section>

      <section className="card" aria-label="Driver info">
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: 18, alignItems: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: 18, background: '#eff6ff', display: 'grid', placeItems: 'center', fontSize: 36 }}>👤</div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 700 }}>{ride.driver.name}</div>
            <div className="helper">{ride.driver.vehicle} • {ride.driver.plate}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <button className="btn btn-secondary" onClick={() => actions.cancelRide() || navigate(routes.home)}>Cancel ride</button>
          </div>
        </div>
      </section>

      <section className="card" aria-label="Route map">
        <div className="map">
          <div className="grid" />
          <div className="pin" style={{ top: '30%', left: '30%' }} />
          <div className="pin" style={{ top: '70%', left: '70%', background: '#10b981' }} />
        </div>
      </section>
    </div>
  )
}
