import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';


function Header() {
    const location = useLocation()
    return (
        <div className='nav-links'>
            <ul>
               <NavLink to='/' className={location.pathname === '/' ? 'activelink' : ''}>Home</NavLink>
               <NavLink to='/starred' className={location.pathname === '/starred' ? 'activelink' : ''}>Starred</NavLink>
            </ul>
        </div>
    );
}

export default Header;