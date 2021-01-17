import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'

const products = [
    { id: 1 ,titulo: "Breakfast", precio: "8", 
    imagen: "https://i.ibb.co/tcGJ4rd/breakfast.jpg",
    stock: 5 ,initial: 1, description: "alguna descripción", category: "Breakfast" },
  
    { id: 2 ,titulo: "Mediterranean" ,precio: "10" ,
      imagen: "https://i.ibb.co/wCnfmj0/chicken.jpg",
      stock: 5, initial: 1, description: "alguna descripción", category: "Dinner & Lunch" },
    
    { id: 3 ,titulo: "Gluten Free" ,precio: "20" ,
      imagen: "https://i.ibb.co/HTqv8mm/gluten-Free.jpg",
      stock: 6 ,initial: 1, description: "alguna descripción", category: "ejemplo" },
    
    { id: 4 ,titulo: "Low carb" ,precio: "30" ,
    imagen: "https://i.ibb.co/M6DMj1G/low-carb.webp",
    stock: 9 ,initial: 1, description: "alguna descripción", category: "ejemplo" },
    
    { id: 5 ,titulo: "Healthy heart" ,precio: "25" ,
    imagen: "https://i.ibb.co/QcrT8xS/healthy.png",
    stock: 10 ,initial: 1, description: "alguna descripción", category: "ejemplo" },
      
    { id: 6 ,titulo: "Vegan" ,precio: "30" ,
      imagen: "https://i.ibb.co/MnKVg7B/vegan.png",
      stock: 6 ,initial: 1, description: "alguna descripción", category: "Non-meat Meals" },
    
    { id: 7, titulo: "Veggie", precio: "30", 
      imagen: "https://i.ibb.co/Wt8TR71/veggie.png",
      stock: 10 ,initial: 1, description: "alguna descripción", category: "Non-meat Meals" },
      
    { id: 8, titulo: "Protein" ,precio: "20" ,
    imagen: "https://i.ibb.co/PxLhX1h/beef.jpg",
    stock: 3 ,initial: 1, description: "alguna descripción", category: "Dinner & Lunch" }
    ]

const GetItem = () => {
    
    const [ item, setItem ] = useState()
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve)=>{
        setTimeout(function(){
            const i = products.find(product => product.id == id)
            console.log(i)
            resolve(i); 
        }, 2000);
        }
        )
        promesa.then( result => setItem(result) ) 
        promesa.catch( err => console.log("Algo salio mal") ) 

    },  [id]);


    return (
        <div>
            { item 
            ? <ItemDetail
              id={item.id}
              title={item.titulo}     
              price={item.precio}
              image={item.imagen}
              description={item.description}
              stock={item.stock}
              initial={item.initial}
              />
            : <h2>Loading</h2> 
            }
        </div>
    )
}

export default GetItem
