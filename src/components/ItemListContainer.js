import React from 'react'
import Item from './Item'
import ItemCount from './ItemCount'


const ItemListContainer = ({greeting}) => {

    // let imagenes = ['./beef.jpg', './chicken.jpg', './breakfast.jpg', './glutenFree.jpg','./healthy.png', './low-carb.webp', './vegan.png', './veggie.png']
    // let descripcion = ["High protein", "Mediterranean", "Breakfast", "Gluten free", "Healthy heart", "Low carb", "Vegan", "Veggie"]

    return (
        <div className="itemList">
            <h1>{greeting}</h1>
            <section className="products-container">
                <article className="one-product">
                    {/* <img src="./beef.jpg" alt="beef"></img>
                    <h3>High protein</h3>
                    <p>stock : {stock}</p>
                    &nbsp; */}
                    <Item
                        title = {"High Protein"}
                        id = {30}
                        price = {15}
                        pictureURL = "https://i.ibb.co/PxLhX1h/beef.jpg"
                    />
                    <ItemCount
                        initial = { 1 } 
                        stock = { 9 }
                    />
                </article>
                               
                {/* <article className="one-product">
                    <img src= alt="beef"></img>
                    <h3>High protein</h3>
                    <ItemCount/>
                    <button className="addToCart" onClick = {() => {console.log(contador)}}>add to cart</button>
                </article>
                <article className="one-product">
                    <img src="./chicken.jpg" alt="chicken"></img>
                    <h3>Mediterranean</h3>
                    <div className="contador">
                        <button onClick={ aumentarContador } className="button">+</button>
                        <p>{contador}</p>
                        <button onClick={ restarContador } className="button">-</button>
                    </div>
                    <button className="addToCart" onClick = {() => {console.log(contador)}}>add to cart</button>
                </article>
                <article className="one-product">
                    <img src="./breakfast.jpg" alt="breakfast"></img>
                    <h3>Breakfast</h3>
                    <div className="contador">
                        <button onClick={ aumentarContador } className="button">+</button>
                        <p>{contador}</p>
                        <button onClick={ restarContador } className="button">-</button>
                    </div>
                    <button className="addToCart" onClick = {() => {console.log(contador)}}>add to cart</button>
                </article>
                <article className="one-product">
                    <img src="./glutenFree.jpg" alt="glutenFree"></img>
                    <h3>Gluten free</h3>
                    <div className="contador">
                        <button onClick={ aumentarContador } className="button">+</button>
                        <p>{contador}</p>
                        <button onClick={ restarContador } className="button">-</button>
                    </div>
                    <button className="addToCart" onClick = {() => {console.log(contador)}}>add to cart</button>
                </article>
                <article className="one-product">
                    <img src="./low-carb.webp" alt="lowCarb"></img>
                    <h3>Low carb</h3>
                    <div className="contador">
                        <button onClick={ aumentarContador } className="button">+</button>
                        <p>{contador}</p>
                        <button onClick={ restarContador } className="button">-</button>
                    </div>
                    <button className="addToCart" onClick = {() => {console.log(contador)}}>add to cart</button>
                </article>
                <article className="one-product">
                    <img src="./veggie.png" alt="veggie"></img>
                    <h3>Vegeterian</h3>
                    <div className="contador">
                        <button onClick={ aumentarContador } className="button">+</button>
                        <p>{contador}</p>
                        <button onClick={ restarContador } className="button">-</button>
                    </div>
                    <button className="addToCart" onClick = {() => {console.log(contador)}}>add to cart</button>
                </article>
                <article className="one-product">
                    <img src="./vegan.png" alt="vegan"></img>
                    <h3>Vegan</h3>
                    <div className="contador">
                        <button onClick={ aumentarContador } className="button">+</button>
                        <p>{contador}</p>
                        <button onClick={ restarContador } className="button">-</button>
                    </div>
                    <button className="addToCart" onClick = {() => {console.log(contador)}}>add to cart</button>
                </article>
                <article className="one-product">
                    <img src="./healthy.png" alt="healthy"></img>
                    <h3>Healthy heart</h3>
                    <div className="contador">
                        <button onClick={ aumentarContador } className="button">+</button>
                        <p>{contador}</p>
                        <button onClick={ restarContador } className="button">-</button>
                    </div>
                    <button className="addToCart" onClick = {() => {console.log(contador)}}>add to cart</button>
                </article> */}
            </section>

        </div>
    )
}

export default ItemListContainer

