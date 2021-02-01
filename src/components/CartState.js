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

    const itemsInLocal = () => {
        if (localStorage.getItem('cart') !== null){
           return JSON.parse(localStorage.getItem('cart')) 
        }else{
            return [];
        }
    }

    const ordersInLocal = () => {
        if (localStorage.getItem('my-orders') !== null){
            return JSON.parse(localStorage.getItem('my-orders'))
        }else{
            return [];
        }
    }

    const [cart, setCart] = useState( itemsInLocal )
    const [cantidadItem, setCantidadItem] = useState(0)
    const [total, setTotal] = useState(0)
    const [items, setItems] = useState(0)
    const [orderIds, setOrderIds] = useState (ordersInLocal)
    // const [cartStatus, setCartStatus] = useState(true)
    // const [venta, setVenta] = useState({
    //     nroPedido:"",
    //     productos:[],
    //     total:""
    // })
      

    const addItem = ({item, cantidad, id}) => {

        const double = cart.find(product => product.item.id === id)

        if(double !== undefined){
            const duplicado = cart.findIndex(product => product.item.id == id)
            cart.splice(duplicado, 1, 
                {
                    item: item, 
                    cantidad: cantidad + double.cantidad
            })
        }else{
            setCart([
                ...cart,
                {
                    item: item,
                    cantidad: cantidad
                } 
            ])
        }        
    }

    const isInCart = id => {
        let itemR = cart.find(product => product.item.id === id)
        return (itemR ? true:false)
    }

    const deleteItem = id => {
        const newCart = cart.filter(producto => producto.item.id !== id)
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    const clearCart = () => {
        setCart([])
    }

    const updateCantidad = (id, cantidad) => {
        const total = cart.reduce((accumulator, item) => accumulator + item.cantidad, 0)
        setItems(total);
        // const oldCart = cart
        // const newCart = oldCart.map(p => {
        //     if(p.item.id === id){
        //         p.cantidad = cantidad
        //     }
        //     return p
        // })
        // setCart(newCart)
    }

    const getTotal = () => {
        const sum = cart.reduce((accumulator, producto) => accumulator + producto.price*producto.cantidad, 0)
        setTotal(sum)
    }

    useEffect(()=>{

        updateCantidad();
        localStorage.setItem('cart', JSON.stringify(cart))
        localStorage.setItem('my-orders', JSON.stringify(orderIds))
        getTotal();
        // let total =  0;
        // let totals = cart.map( p => p.item.precio * p.cantidad)
        // totals.map(t => total += t)
        // setTotal(cart.reduce((accumulator, currentValue) => accumulator + (currentValue.item.precio * currentValue.cantidad), 0))
        // setCantidadItem(cart.reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0))
        
    }, [cart])
    
       
    
  
    return (
        <CartContext.Provider value={{
            addItem, 
            isInCart, 
            deleteItem,
            clearCart, 
            updateCantidad, 
            cantidadItem, 
            cart, 
            total, 
            orderIds,
            setOrderIds,
            itemsInLocal,
            ordersInLocal,
            items
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState
