import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './Main'
import "./estilos.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faCoffee } from '@fortawesome/free-solid-svg-icons'
import ItemListContainer from './components/ItemListContainer'

library.add( faShoppingCart, faCoffee )

const App = () => {
    return (
        <>
        <Header/>
        <Main/>
        <ItemListContainer
            greeting="Lista de productos"
        />
        <Footer/>
        </>
    )
}

export default App
