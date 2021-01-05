import React from 'react'

const ItemCount = ({boton, aumentar, restar, stock}) => {


    return (
        <div className="contador">
            <button onClick={ restar } className="buttonProd">-</button>
            <p>{boton}</p>
            <button onClick={ aumentar } className="buttonProd">+</button>
        </div>
    )
}

export default ItemCount
