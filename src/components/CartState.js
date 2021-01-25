// CartContext.js con el context y su custom provider (Impórtalo en App.js)
// Al clickear comprar en ItemDetail se debe guardar en el CartContext el producto y su cantidad en forma de objeto { item: {} , quantity }
// Detalle importante: CartContext debe tener la lógica incorporada de no aceptar duplicados y mantener su consistencia.
// Métodos recomendados: 
// addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
// removeItem(itemId) // Remover un item del cart por usando su id
// clear() // Remover todos los items
// isInCart: (id) => true|false
import React, {useState, useEffect} from 'react'
import CartContext from './CartContext'

const CartState = ({children}) => {

    const [cart, setCart] = useState([])
    const [cantidadItem, setCantidadItem] = useState(0)
    const [total, setTotal] = useState(0)
      

    const addItem = ({item, cantidad}) => {
        setCart([
            ...cart,
            {
                item: item,
                cantidad: cantidad
            } 
        ])
    }

    const isInCart = id => {
        let itemR = cart.find(producto => producto.item.id === id)
        return (itemR ? true:false)
    }

    const removeItem = id => {
        const newCart = cart.filter(producto => producto.item.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const actualizoCantidad = (id, cantidad) => {
        const oldCart = cart
        const newCart = oldCart.map(p => {
            if(p.item.id === id){
                p.cantidad = cantidad
            }else
                return p
        })
        setCart(newCart)
    }

    useEffect(()=>{
        let total =  0;
        let totals = cart.map( p => p.item.precio * p.cantidad)
        totals.map(t => total += t)
        setTotal(total)
        setCantidadItem(cart.length)
        
    }, [cart])
    
       
    
  
    return (
        <CartContext.Provider value={{addItem, isInCart, removeItem, clearCart, actualizoCantidad, cantidadItem, cart, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState
