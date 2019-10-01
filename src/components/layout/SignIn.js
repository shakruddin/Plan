import React from 'react'
import {NavLink} from 'react-router-dom'

const SignIn = () => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating blue lighten-5 lighten-1 z-depth-0">Sk</NavLink></li>
        </ul>
    )
}

export default SignIn
