export function isPlaying(backSide:string[]) {
    let appEl = document.getElementById('app')
    const appHtml = `<div class="card-game">
    <header class="card-game-timer">
    <div class="top">
    <div class="duration-time">
    <p class="duration">min</p>
    <p class="duration">sek</p>
    </div>
    <div class="timer-counter">
     <span  id="min">00</span>
     <span  id="sec">00</span>
    </div>
    </div>
    <button class="button-two" id="submit-button" type="submit" >Начать заново</button>
</header>
<div class="approach center" id="approach">${backSide.join('')}</div>      
</div> `
if(appEl){
    appEl.innerHTML = appHtml
}
}