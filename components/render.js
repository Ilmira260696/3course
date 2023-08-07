import { cards } from './cards.js'
import { coverCard } from './cards.js'
import { isPlaying } from './isPlaying.js'

export function renderGame(level) {
    let levelGame = level.value
    let sortCardArray = cards
        .sort(() => Math.random() - 0.5)
        .slice(0, levelGame / 2)
    sortCardArray = sortCardArray
        .concat(sortCardArray)
        .sort(() => Math.random() - 0.5)
    let sortCoverCard = coverCard.slice(0, levelGame)
    let backSide = []
    backSide = sortCoverCard
    isPlaying(sortCardArray)
    let clickable = true
    let firstCard = null
    let secondCard = null
    function showCard() {
        isPlaying(backSide)
        const approach = document.getElementById('approach')
        let itemCards = approach.children
        for (const itemCard of itemCards) {
            itemCard.addEventListener('click', () => {
                let cardIndex = itemCard.dataset.index
                if (clickable) {
                    firstCard = cardIndex
                    backSide[cardIndex] = sortCardArray[cardIndex]
                    isPlaying(backSide)
                    showCard()
                } else {
                    secondCard = cardIndex
                    compareCard(firstCard, secondCard)
                    isPlaying(backSide)
                    showCard()
                }
                clickable = !clickable
            })
        }
    }
    setTimeout(showCard, 5000)
    function compareCard(firstCard, secondCard) {
        if (sortCardArray[firstCard] === sortCardArray[secondCard]) {
            backSide[secondCard] = sortCardArray[secondCard]
            alert('Вы выиграли!')
        } else {
            backSide = sortCoverCard
            alert('Вы проиграли')
        }
    }
}
