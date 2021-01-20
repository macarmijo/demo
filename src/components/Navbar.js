import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import './navbar.css'
import DropdownNav from './DropdownNav';


const Navbar = ()  => {

    return (
        <>
        <nav>
            <ul className="lista">
                <Link to="/" ><a className="listado">Home</a></Link>
                <Link to="/aboutMe"><a className="listado">About me</a></Link>
                <DropdownNav/>
                <Link to="/cart"><CartWidget/></Link>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
