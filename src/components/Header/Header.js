import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
            <h1>Meal DB</h1>
            <div>
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Services</a>
                <a href="">Contact</a>
            </div>
        </div>
    );
};

export default Header;