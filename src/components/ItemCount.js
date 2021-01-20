import React from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({ text, carrito, estado, suma, resta, contador, item}) => {

    return (
        <>

            {estado ?
            (<>
            <div className="contador">
                <button onClick={resta} className="buttonProd">-</button>
                <p>{contador}</p>
                <button onClick={suma} className="buttonProd">+</button>
            </div>    
            <div>
                <button className="addToCart" onClick={ carrito }>add to cart</button>
            </div>
            </>)  
            
            :(
                <>
                <h4>{text}</h4>
                <Link to="/cart">
                    <button className="addToCart">Terminar compra</button>
                </Link>
                </>
            )
            }
        </>
    )
}

export default ItemCount
