import React, { lazy, Suspense, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header, Hero, Menu } from './pages'
import { SmoothScroll } from './components'
import './App.scss'
import Playground from './Playground'
import { Loader } from './loader'

const HeroComponent = Loader(lazy(() => import('./pages/Hero')))

function App() {
  const [active, setActive] = useState(false)
  const handleCloseOpen = () => setActive(pre => !pre)

  return (
    <>
      <Header active={active} handleCloseOpen={handleCloseOpen} />
      <Menu active={active} handleCloseOpen={handleCloseOpen} />

      <main className="main">
        <div className="placeholder"></div>
        <SmoothScroll>
          {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
          parent route elements. See the note about <Outlet> below. */}
          <Routes>
            <Route path="/about-me" element={<HeroComponent />} />

            {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} /> */}
            {/* <Route path="dashboard" element={<Dashboard />} /> */}

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            {/* <Route path="*" element={<NoMatch />} /> */}
            {/* </Route> */}
          </Routes>
        </SmoothScroll>
      </main>
      <Playground />
    </>
  )
}

export default App
