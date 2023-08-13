import { gameComplexity } from '../index'
export function resultGame(game:number, cardsHeader:HTMLElement|null) {
   let modalEl=document.getElementById('modal')
    const modalHTML = `
<div class="modal center">
<div class="results center">
<div class="result__img">
${
    game === 0
        ? '<img src="../static/img/выиграли.svg" alt="выиграл" />'
        : '<img src="../static/img/проиграли.svg" alt="проиграл" />'
}
</div>
<h2 class="results-title">${
    game===0 ? 'Вы выиграли!' : 'Вы проиграли'
}</h2>
<p class="results-time">Затраченное время</p>
<div class="results-time-timer">01.20</div>
<button class="button-two" id = "button-result" type="submit">Играть снова</button>
</div>
</div>
`
if(modalEl){
modalEl.innerHTML=modalHTML
}

const buttonGame=document.getElementById('button-result')
if (buttonGame) {
    buttonGame.addEventListener('click', () => {
        if(modalEl){
            modalEl.style.display = 'none'
        }
        gameComplexity()    
    })
   
}
cardsHeader =document.querySelector('.card-game')
if(cardsHeader){
    
    cardsHeader.style.opacity = ".3";
}
}