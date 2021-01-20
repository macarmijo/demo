import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <main>
            <div className="title">
                <h1 className="titleText">MEAL PLANS</h1>
                <h3 className="titleText">2 weeks of meals planned for you!</h3>
                <Link to="/itemListContainer"><button className="titleText mealButton"><a>click to check meal plans</a></button></Link>
                <div className="titleImg">
                    <img src="./fondo1.jpg" className="banner" alt="banner"></img>
                    <img src="./fondoResponsive.jpg" className="bannerRes" alt="banner"></img>
                </div>
            </div>
        </main>
    )
}

export default Main
