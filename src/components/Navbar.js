import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShieldHalved, faTimes } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    const [click, setClick] = useState(false); 

    const handleClick = () => setClick(!click);

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo">
                    TRVL <FontAwesomeIcon icon={faShieldHalved} />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon= {click ? faTimes : faBars} />
                </div>
            </div>
        </nav>
    </>
        
    );
}

export default Navbar;