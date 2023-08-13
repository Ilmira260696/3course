import { cards } from './cards'
import { coverCard } from './cards'
import { isPlaying } from './isPlaying'
import { gameComplexity } from '../index'
import { resultGame } from './resultGame'
// import { counterTime } from './timer'

export function renderGame(level: number) {
   
   
    let min = "00";
    let sec = "00";
    let id;
    

    // let levelGame = level.value
    let sortCardArray = cards
        .sort(() => Math.random() - 0.5)
        .slice(0, level / 2)
    sortCardArray = sortCardArray
        .concat(sortCardArray)
        .sort(() => Math.random() - 0.5)
    let sortCoverCard = coverCard.slice(0, level)
    let backSide: string[] = []
    backSide = sortCoverCard
    isPlaying(sortCardArray)


    // const minute = document.getElementById("min");
    // console.log(minute);
    // const second = document.getElementById("sec");
    // console.log(second);

    // setTimeout(() => {
    //     id = counterTime(min, sec, minute, second);
    // }, 5000);

    let modalEl=document.getElementById('modal')
    let clickable: boolean = true
    let firstCard: number
    let secondCard: number
    let game: number = level
    let winGame: boolean = false;
    function showCard() {
        isPlaying(backSide)
        const buttonOverGame = document.getElementById('submit-button')
        
        if (buttonOverGame) {
            buttonOverGame.addEventListener('click', () => {
                
                gameComplexity()
            })
        }
        const approach = document.getElementById('approach')
        if (approach) {
            let itemCards = approach.children
            
           
       

            const itemCardsArray = Array.from(itemCards)
            // let modalEl=document.getElementById('modal')
            for (const itemCard of itemCardsArray) {
                itemCard.addEventListener('click', () => {
                    let cardIndex = Number(
                        (itemCard as HTMLElement).dataset.index,
                    )
                    if (clickable) {
                        firstCard = cardIndex
                        // game = --game
                        backSide[cardIndex] = sortCardArray[cardIndex]
                       
                        isPlaying(backSide)
                        showCard()
                        
                    } else {
                        secondCard = cardIndex
                        // game = --game
                        backSide[cardIndex] = sortCardArray[cardIndex]
                        compareCard(firstCard, secondCard)
                        isPlaying(backSide)
                        showCard()
                        game=game-2
                        if(game===0){
                            winGame = !winGame;
                            if(cardsHeader){
                                cardsHeader.style.opacity = ".3";
                            } 
                            resultGame(game, cardsHeader)
                        }
                       
                    }
                    
                    clickable = !clickable
                })
            }
        }
    }
    const cardsHeader: HTMLElement | null =
            document.querySelector('.card-game')
            
    setTimeout(showCard, 5000)
    function compareCard(firstCard: number, secondCard: number) {
        if (sortCardArray[firstCard] === sortCardArray[secondCard]) {
            backSide[secondCard]=sortCardArray[secondCard]
        if(game===0){
            (modalEl as HTMLElement).style.display = 'block'
          resultGame(game,cardsHeader)
        }
        else{showCard()}
        } else {
            backSide = sortCoverCard;
            (modalEl as HTMLElement).style.display = 'block'
            resultGame(game, cardsHeader)
            // if(cardsHeader){
            //     cardsHeader.style.opacity = ".3";
            // }
            clickable = false
        
    }
}
}
