import { renderGame } from "./render.js";
function gameComplexity () {
let appEl = document.getElementById ('app');

const appHtml = `
<div class="content center">
<form id="form-level" class="top__content" method="POST"  action="#">
<div class="top__content">
    <h1 class="top__content_title"> Выбери <br>сложность</h1> 
   
<div class="radio-toolbar"> 
    <input class="radio-toolbar__radio" type="radio" id="radio1" name="radios" value="6">
    <label class="radio-toolbar__label" for="radio1">1</label>
    
    <input class="radio-toolbar__radio" type="radio" id="radio2" name="radios" value="12">
    <label class="radio-toolbar__label" for="radio2">2</label>
    
    <input class="radio-toolbar__radio" type="radio" id="radio3" name="radios" value="18">
    <label class="radio-toolbar__label" for="radio3">3</label>
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