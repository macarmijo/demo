import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {

    return (
        <section className="products-container">
            { products.map( product => 
                <Item 
                    key={product.id}
                    id={product.id} 
                    title={product.titulo} 
                    image={product.imagen}  
                    price={product.precio}
                    initial = {product.initial}
                    stock = {product.stock}
                />   
            )}

        </section>
    )
}

export default ItemList