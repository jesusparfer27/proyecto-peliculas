import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FilmsContext } from '../Layout';
import { SearchBarContext } from '../Layout';
import '../css/header.css';

import { FilmsContext } from '../Layout';
    const { setSearchBar: setSearchBarContext } = useContext(searchBar);

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [flter, setFilter] = useState("")
    const [filmsFilter, setFilmsFilter] = useState("")

    const { setFilms: setFilmsFromContext } = useContext(FilmsContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Cambia el estado basado en la posición de scroll
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Limpia el evento en el desmontaje del componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleFilterByFilmName = (e) => {
        const string = e.target.value;
        setFilter(string);
        setFilmsFilter(objeto.albums)
        if (string.trim().length > 3) {
            const filtered = albums.filter(album => album.name_artist.toLowerCase().includes(string.trim().toLowerCase()));
            setFilmsFilter(filtered)
        } else {
            setFilmsFilter(films)
        }
    }



    return (
        <FilmsContext.Provider value={{}}>
            <header className={`headerContainer ${isSticky ? 'sticky' : ''}`}>
                <div className="searchBar">
                    <input type="text"
                        onChange={handleFilterByFilmName}
                        placeholder='¿Que te gustaría ver? (4 chars)'
                        style={{ width: "400px", height: "2rem", borderRadius: ".6rem", border: "1px solid black" }}
                        value={filter}
                    />
                </div>
                <div className='headerBlock'>
                    <NavLink to='/' className="headerLink">Link 1</NavLink>
                    <NavLink to='/filmsDisplay' className="headerLink">Link 2</NavLink>
                    <div className="burgerDiv">
                        <button className="burgerButton" onClick={toggleMenu}>
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        {menuOpen && (
                            <ul className="menuList">
                                <li className='menuLi'>
                                    <NavLink to='/signin' className="headerLink">
                                        <span className="material-symbols-outlined">account_circle</span>
                                        Jesús
                                    </NavLink>
                                </li>
                                <li className='menuLi'>
                                    <NavLink to='/filmsDisplay' className="headerLink">
                                        <span className="material-symbols-outlined">account_circle</span>
                                        Jordan
                                    </NavLink>
                                </li>
                                {/* Agrega más enlaces según sea necesario */}
                            </ul>
                        )}
                    </div>
                </div>
                <hr />
            </header>

        </FilmsContext.Provider>
    );
};

export default Header;
