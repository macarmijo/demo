import React from 'react'
import CartWidget from './CartWidget'

const Navbar = ()  => {

    return (
        <>
        <nav>
            <ul className="lista">
                <a href="#" className="listado">Home</a>
                <a href="#" className="listado">About me</a>
                <a href="#" className="listado">Meal Preps</a>
                <CartWidget/>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
