import React from 'react';
import logo from '../coffee.gif'


const Header = (props) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Brew Admin</h1>
        </header>
    )
}

export default Header;