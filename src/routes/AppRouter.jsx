import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('@/pages/HomePage'))

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 text-center text-[var(--color-copy)]">
      <div className="card-panel rounded-[2rem] px-8 py-6">
        <p className="eyebrow text-xs text-[var(--color-cyan)]">Booting Experience</p>
        <p className="mt-3 text-lg text-white">Loading the React 19 starter...</p>
      </div>
    </div>
  )
}

export function AppRouter() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  )
}
