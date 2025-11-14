import { createContext, useContext } from 'react'

export const RouterContext = createContext(null)

// PUBLIC_INTERFACE
export function useRouter() {
  /** Hook to access routing state and navigate(). */
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useRouter must be used within RouterProvider')
  return ctx
}
