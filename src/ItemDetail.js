import React, { useState } from 'react'
import ItemCount from './components/ItemCount'
import './components/itemDetail.css'

const ItemDetail = ({title, image, description, price, stock, initial, item }) => {

    const [ contDetail  , setContDetail ] = useState(initial);

    const [ estadoBoton , setEstadoBoton ] = useState(true);

    const aumentarCont = () => {
        if (contDetail < stock){
            setContDetail(contDetail + 1)
        }else{
            setContDetail( stock )
        }        
    }

    const restarCont = () => {
        if(contDetail > initial){
            setContDetail(contDetail - 1)
        }
    }

    const agregarCarrito = () => {
        setEstadoBoton(false)
    }


    return (
        <>
        <h1 className="titleDetail"> {title} </h1> 
        <div className="itemDetail">
            <section className="itemBox">
                <img src ={ image } alt="alt" className="itemImg"></img>  
                <p className="description">{description}</p>
            </section>
            <section className="itemBox">
            <h1> ${price} </h1>
            &nbsp;
            { stock ? <p>{stock} in Stock</p> :<h1>Not in stock</h1> }
            &nbsp;
            <ItemCount 
                initial={initial} 
                stock={stock} 
                estado={estadoBoton} 
                item={item}
                carrito={agregarCarrito} 
                text={"Agregaste " + contDetail + " " +title + " al carrito"} 
                suma={aumentarCont} 
                resta={restarCont} 
                contador={contDetail}
            />
            
            </section>
            
        </div>
        </>
    )
}

export default ItemDetail
