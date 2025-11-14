import { useEffect, useRef } from 'react'
import { useStore } from '../storeContext'
import { useRouter } from '../routerContext'

/** Home screen: ride selection, inputs, map, request button. */
export default function Home() {
  const { state, actions } = useStore()
  const { navigate, routes } = useRouter()
  const pickupRef = useRef(null)

  useEffect(() => {
    // auto-focus pickup input for keyboard devices
    pickupRef.current?.focus()
  }, [])

  function onRequestRide() {
    if (!state.pickup || !state.dropoff) {
      // minimal safeguard; still allow for mock
    }
    actions.requestRide()
    navigate(routes.tracking)
  }

  return (
    <div className="route" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
      <section className="card" aria-label="Ride type and addresses">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div className="segmented" role="tablist" aria-label="Ride Type">
            <button
              className={`seg ${state.rideType === 'bike' ? 'active' : ''}`}
              role="tab"
              aria-selected={state.rideType === 'bike'}
              onClick={() => actions.setRideType('bike')}
            >
              🏍️ Bike
            </button>
            <button
              className={`seg ${state.rideType === 'car' ? 'active' : ''}`}
              role="tab"
              aria-selected={state.rideType === 'car'}
              onClick={() => actions.setRideType('car')}
            >
              🚗 Car
            </button>
          </div>

          <div className="helper">Choose ride and enter locations</div>
        </div>

        <div className="input-group" style={{ gridTemplateColumns: '1fr 1fr', display: 'grid' }}>
          <div className="input">
            <div className="icon">📍</div>
            <input
              ref={pickupRef}
              type="text"
              placeholder="Pickup location"
              value={state.pickup}
              onChange={(e) => actions.setInputs({ pickup: e.target.value })}
            />
          </div>
          <div className="input">
            <div className="icon">🎯</div>
            <input
              type="text"
              placeholder="Drop-off location"
              value={state.dropoff}
              onChange={(e) => actions.setInputs({ dropoff: e.target.value })}
            />
          </div>
        </div>
      </section>

      <section className="card" aria-label="Map">
        <div className="map" role="img" aria-label="Map placeholder">
          <div className="grid" />
          <div className="pin" />
        </div>
      </section>

      <div style={{ display: 'flex', gap: 16 }}>
        <button className="btn btn-primary" onClick={onRequestRide}>
          Request Ride
        </button>
        <button className="btn btn-ghost" onClick={() => { actions.setInputs({ pickup: '', dropoff: '' }) }}>
          Clear
        </button>
      </div>
    </div>
  )
}
