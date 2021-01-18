import React from 'react'
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


const App = () => {

    return (
        <>
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/">
                <Main/>
                <ItemListContainer
                greeting="Products"
                /> 
            </Route>
            <Route exact path="/category/:id">
                <ItemDetailContainer
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
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default App
