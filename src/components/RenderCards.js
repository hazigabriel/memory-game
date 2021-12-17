import React from 'react'
import {gameLogic} from './GameLogic'

function RenderCards(props) {
    function renderCard(charName, imgSource ) {
        return (
            <div className="card" data-selected={false} onClick={gameLogic}>
                <img src={imgSource}></img>
                <p>{charName}</p>
            </div>
        )
    }
  
    return (
        <div className="mainContent">
            <div className="cardsWrapper">     
                {props.cards.map((elem) => {
                    return (
                    renderCard(elem[0], elem[1])
                    )
                })}
            </div>
        </div>
    )
}
 
export default RenderCards