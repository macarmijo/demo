import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'

const products = [
    { id: 1 ,titulo: "Breakfast", precio: "8", 
    imagen: "https://i.ibb.co/tcGJ4rd/breakfast.jpg",
    stock: 5 ,initial: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", categoryId: "1" },
  
    { id: 2 ,titulo: "Mediterranean" ,precio: "10" ,
      imagen: "https://i.ibb.co/wCnfmj0/chicken.jpg",
      stock: 5, initial: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", categoryId: "2" },
    
    { id: 3 ,titulo: "Gluten Free" ,precio: "20" ,
      imagen: "https://i.ibb.co/HTqv8mm/gluten-Free.jpg",
      stock: 6 ,initial: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", categoryId: "3" },
    
    { id: 4 ,titulo: "Low carb" ,precio: "30" ,
    imagen: "https://i.ibb.co/M6DMj1G/low-carb.webp",
    stock: 9 ,initial: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", categoryId: "3" },
    
    { id: 5 ,titulo: "Healthy heart" ,precio: "25" ,
    imagen: "https://i.ibb.co/QcrT8xS/healthy.png",
    stock: 10 ,initial: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", categoryId: "3" },
      
    { id: 6 ,titulo: "Vegan" ,precio: "30" ,
      imagen: "https://i.ibb.co/MnKVg7B/vegan.png",
      stock: 6 ,initial: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", categoryId: "4" },
    
    { id: 7, titulo: "Veggie", precio: "30", 
      imagen: "https://i.ibb.co/Wt8TR71/veggie.png",
      stock: 10 ,initial: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", categoryId: "4" },
      
    { id: 8, titulo: "Protein" ,precio: "20" ,
    imagen: "https://i.ibb.co/PxLhX1h/beef.jpg",
    stock: 3 ,initial: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", categoryId: "2" }
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
              key={item.id}
              title={item.titulo}     
              price={item.precio}
              image={item.imagen}
              description={item.description}
              stock={item.stock}
              initial={item.initial}
              />
            : <h1 className="loading">Loading...</h1> 
            }
        </div>
    )
}

export default GetItem
