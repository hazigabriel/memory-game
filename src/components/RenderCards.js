import React from 'react'
 
function RenderCard(props) {
    const {charName, imgSource, cardId, selected, handleClick} = props;
    return (
        <div className="card" data-selected={selected} key={cardId} id={cardId} onClick={handleClick}>
            <img src={imgSource}></img>
            <p>{charName}</p>
        </div>
    )
}
 
export default RenderCard