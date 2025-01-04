import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

import UserContext from '../UserContext';
import './NavBar.css';

function NavBar({ logout }) {
    const { currentUser } = useContext(UserContext);
    function loggedInNav() {
        return (
            <ul>
                <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-link" to="/companies">Companies</NavLink></li>
                <li><NavLink className="nav-link" to="/jobs">Jobs</NavLink></li>
                <li><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
                <li><Link className="nav-link" to="/" onClick={logout}>Log Out</Link></li>
            </ul>
        );
    }
    
    function loggedOutNav() {
        return (
            <ul>
                <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-link" to="/login">Login</NavLink></li>
                <li><NavLink className="nav-link" to="/signup">Sign Up</NavLink></li>
            </ul>
        );
    }
    

    return (
        <nav className="NavBar">
            {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    );
}

export default NavBar;