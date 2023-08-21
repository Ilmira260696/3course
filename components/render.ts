import { cards } from './cards'
import { coverCard } from './cards'
import { isPlaying } from './isPlaying'
import { gameComplexity } from '../index'
import { resultGame } from './resultGame'
import { timer } from './timer'

export function renderGame(level: number) {
    const min: number = 0
    const sec: number = 0
    let currentDate: Date
    let combDate: string
    function getCurrentDate() {
        return (currentDate = new Date())
    }
    let id: NodeJS.Timer

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

    setTimeout(() => {
        id = timer(min, sec)
        getCurrentDate()
    }, 5000)

    let modalEl = document.getElementById('modal')
    let clickable: boolean = true
    let firstCard: number
    let secondCard: number
    let game: number = level

    function showCard() {
        // isPlaying(backSide)

        const approach = document.getElementById('approach')
        if (approach) {
            approach.innerHTML = `${backSide.join('')}`
           
        }
        const buttonOverGame = document.getElementById('submit-button')

        if (buttonOverGame) {
            buttonOverGame.addEventListener('click', () => {
                gameComplexity()
            })
        }
   
        
        if (approach) {
            let itemCards = document.querySelectorAll(
                ".close",
            );
    
            const itemCardsArray = Array.from(itemCards)
            for (const itemCard of itemCardsArray) {
                itemCard.addEventListener('click', () => {
                    let cardIndex = Number(
                        (itemCard as HTMLElement).dataset.index,
                    )
                    if (clickable) {
                        firstCard = cardIndex
                        game = --game
                        backSide[cardIndex] = sortCardArray[cardIndex]
                        if (approach) {
                            approach.innerHTML = `${backSide.join('')}`
                           
                        }
                        // isPlaying(backSide)
                        showCard()
                    } else {
                        secondCard = cardIndex
                        game = --game
                        backSide[cardIndex] = sortCardArray[cardIndex]
                        if (approach) {
                            approach.innerHTML = `${backSide.join('')}`
                           
                        }
                        // isPlaying(backSide)
                        showCard()
                        compareCard(firstCard, secondCard)
                       
                    }

                    clickable = !clickable
                })
            }
        }
    }
    const cardsHeader: HTMLElement | null = document.querySelector('.card-game')

    setTimeout(showCard, 5000)
    function compareCard(firstCard: number, secondCard: number) {
        if (sortCardArray[firstCard] === sortCardArray[secondCard]) {
            backSide[secondCard] = sortCardArray[secondCard]
            if (game === 0) {
                ;(modalEl as HTMLElement).style.display = 'block'
                resultGame(game, cardsHeader, currentDate, combDate)
                clearInterval(id)
            } else {
                showCard()
            }
        } else {
            backSide = sortCoverCard
            ;(modalEl as HTMLElement).style.display = 'block'
            clickable = false
            resultGame(game, cardsHeader, currentDate, combDate)
            clearInterval(id)
        }
    }
}
