import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>

            <nav>
                <a href="/shop">shop</a>
                <a href="/revio">order</a>
                <a href="/manage">manage Invantoey</a>
            </nav>
        </div>
    );
};

export default Header;