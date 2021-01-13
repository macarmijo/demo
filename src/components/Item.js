import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

const Item = ({title, image, id}) => {
    return (
            <article className="one-product">
                <Link to={"/item/" + id}><img src={image} alt="beef" className="one-productImg"></img></Link>
                <h3>{title}</h3>
                <Link to={"/item/" + id} className="moreInfo"> More info </Link>
            </article>
    )
}

export default Item
