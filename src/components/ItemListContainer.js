import React, { useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting, products}) => {

    const [ items, setItems ] = useState([])

    return (
        <div className="itemList">
            <h1>{greeting}</h1>
            {/* <section className="products-container"> */}
                {products.length > 1 
                ? <ItemList products = { items } /> 
                : <h2>Loading</h2>}
            {/* </section> */}

        </div>
    )
}

export default ItemListContainer

