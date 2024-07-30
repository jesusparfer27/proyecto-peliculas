import { useState, useContext, useEffect } from 'react'
import { createContext } from 'react'
import { Link } from 'react-router-dom'
import { FilmsContext } from '../Layout'

const FilmsDisplay = () => {

    const [users, setUsers] = useState([])
    const { films, setFilms } = useContext(FilmsContext)

    useEffect(() => {
        getUsers("/public/lib.json")
    }, [])

    const getUsers = async (url) => {
        const respuesta = await fetch(url)
        const objeto = await respuesta.json()
        setUsers(objeto.users)
    }



    return (
        <FilmsContext.Provider value={{ films }}>
            <main className='filmsDisplayContainer'>
                <h1 className='h1FilmsDisplay'>Bienvenido de nuevo!</h1>
                <ul>
                    {
                        films.map((film) => {
                            return (
                                <Link key={film.id} to="/">
                                    <li>{film.name}</li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </main>
        </FilmsContext.Provider>
    );
}

export default FilmsDisplay;