import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Spinner from '../utils/Spinner'

const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const MontyHall = lazy(() => import('../pages/MontyHall'))

// import Spinner from '../utils/Spinner'

const Main: React.FC = () => {
  return (
    // Suspense to handle the lazy suspend while moving between files
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<MontyHall />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  )
}

export default Main
