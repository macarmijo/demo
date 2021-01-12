import React from 'react'
import ItemCount from './components/ItemCount'

const ItemDetail = ({title, image, description, price }) => {
    return (
        <div>
                 <h1> {title} </h1> 
                 <img src ={ image }></img>  
                 <p> ${price} </p>
                 <p>{description}</p> 
                 <ItemCount/>  
        </div>
    )
}

export default ItemDetail
