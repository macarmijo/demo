import React, { useState, useEffect } from 'react'
import Header from './components/Header'
// import Footer from './components/Footer'
import Main from './Main'
import "./estilos.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faCoffee } from '@fortawesome/free-solid-svg-icons'
import ItemListContainer from './components/ItemListContainer'

library.add( faShoppingCart, faCoffee )

{/* <img src="https://i.ibb.co/tcGJ4rd/breakfast.jpg" alt="breakfast" border="0"></>
<img src="https://i.ibb.co/zsMR9PR/beef.jpg" alt="beef" border="0"></>
<img src="https://i.ibb.co/wCnfmj0/chicken.jpg" alt="chicken" border="0"></>
<img src="https://i.ibb.co/HTqv8mm/gluten-Free.jpg" alt="gluten-Free" border="0"></>
<img src="https://i.ibb.co/M6DMj1G/low-carb.webp" alt="low-carb" border="0"></>
<img src="https://i.ibb.co/MnKVg7B/vegan.png" alt="vegan" border="0"></>
<img src="https://i.ibb.co/QcrT8xS/healthy.png" alt="healthy" border="0"></>
<img src="https://i.ibb.co/Wt8TR71/veggie.png" alt="veggie" border="0"></> */}

const products = [{
    id: 1,
    titulo: "Protein",
    precio: "20",
    imagen: "https://i.ibb.co/PxLhX1h/beef.jpg",
    description: "protein description",
    stock: 3,
    initial: 1

  },{
    id: 2,
    titulo: "Mediterranean",
    precio: "10",
    imagen: "https://i.ibb.co/wCnfmj0/chicken.jpg",
    description: "mediterranean description",
    stock: 5,
    initial: 2
  },{
    id: 3,
    titulo: "Gluten Free",
    precio: "20",
    imagen: "https://i.ibb.co/HTqv8mm/gluten-Free.jpg",
    description: "gluten free description",
    stock: 6,
    initial: 1
  },{
    id: 4,
    titulo: "Healthy heart",
    precio: "25",
    imagen: "https://i.ibb.co/QcrT8xS/healthy.png",
    description: "healthy heart description",
    stock: 6,
    initial: 1
  },{
    id: 5,
    titulo: "Low carb",
    precio: "30",
    imagen: "https://i.ibb.co/M6DMj1G/low-carb.webp",
    description: "loow carb description",
    stock: 6,
    initial: 1
  },{
    id: 6,
    titulo: "Vegan",
    precio: "30",
    imagen: "https://i.ibb.co/MnKVg7B/vegan.png",
    description: "vegan description",
    stock: 6,
    initial: 1
  },{
    id: 7,
    titulo: "Veggie",
    precio: "30",
    imagen: "https://i.ibb.co/Wt8TR71/veggie.png",
    description: "veggie description",
    stock: 6,
    initial: 1
  },{
    id: 8,
    titulo: "Breakfast",
    precio: "8",
    imagen: "https://i.ibb.co/tcGJ4rd/breakfast.jpg",
    description: "breakfast description",
    stock: 6,
    initial: 1
  }
  ]


const App = () => {

  const [ items, setItems ] = useState([])

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
        reject("No se pudieron cargar los productos")   
      }, 2000);
    })

    promesa.then( result => setItems(result) ) 
    promesa.catch( err => console.log("Algo salio mal") ) 

  }, []);


    return (
        <>
        <Header/>
        <Main/>
        <ItemListContainer
            greeting="Products"
            products={ items }
        />
        {/* <Footer/> */}
        </>
    )
}

export default App
