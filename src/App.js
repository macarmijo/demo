import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './Main'
import "./estilos.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faCoffee } from '@fortawesome/free-solid-svg-icons'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carrito from './components/Carrito'

library.add( faShoppingCart, faCoffee )

const products = [
    { id: 1 ,titulo: "Breakfast", precio: "8", 
    imagen: "https://i.ibb.co/tcGJ4rd/breakfast.jpg",
    stock: 5 ,initial: 1, description: "alguna descripción", categoryId: 1 },
  
    { id: 2 ,titulo: "Mediterranean" ,precio: "10" ,
      imagen: "https://i.ibb.co/wCnfmj0/chicken.jpg",
      stock: 5, initial: 1, description: "alguna descripción", categoryId: 2 },
    
    { id: 3 ,titulo: "Gluten Free" ,precio: "20" ,
      imagen: "https://i.ibb.co/HTqv8mm/gluten-Free.jpg",
      stock: 6 ,initial: 1, description: "alguna descripción", categoryId: 3 },
    
    { id: 4 ,titulo: "Low carb" ,precio: "30" ,
    imagen: "https://i.ibb.co/M6DMj1G/low-carb.webp",
    stock: 9 ,initial: 1, description: "alguna descripción", categoryId: 3 },
    
    { id: 5 ,titulo: "Healthy heart" ,precio: "25" ,
    imagen: "https://i.ibb.co/QcrT8xS/healthy.png",
    stock: 10 ,initial: 1, description: "alguna descripción", categoryId: 3 },
      
    { id: 6 ,titulo: "Vegan" ,precio: "30" ,
      imagen: "https://i.ibb.co/MnKVg7B/vegan.png",
      stock: 6 ,initial: 1, description: "alguna descripción", categoryId: 4 },
    
    { id: 7, titulo: "Veggie", precio: "30", 
      imagen: "https://i.ibb.co/Wt8TR71/veggie.png",
      stock: 10 ,initial: 1, description: "alguna descripción", categoryId: 4 },
      
    { id: 8, titulo: "Protein" ,precio: "20" ,
    imagen: "https://i.ibb.co/PxLhX1h/beef.jpg",
    stock: 3 ,initial: 1, description: "alguna descripción", categoryId: 2 }
    ]


const App = () => {
    
    const [ items, setItems ] = useState([])

    
    useEffect(() => {
     
      const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
          resolve(products); 
        }, 2000);
      })
  
      promesa.then( result => setItems(result)) 
      promesa.catch( err => console.log("Algo salio mal")) 
  
    }, []);

    return (
        <>
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/">
                <Main/>
                <ItemListContainer
                greeting="Products"
                products={items}
                /> 
            </Route>
            <Route exact path="/category/:id">
                <ItemListContainer
                greeting="category"
                products = {items}
                />
            </Route>
            <Route exact path="/item/:id">
                <ItemDetailContainer/>
            </Route>
            <Route exact path="/ItemListContainer">
                <ItemListContainer
                    greeting="Products"
                    products={items}
                />
            </Route>
            <Route exact path="/cart">
                <Carrito/>
            </Route>
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default App
