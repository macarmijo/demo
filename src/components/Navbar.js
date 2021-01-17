import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';

const Navbar = ()  => {

    return (
        <>
        <nav>
            <ul className="lista">
                <Link to="/" ><a className="listado">Home</a></Link>
                <a className="listado">About me</a>
                <Link to="/ItemListContainer"><a className="listado">Meal Preps</a></Link>
                <Link to="/cart"><CartWidget/></Link>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
