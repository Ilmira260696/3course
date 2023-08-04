import { cards } from './cards.js'

export function renderGame(level, appEl) {
    let levelGame = level.value
    const backSide = []
    for (let i = 0; i < levelGame; i++) {
        backSide.push(`<img class='card-game-back' src='./img/рубашка.png' alt='img'>
        `)
    }
    console.log(backSide)

    const appHtml = `
<div class="card-game">
<header class="card-game-timer"> 
    <div class="top">
    <div class="duration-time">   
       <p class="duration">min</p>
       <p class="duration">sek</p>
    </div>
    <time class="time">00.00</time> 
    </div>

       <button class="button-two" id="submit-button" type="submit" >Начать заново</button>
</header>
<div class="approach center" id="approach">${backSide.join('')}</div>      
</div> `
    appEl.innerHTML = appHtml
    const reverseCards = document.querySelectorAll('.card-game-back')
    for (const reverseCard of reverseCards) {
        reverseCard.addEventListener('click', () => {
            let sortCardArray = cards.sort(() => Math.random()- 0.5).slice(0, levelGame/2)
            sortCardArray = sortCardArray.concat(sortCardArray).sort(() => Math.random() - 0.5).join('')
            const approach = document.getElementById('approach')
            approach.innerHTML = `${sortCardArray}`
            setTimeout(() => {
                renderGame(level, appEl)
            }, 5000)
        })
    }
}
