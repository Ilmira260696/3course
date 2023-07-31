import { renderGame } from "./render.js";
function gameComplexity () {
let appEl = document.getElementById ('app');

const appHtml = `
<div class="content center">
<form id="form-level" class="top__content" method="POST"  action="#">
<div class="top__content">
    <h1 class="top__content_title"> Выбери <br>сложность</h1> 
   
<div class="radio-toolbar"> 
    <input class="radio-toolbar__radio" type="radio" id="radio1" name="radios" value="1">
    <label class="radio-toolbar__label" for="radio1" value="1">1</label>
    
    <input class="radio-toolbar__radio" type="radio" id="radio2" name="radios" value="2">
    <label class="radio-toolbar__label" for="radio2" value="2">2</label>
    
    <input class="radio-toolbar__radio" type="radio" id="radio3" name="radios" value="3">
    <label class="radio-toolbar__label" for="radio3" value="3">3</label>
</div> 
    <button class="form_button" id="submit-button" type="submit">Старт</button>
    </form>
    </div>   
</div>`;

appEl.innerHTML = appHtml;

document.getElementById('form-level').addEventListener('submit', (a) => {
    a.preventDefault();
    console.log(a);
    let levels = document.querySelectorAll (".radio-toolbar__radio");
    for (const level of levels) {
        if (level.checked) {
            renderGame  (level, appEl);
        }
    }
})
}
gameComplexity ();

