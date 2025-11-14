import { useStore } from '../storeContext'

/** App header with brand and status indicators. */
export default function Header() {
  const { state } = useStore()
  const active = state.currentRide ? state.currentRide.status : 'idle'

  return (
    <header className="header">
      <div className="brand">
        <div className="logo" aria-hidden="true" />
        <div className="title">RideBooker</div>
      </div>
      <div className="status">
        <span>Status:</span>
        <strong style={{ color: active === 'idle' ? '#6B7280' : '#2563EB' }}>
          {active.toUpperCase()}
        </strong>
      </div>
    </header>
  )
}
