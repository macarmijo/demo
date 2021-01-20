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
import AboutMe from './components/AboutMe'

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
        </BrowserRouter>
        </>
    )
}

export default App
