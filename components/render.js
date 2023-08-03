// import { cards } from './cards.js'
export function renderGame(level, appEl) {
    const appHtml = `
<div class="title">
<header> 
    <div class="top">
    <div class="duration-time">   
       <p class="duration">min</p>
       <p class="duration">sek</p>
    </div>
    <time class="time">00.00</time> 
    </div>

       <button class="button-two" id="submit-button" type="submit" >Начать заново</button>
</header>

       
</div> 
`
    appEl.innerHTML = appHtml
}

// <div class="top__content">
// <h3 class="top__content_title">${level.value} уровень сложности </h3>
