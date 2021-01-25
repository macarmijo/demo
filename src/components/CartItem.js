import React, {useContext} from 'react'
import CartContext from './CartContext'

const CartItem = ({item, cantidad}) => {

    const {id, titulo, imagen, stock}=item
    const {removeItem, actualizoCantidad}= useContext(CartContext)

    return (
        <div>
            <img src={`${imagen}`} alt={`${titulo}`}></img>
            <h1>{titulo}</h1>
            <section>
                <button onClick={()=> actualizoCantidad(id, cantidad-=1)} disabled={cantidad <= 1}> - </button>
                <p>{cantidad}</p>
                <button onClick={()=> actualizoCantidad(id, cantidad+=1)} disabled={cantidad >= stock}> + </button>
            </section>
            <section>
                <button onClick={()=> removeItem(id)} > Delete </button>
            </section>
            <p>${item.precio * cantidad}</p>

        </div>
    )
}

export default CartItem