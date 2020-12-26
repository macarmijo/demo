import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header>
            <div class="header">
                    <section class = "left">
                    <img src="./MVP.jpg" class="mvp" alt="mvp"></img>
                    </section>
                    <section class="right">
                    <Navbar/>
                    </section>
            </div>
        </header>
    )
}

export default Header
