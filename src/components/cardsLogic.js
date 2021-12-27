import {useEffect} from 'react'


function CardsLogic(props) {

    const randomCharacterNumber = () => {
         //return a random number between 1 and 826
         //as our api currently has 826 possible characters
        let number = Math.floor(Math.random() * 826)
        if(number < 1) {
            return number + 1
        }
        return number
     }

    
    //no of cards per row, to be multiplied by the level no, for eg for for level one we have 4 cards, 
    //1*4, for level two we have 8 cards, 2*4
    const cardsNo = props.currentLevel * 4 ; 
    useEffect(() => {
        let loadingImg = document.querySelector(".loadingImg");
        
        if(props.startOver === false) {
            loadingImg.style.display = "block";
        } else {

            if(cardsNo === props.tempCards.length){
                //we fetch new cards until the level requirement is met 
                loadingImg.style.display = "none";
                props.setCards(props.tempCards)
                

            } else {
                loadingImg.style.display = "block";

                fetch("https://rickandmortyapi.com/api/character/"+randomCharacterNumber())
                .then(result => result.json())
                .then(
                    (result) => {
                        let selected = false;
                        let newCard = [result.name, result.image, props.tempCards.length, selected]
                        props.setTempCards([...props.tempCards, newCard])
                        
                    },
                    (error) => {
                        alert("Error loading API, press OK to try again")
                    }
                )
            }
        }
    }, [props.tempCards, cardsNo, props.startOver])
    return (
        null
    )
}

export default CardsLogic 
