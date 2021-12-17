import React from 'react'
import lodingImg from "./images/loading.png"

import logo from "./images/header-logo.png"


function MainPage() {


    return (
       
        <section className="mainContent">
            
            <div className="loadingContainer">
                <img src={lodingImg} className="loadingImg"></img>   
            </div>
            <div className="currentLevel">
                <h3>level 1</h3>
            </div>
            <div className="cardsWrapper">
                <div className="card">
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"></img>
                    <p>Rick Sanchez</p>
                </div>
                <div className="card">
                    <img src="https://rickandmortyapi.com/api/character/avatar/638.jpeg"></img>
                    <p>Rick Sanchez</p>
                </div>
                <div className="card">
                    <img src="https://rickandmortyapi.com/api/character/avatar/545.jpeg"></img>
                    <p>Rick Sanchez</p>
                </div>
                <div className="card">
                    <img src="https://rickandmortyapi.com/api/character/avatar/123.jpeg"></img>
                    <p>Rick Sanchez</p>
                </div>
                <div className="card">
                    <img src="https://rickandmortyapi.com/api/character/avatar/17.jpeg"></img>
                    <p>Rick Sanchez</p>
                </div>
                <div className="card">
                    <img src="https://rickandmortyapi.com/api/character/avatar/76.jpeg"></img>
                    <p>Rick Sanchez</p>
                </div>
                <div className="card">
                    <img src="https://rickandmortyapi.com/api/character/avatar/643.jpeg"></img>
                    <p>Rick Sanchez</p>
                </div>
                <div className="card">
                    <img src="https://rickandmortyapi.com/api/character/avatar/412.jpeg"></img>
                    <p>Rick Sanchez</p>
                </div>
                <div className="card">
                    <img src="https://rickandmortyapi.com/api/character/avatar/423.jpeg"></img>
                    <p>Rick Sanchez</p>
                </div>
                <div className="card">
                    <img src="https://rickandmortyapi.com/api/character/avatar/23.jpeg"></img>
                    <p>Rick Sanchez</p>
                </div>
            </div>
            </section>
 
    )
}

export default MainPage