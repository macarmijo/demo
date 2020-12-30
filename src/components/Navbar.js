import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ({hacerClick})  => {

    return (
        <nav>
            <ul className="lista">
                <a href="#" className="listado">Home</a>
                <a href="#" className="listado">About me</a>
                <a href="#" className="listado">Meal Preps</a>
                <a><button href="#" className="listado" onClick={hacerClick}><FontAwesomeIcon icon="shopping-cart" /></button></a>
            </ul>
        </nav>
    )
}

export default Navbar
