import React from 'react'
import {gameLogic} from './GameLogic'

function RenderCards(props) {
    function renderCard(charName, imgSource, cardId) {
        return (
            <div className="card" data-selected={false} key={cardId} id={cardId} onClick={()=>gameLogic(cardId, props.cards, props.setCards)}>
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
                    renderCard(elem[0], elem[1], elem[2])
                    )
                })}
            </div>
        </div>
    )
}
 
export default RenderCards