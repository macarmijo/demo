import React from 'react'
import ItemCount from './ItemCount'

const Item = ({title, id, price, image, initial, stock}) => {
    return (
            <article className="one-product">
                <img src={image} alt="beef" className="one-productImg"></img>
                <h3>{title}</h3>
                <p>price : USD {price}</p>
                &nbsp;
            <ItemCount
                initial={initial}
                stock = {stock}
            />
            </article>
    )
}

export default Item
