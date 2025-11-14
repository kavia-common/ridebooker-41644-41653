import { useEffect } from 'react'
import './styles.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './screens/Home'
import Tracking from './screens/Tracking'
import Rating from './screens/Rating'
import History from './screens/History'
import Payments from './screens/Payments'
import Settings from './screens/Settings'
import { RouterProvider } from './router.jsx'
import { useRouter } from './routerContext'
import { StoreProvider } from './store.jsx'
import { useTizenKeys } from './hooks/useTizenKeys'

function Routes() {
  const { path, navigate, routes } = useRouter()
  // Basic remote back button: go home
  useTizenKeys({
    onBack: () => {
      if (path !== routes.home) navigate(routes.home)
    },
  })

  return (
    <main className="main">
      {path === routes.home && <Home />}
      {path === routes.tracking && <Tracking />}
      {path === routes.rating && <Rating />}
      {path === routes.history && <History />}
      {path === routes.payments && <Payments />}
      {path === routes.settings && <Settings />}
    </main>
  )
}

function AppShell() {
  // Setup focus outline for keyboard interactions
  useEffect(() => {
    function handleMouseDown() {
      document.body.classList.add('using-mouse')
    }
    function handleKeyDown(e) {
      if (e.key === 'Tab') document.body.classList.remove('using-mouse')
    }
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="app-shell">
      <Header />
      <Sidebar />
      <Routes />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <RouterProvider>
        <AppShell />
      </RouterProvider>
    </StoreProvider>
  )
}
