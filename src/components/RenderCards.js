import React from 'react'

function RenderCards(props) {
    function renderCard(charName, imgSource ) {
        return (
            <div className="card">
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