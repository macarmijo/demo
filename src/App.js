import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './Main'
import "./estilos.css"
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add( faShoppingCart, faCoffee )

function App() {
    return (
        <>
        <Header
            hacerClick = { () => {console.log("click")} }
        />
        <Main/>
        <Footer/>
        </>
    )
}

export default App
