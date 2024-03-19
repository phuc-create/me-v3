import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header, Hero, Menu } from './pages'
import './App.scss'

function App() {
  const [active, setActive] = useState(false)
  const handleCloseOpen = () => setActive(pre => !pre)

  return (
    <>
      <Header active={active} handleCloseOpen={handleCloseOpen} />
      <Menu active={active} handleCloseOpen={handleCloseOpen} />
      <main className="main">
        <div className="placeholder"></div>
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/about-me" element={<Hero />} />
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
          {/* </Route> */}
        </Routes>
      </main>
    </>
  )
}

export default App
