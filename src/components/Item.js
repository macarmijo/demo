import React from 'react'

const Item = ({title, id, price, pictureURL}) => {


    return (
        <div>
            
            <img src={pictureURL} alt="beef" className="one-productImg"></img>
            <h3>{title} (id: {id})</h3>
            <p>price : USD {price}</p>
            {/* <p>stock : {stock}</p> */}
            &nbsp;
            
        </div>
    )
}

export default Item