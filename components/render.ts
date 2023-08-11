import { cards } from './cards'
import { coverCard } from './cards'
import { isPlaying } from './isPlaying'
import { gameComplexity } from '../index'
import { resultGame } from './resultGame'

export function renderGame(level: number) {
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
    let clickable: boolean = true
    let firstCard: number
    let secondCard: number
    let game: number = level
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
            for (const itemCard of itemCardsArray) {
                itemCard.addEventListener('click', () => {
                    let cardIndex = Number(
                        (itemCard as HTMLElement).dataset.index,
                    )
                    if (clickable) {
                        firstCard = cardIndex
                        game == --game
                        backSide[cardIndex] = sortCardArray[cardIndex]
                        isPlaying(backSide)
                        showCard()
                    } else {
                        secondCard = cardIndex
                        game == --game
                        backSide[cardIndex] = sortCardArray[cardIndex]
                        compareCard(firstCard, secondCard)
                        isPlaying(backSide)
                        showCard()
                    }
                    clickable = !clickable
                })
            }
        }
    }
    const cardsHeader: HTMLElement | null =
            document.getElementById('.card-game')
    setTimeout(showCard, 2000)
    function compareCard(firstCard: number, secondCard: number) {
        if (sortCardArray[firstCard] === sortCardArray[secondCard]) {
            game === 0 ? resultGame : showCard()
        } else {
            backSide = sortCoverCard
            resultGame(game, cardsHeader)
            clickable = false
        }
    }
}
