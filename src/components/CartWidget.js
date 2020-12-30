import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartWidget = () => {
    
    let hacerClick = () => {console.log('click')}

    return (
        
        <a><button className="listado" onClick={hacerClick}><FontAwesomeIcon icon="shopping-cart" /></button></a>
    
    )
}

export default CartWidget

