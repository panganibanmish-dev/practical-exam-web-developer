import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src='/images/logo.png' style={{ zIndex: 999, position: 'relative', display: "block", backgroundRepeat: "no-repeat", backgroundSize: "auto" }} width="auto" height="auto" />
                    </Link>
                </div>
            </nav>
            <nav className='navbar-header'>
                <div className='navbar-container-header'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                PRODUCTS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/industries' className='nav-links' onClick={closeMobileMenu}>
                                INDUSTRIES
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/customers' className='nav-links' onClick={closeMobileMenu}>
                                CUSTOMERS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/solutions' className='nav-links' onClick={closeMobileMenu}>
                                SOLUTIONS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/platform' className='nav-links' onClick={closeMobileMenu}>
                                PLATFORM
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                SERVICES
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/partners' className='nav-links' onClick={closeMobileMenu}>
                                PARTNERS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/company' className='nav-links' onClick={closeMobileMenu}>
                                COMPANY
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar