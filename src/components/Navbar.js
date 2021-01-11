import React from 'react'
import CartWidget from './CartWidget'

const Navbar = ()  => {

    return (
        <>
        <nav>
            <ul className="lista">
                <a className="listado">Home</a>
                <a className="listado">About me</a>
                <a className="listado">Meal Preps</a>
                <CartWidget/>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
