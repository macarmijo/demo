import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="introHeader">
               <Link to="/">
                <h1>Khyl Porcelli</h1>
               </Link> 
            </div>
            <div className="header"> 
                <Navbar/>
            </div>
        </header>
    )
}

export default Header
