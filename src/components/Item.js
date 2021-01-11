import React from 'react'
import ItemCount from './ItemCount'

const Item = ({title, id, image, price}) => {


    return ( 
        <div className = "one-product">
            <img src={image} alt="beef" className="one-productImg"></img>
            <h3>{title}</h3>
            <p> id : {id} </p>
            <p>price : USD {price}</p>
            &nbsp;
            <ItemCount/>
        </div>

            
  
    )
}

export default Item