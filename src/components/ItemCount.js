import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from './CartContext'


const ItemCount = ({item, addToCart}) => {

    const inicial = item.initial
    const [ contDetail , setContDetail ] = useState(inicial)
    const name = item.titulo
    const { isInCart } = useContext(CartContext);
    const existeItem = isInCart(item.id);

    const aumentarCont = () => {
        if (contDetail < item.stock){
            setContDetail(contDetail + 1)
        }else{
            setContDetail( item.stock )
        }        
    }
    const restarCont = () => {
        if(contDetail > item.initial){
            setContDetail(contDetail - 1)
        }
    }
   

    return (
        <>
            { existeItem ?
            <>
            <h4>{"agregaste"+ " " + contDetail + " " + name + " al carrito" }</h4>
            <Link to="/cart">
                <button className="addToCart">Terminar compra</button>
            </Link>
            </>
            :
            <>
            <div className="contador">
            <button onClick={restarCont} className="buttonProd">-</button>
            <p>{contDetail}</p>
            <button onClick={aumentarCont} className="buttonProd">+</button>
            </div>    
            <div>
                <button className="addToCart" 
                onClick={ () => {addToCart({ item: item, contador: contDetail})}}>
                    add to cart</button>
            </div>
            </>}
        </>
    )
}

export default ItemCount
