import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header>
            <div className="introHeader">
                <h1>Khyl Porcelli</h1>
            </div>
            <div className="header"> 
                <Navbar/>
            </div>
        </header>
    )
}

export default Header
