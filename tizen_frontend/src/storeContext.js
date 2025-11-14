import { createContext, useContext } from 'react'

export const StoreContext = createContext(null)

// PUBLIC_INTERFACE
export function useStore() {
  /** Hook to access app state and actions. */
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
