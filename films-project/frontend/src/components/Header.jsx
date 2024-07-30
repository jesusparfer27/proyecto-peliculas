import { useState, useEffect } from 'react'
import { NavLink } from 'react'
import '../css/header.css'

const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <header className='headerContainer'>
            <div className='headerBlock'>
                <NavLink to='/signin'>Link 1</NavLink>
                <NavLink to='/filmsDisplay'>Link 2</NavLink>
                <li className="usersMenu">
                    <ul>
                        <li>{ }</li>
                        <li></li>
                    </ul>
                </li>

            </div>
        </header>
    );
}

export default Header;