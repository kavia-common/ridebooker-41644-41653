import { useMemo, useReducer } from 'react'
import { StoreContext } from './storeContext'

/**
 * Mock ride generator and initial data
 */
function makeId() {
  return Math.random().toString(36).slice(2, 9)
}

const initialState = {
  rideType: 'car', // 'bike' | 'car'
  pickup: '',
  dropoff: '',
  currentRide: null, // { id, driver, eta, status }
  rides: [
    {
      id: makeId(),
      type: 'car',
      from: 'Main Street 12',
      to: 'Park Avenue 5',
      date: new Date(Date.now() - 86400000).toISOString(),
      fare: 12.5,
      rating: 5,
    },
    {
      id: makeId(),
      type: 'bike',
      from: 'Airport Blvd',
      to: 'Tech Park',
      date: new Date(Date.now() - 3600_000 * 5).toISOString(),
      fare: 7.8,
      rating: 4,
    },
  ],
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_RIDE_TYPE':
      return { ...state, rideType: action.payload }
    case 'SET_INPUTS':
      return { ...state, ...action.payload }
    case 'REQUEST_RIDE': {
      const ride = {
        id: makeId(),
        type: state.rideType,
        from: state.pickup || 'Current Location',
        to: state.dropoff || 'Destination',
        date: new Date().toISOString(),
        fare: (Math.random() * 10 + 5).toFixed(2) * 1,
        rating: null,
      }
      const currentRide = {
        id: ride.id,
        driver: {
          name: state.rideType === 'bike' ? 'Samir (Bike)' : 'Alex (Car)',
          vehicle: state.rideType === 'bike' ? 'Yamaha FZ' : 'Toyota Prius',
          plate: state.rideType === 'bike' ? 'BK-4521' : 'AB-1234',
        },
        eta: 5 + Math.floor(Math.random() * 8),
        status: 'searching', // searching -> arriving -> in_progress -> completed/cancelled
        from: ride.from,
        to: ride.to,
        type: state.rideType,
      }
      return { ...state, currentRide, rides: [ride, ...state.rides] }
    }
    case 'ADVANCE_STATUS': {
      if (!state.currentRide) return state
      const next = { searching: 'arriving', arriving: 'in_progress', in_progress: 'completed' }
      const status = next[state.currentRide.status] || 'completed'
      return { ...state, currentRide: { ...state.currentRide, status, eta: Math.max(0, (state.currentRide.eta || 1) - 1) } }
    }
    case 'CANCEL_RIDE': {
      return { ...state, currentRide: null }
    }
    case 'COMPLETE_RIDE': {
      // No-op: status managed by ADVANCE_STATUS; completion happens when status becomes completed.
      return state
    }
    case 'RATE_RIDE': {
      const { rideId, rating, comments } = action.payload
      const rides = state.rides.map(r => (r.id === rideId ? { ...r, rating, comments } : r))
      return { ...state, rides, currentRide: null }
    }
    default:
      return state
  }
}

// PUBLIC_INTERFACE
export function StoreProvider({ children }) {
  /** Provides app state and actions using React context. */
  const [state, dispatch] = useReducer(reducer, initialState)

  const actions = useMemo(
    () => ({
      setRideType: (type) => dispatch({ type: 'SET_RIDE_TYPE', payload: type }),
      setInputs: (payload) => dispatch({ type: 'SET_INPUTS', payload }),
      requestRide: () => dispatch({ type: 'REQUEST_RIDE' }),
      advanceStatus: () => dispatch({ type: 'ADVANCE_STATUS' }),
      cancelRide: () => dispatch({ type: 'CANCEL_RIDE' }),
      rateRide: (rideId, rating, comments) => dispatch({ type: 'RATE_RIDE', payload: { rideId, rating, comments } }),
    }),
    []
  )

  const value = useMemo(() => ({ state, actions }), [state, actions])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
