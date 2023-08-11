export function isPlaying(backSide:string[]) {
    let appEl = document.getElementById('app')
    const appHtml = `<div class="card-game">
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
if(appEl){
    appEl.innerHTML = appHtml
}
}