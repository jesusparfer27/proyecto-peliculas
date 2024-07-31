import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FilmsContext } from '../Layout';
import '../css/header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <FilmsContext.Provider value={{}}>
            <header className='headerContainer'>
                <div className='headerBlock'>
                    <NavLink to='/signin' className="headerLink">Link 1</NavLink>
                    <NavLink to='/filmsDisplay' className="headerLink">Link 2</NavLink>
                    <div className="burgerDiv">
                        <button className="burgerButton" onClick={toggleMenu}>
                        <span className="material-symbols-outlined">menu</span>
                        </button>
                        {menuOpen && (
                            <ul className="menuList">
                                <li className='menuLi'><NavLink to='/signin' className="headerLink">
                                <span className="material-symbols-outlined">account_circle</span>
                                Jesús</NavLink></li>
                                <li className='menuLi'><NavLink to='/filmsDisplay' className="headerLink">
                                <span className="material-symbols-outlined">account_circle</span>
                                Jordan</NavLink></li>
                                {/* Agrega más enlaces según sea necesario */}
                            </ul>
                        )}
                    </div>
                </div>
            </header>
        </FilmsContext.Provider>
    );
};

export default Header;
