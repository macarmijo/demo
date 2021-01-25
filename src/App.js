import React from 'react'
import Header from './components/Header'
import Main from './Main'
import "./estilos.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faCoffee, faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carrito from './components/Carrito'
import AboutMe from './components/AboutMe'
import CartState from './components/CartState'
// import {firestore} from "./firebaseConfig"


library.add( faShoppingCart, faCoffee )

const App = () => {

// const [items, setItems] = useState([]) //no lo usa

    // useEffect(() => {
    //     const db = firestore
    //     const collection = db.collection("items")
    //     const query = collection.get()
    
    //     const query = collection.where("categoryId", "==", "2")
    //       

    //     query
    //     .then(({docs})=>{   //hace destructuring de docs
                // const arr=[]

                // docs.forEach(doc => {
                //     const nuevoDoc = {
                //         id: doc.id,
                //         ...doc.data()
                //     }
                //     arr.push(nuevoDoc)
                // })



     //-------------- esto no ------------
    //         const items_array = resultado.docs
    //         items_array.forEach(item =>{
    //             const productoFinal = {
    //                 id: item.id,
    //                 // chequear ...
    //                 ...item.data()
    //             }
    //-------------- esto no ------------
    //             // console.log(item.id)
    //             // console.log(item.data())
    //         })
    //         // console.log(resultado.docs)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }, [])

    return (
        <>
        <BrowserRouter>
        <Header/>
        {/* <CartState></CartState> */}
        <CartState>
        <Switch>
            <Route exact path="/">
                <Main/>
                <ItemListContainer
                greeting="Products"
                /> 
            </Route>
            <Route exact path="/category/:id">
                <ItemListContainer
                />
            </Route>
            <Route exact path="/item/:id">
                <ItemDetailContainer/>
            </Route>
            <Route exact path="/ItemListContainer">
                <ItemListContainer
                    greeting="Products"
                />
            </Route>
            <Route exact path="/cart">
                <Carrito/>
            </Route>
            <Route exact path="/aboutMe">
                <AboutMe/>
            </Route>
        </Switch>
        </CartState>
        </BrowserRouter>
        </>
    )
}

export default App
