import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'
import Header from './components/Header'

export const FilmsContext = createContext()

function Layout() {

  const [films, setFilms] = useState([])

  return (
    <FilmsContext.Provider value={films}>
      <Header />
        <div className='allContent'>
          <main className='allMainContent'>
            <Outlet />
          </main>
        </div>
    </FilmsContext.Provider>
  )
}

export default Layout
