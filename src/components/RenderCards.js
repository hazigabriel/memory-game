import React from 'react'
 
function RenderCard(props) {
    const {charName, imgSource, cardId, selected, handleClick} = props;
    return (
        <div className="card"  data-selected={selected} id={cardId} onClick={handleClick}>
            <img src={imgSource} alt="card"></img>
            <p>{charName}</p>
        </div>
    )
}
 
export default RenderCard