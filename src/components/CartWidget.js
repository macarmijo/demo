import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import CartContext from './CartContext'

const CartWidget = () => {

  
    const { items } = useContext(CartContext);

    return (
        // <div classname="cartContainer">
        <>
            {
            items > 0 
            && 
            <a className="listado">
                <p>{items}</p>
            </a>
            }
            <Link to="/cart">
                <button className="listado"><FontAwesomeIcon icon="shopping-cart" /></button>
            </Link>
        </>
        // </div>
    )
}

export default CartWidget

