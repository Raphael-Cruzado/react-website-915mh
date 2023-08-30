import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo">
                    TRVL <FontAwesomeIcon icon={faShieldHalved} />
                </Link>
            </div>
        </nav>
    </>
        
    );
}

export default Navbar;