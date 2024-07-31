import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'
import Header from './components/Header'

export const FilmsContext = createContext()
export const SearchBarContext = createContext()

function Layout() {

  const [filter, setFilter] = useState("")
  const [films, setFilms] = useState([])

  return (
    <SearchBarContext.Provider value={filter}>
    <FilmsContext.Provider value={films}>
      <Header />
        
          <main className='allMainContent'>
            <Outlet />
          </main>
        
    </FilmsContext.Provider>
    </SearchBarContext.Provider>
  )
}

export default Layout
