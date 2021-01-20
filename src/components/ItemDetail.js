import React, { useState } from 'react'
import ItemCount from './ItemCount'
import './itemDetail.css'

const ItemDetail = ({title, image, description, price, stock, initial, item }) => {

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
                item={item}
                name = {title}
            />
            
            </section>
            
        </div>
        </>
    )
}

export default ItemDetail
