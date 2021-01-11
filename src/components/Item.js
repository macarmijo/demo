import React from 'react'

const Item = ({title, id, price, pictureURL}) => {


    return (
        <div>
            
            <img src={pictureURL} alt="beef" className="one-productImg"></img>
            <h3>{title}</h3>
            <p>price : USD {price}</p>
            &nbsp;
            
        </div>
    )
}

export default Item