import { useRouter } from '../routerContext'
import { useMemo } from 'react'

/** Sidebar with primary navigation items. */
export default function Sidebar() {
  const { path, navigate, routes } = useRouter()

  const items = useMemo(
    () => [
      { key: 'home', label: 'Request Ride', path: routes.home, icon: '🚖' },
      { key: 'history', label: 'Ride History', path: routes.history, icon: '🕘' },
      { key: 'payments', label: 'Payment Methods', path: routes.payments, icon: '💳' },
      { key: 'settings', label: 'Settings', path: routes.settings, icon: '⚙️' },
    ],
    [routes]
  )

  return (
    <aside className="sidebar">
      <div className="nav-group" role="navigation" aria-label="Sidebar">
        {items.map(item => {
          const active = path === item.path
          return (
            <button
              key={item.key}
              className={`nav-item ${active ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span style={{ fontSize: 28 }}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          )
        })}
      </div>
    </aside>
  )
}
