import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {

    return (
        <div className="products-container">
            { products.map( product => <Item id={product.id} 
            title={product.titulo} image={product.imagen}  price={product.precio}/>)
            }
        </div>
    )
}

export default ItemList