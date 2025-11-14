import { useStore } from '../storeContext'

/** Ride history listing. */
export default function History() {
  const { state } = useStore()
  const rides = state.rides

  return (
    <div className="route card">
      <h2 style={{ marginTop: 0, fontSize: 32, fontWeight: 800 }}>Ride History</h2>
      <div className="list" style={{ marginTop: 12, maxHeight: 720, overflow: 'auto' }}>
        {rides.map(r => (
          <div key={r.id} className="list-item">
            <div style={{ fontWeight: 700, color: '#1E40AF' }}>{r.type === 'bike' ? '🏍️ Bike' : '🚗 Car'}</div>
            <div>
              <div>{r.from} → {r.to}</div>
              <div className="helper">{new Date(r.date).toLocaleString()}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 800 }}>${r.fare.toFixed(2)}</div>
              <div className="helper">{r.rating ? '★'.repeat(r.rating) : 'Not rated'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
