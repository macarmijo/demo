import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './Main'
import "./estilos.css"
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add( faShoppingCart, faCoffee )

const App = () => {
    return (
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
    )
}

export default App
