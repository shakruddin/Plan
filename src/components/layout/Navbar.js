import React from 'react'
import {Link} from 'react-router-dom'
import SignIn from './SignIn'
import SignOut from './SignOut'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue z-depth-1">
            <div className="container">
                <Link to="/" className="brand-logo">ToGether</Link>
                <SignIn />
                <SignOut />
            </div>
        </nav>
    )
}

export default Navbar
