import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'


const products = [
    { id: 1 ,titulo: "Breakfast", precio: "8", 
    imagen: "https://i.ibb.co/tcGJ4rd/breakfast.jpg",
    stock: 5 ,initial: 1, description: "alguna descripción", categoryId: "Breakfast" },
  
    { id: 2 ,titulo: "Mediterranean" ,precio: "10" ,
      imagen: "https://i.ibb.co/wCnfmj0/chicken.jpg",
      stock: 5, initial: 1, description: "alguna descripción", categoryId: "Dinner & Lunch" },
    
    { id: 3 ,titulo: "Gluten Free" ,precio: "20" ,
      imagen: "https://i.ibb.co/HTqv8mm/gluten-Free.jpg",
      stock: 6 ,initial: 1, description: "alguna descripción", categoryId: "Ejemplo" },
    
    { id: 4 ,titulo: "Low carb" ,precio: "30" ,
    imagen: "https://i.ibb.co/M6DMj1G/low-carb.webp",
    stock: 9 ,initial: 1, description: "alguna descripción", categoryId: "Ejemplo" },
    
    { id: 5 ,titulo: "Healthy heart" ,precio: "25" ,
    imagen: "https://i.ibb.co/QcrT8xS/healthy.png",
    stock: 10 ,initial: 1, description: "alguna descripción", categoryId: "Ejemplo" },
      
    { id: 6 ,titulo: "Vegan" ,precio: "30" ,
      imagen: "https://i.ibb.co/MnKVg7B/vegan.png",
      stock: 6 ,initial: 1, description: "alguna descripción", categoryId: "Non-meat Meals" },
    
    { id: 7, titulo: "Veggie", precio: "30", 
      imagen: "https://i.ibb.co/Wt8TR71/veggie.png",
      stock: 10 ,initial: 1, description: "alguna descripción", categoryId: "Non-meat Meals" },
      
    { id: 8, titulo: "Protein" ,precio: "20" ,
    imagen: "https://i.ibb.co/PxLhX1h/beef.jpg",
    stock: 3 ,initial: 1, description: "alguna descripción", categoryId: "Dinner & Lunch" }
    ]


const ItemListContainer = ({greeting}) => {

    const [ items, setItems ] = useState([])

    const {id} = useParams()

    useEffect(() => {
      // Tomo los productos que me envía App y, si hay un id, filtro todos para agarrar sólo los que
      // tengan el id señalado
      if(id){
          const category = products.filter(product => product.categoryId === id )
          setItems(category)
          console.log(category)
      }
      else{
          setItems(products)
      }

  }, [id, products]);

    return (
        <div className="itemList">
          {id ? <h1>{id}</h1>
          :<h1>{greeting}</h1>  
          } 
            {products.length > 0 
            ? <ItemList products = { items } /> 
            : <h1 className="loading">Loading...</h1>}
        </div>
    )
}

export default ItemListContainer

