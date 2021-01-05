import React from 'react';

function Main() {
    return (
        <main>
            <div className="title">
                <h1 className="titleText">MEAL PLANS</h1>
                <h3 className="titleText">2 weeks of meals planned for you!</h3>
                <button class="titleText mealButton"><a href="#">click to check meal plans</a></button>
                <div className="titleImg">
                    <img src="./fondo1.jpg" className="banner" alt="banner"></img>
                    <img src="./fondoResponsive.jpg" className="bannerRes" alt="banner"></img>
                </div>
            </div>
        </main>
    )
}

export default Main
