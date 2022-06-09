import React from 'react';
import logo from '../../Image/bangladesh.png'
import './NavBar.css'

function NavBar(props) {
    return (
<div className="navbar-header">
            <div className="nav-icon">
                <div> <img src={logo} alt="" /></div>
                <div><h2>BD National Cricket Team</h2></div>
            </div>
            <div className="navbar">
                <ul>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/users">Users</a>
                    <a href="/service">Service</a>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;