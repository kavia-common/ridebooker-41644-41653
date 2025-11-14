import { useEffect, useMemo, useState } from 'react'
import { routes } from './routes'
import { RouterContext } from './routerContext'

// PUBLIC_INTERFACE
export function RouterProvider({ children }) {
  /** Minimal hash-based router provider for Tizen app. */
  const [path, setPath] = useState(window.location.hash.replace('#', '') || routes.home)

  useEffect(() => {
    function onHashChange() {
      setPath(window.location.hash.replace('#', '') || routes.home)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const value = useMemo(
    () => ({
      path,
      navigate: (to) => {
        if (!to.startsWith('/')) to = `/${to}`
        window.location.hash = to
      },
      routes,
    }),
    [path]
  )

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}
