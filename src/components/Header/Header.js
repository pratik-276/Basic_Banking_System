import React from 'react';
import classes from './Header.module.css';

import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className={classes.navbarDark + " navbar"}>
            <div className="container">
                <p className="navbar-brand mx-auto font-weight-bold my-0" style={{fontSize: "2em"}}>
                    <NavLink to="/" style={{
                        textDecoration: "none",
                        color: "floralwhite"
                    }}>Basic Banking System
                    </NavLink>
                </p>
            </div>
        </nav>
    );
}
 
export default Header;