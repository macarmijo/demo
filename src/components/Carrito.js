// Expande tu componente Cart.js con el desglose de la compra y actualiza tu CartWidget.js para hacerlo reactivo al contexto
// Debe mostrar el desglose de tu carrito y el precio total
// Debe estar agregada la ruta ‘cart’ al BrowserRouter
// Debe mostrar todos los ítems agregados agrupados
// Por cada tipo de ítem incluye un control para eliminar ítems
// De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems y un react-router Link o un botón para que pueda volver al Landing (ItemDetailContainer.js) para buscar y comprar algo.
// CartWidget.js
// Ahora debe consumir el CartContext y mostrar en tiempo real (aparte del ícono) qué cantidad de ítems están agregados (2 camisas y 1 gorro equivaldrían a 3 items)
// El cart widget no se debe mostrar más si no hay items en el carrito, aplicando la técnica que elijas (dismount, style, etc)

import React, {useContext} from 'react'
import CartContext from './CartContext'
import CartItem  from './CartItem'


const Carrito = () => {

    const { cart } = useContext(CartContext)
    return (
        <>
            <h1>Tu carrito</h1>
            {cart.length ? 
                <>
                {/* <div className="cartColumns">
                        <p>Imagen</p>
                        <p>Nombre</p>
                        <p>Cantidad</p>
                        <p>Valor unitario</p>
                        <p>Valor total</p>
                </div> */}
                <div class="cartObjets">
                    {cart.map((carrito => [
                        <CartItem key={carrito.id} item={carrito.item} cantidad={carrito.cantidad}/>
                    ]))
                    }
                </div>
                </>
                :
                <p>No hay items</p>
            } 
            
        </>
    )
}

export default Carrito
