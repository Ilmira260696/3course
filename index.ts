import './style.css'
import { renderGame } from './components/render'
export function gameComplexity() {
    let appEl = document.getElementById('app')

    const appHtml = `
<div class="content center">
<form id="form" class="top-content" method="POST"  action="#">
<div class="top-content">
    <h1 class="top-content-title"> Выбери <br>сложность</h1> 
   
<div class="radio-toolbar"> 
    <input class="radio-toolbar-radio" type="radio" id="radio1" name="radios" value="6">
    <label class="radio-toolbar-label" for="radio1" value="1">1</label>
    
    <input class="radio-toolbar-radio" type="radio" id="radio2" name="radios" value="12">
    <label class="radio-toolbar-label" for="radio2" value="2">2</label>
    
    <input class="radio-toolbar-radio" type="radio" id="radio3" name="radios" value="18">
    <label class="radio-toolbar-label" for="radio3" value="3">3</label>
</div> 
    <button class="form-button" id="submit-button" type="submit">Старт</button>
    </form>
    </div>   
</div>`
    if (appEl) {
        appEl.innerHTML = appHtml
        const form = document.getElementById('form')
        if (form) {
            form.addEventListener('submit', (a) => {
                a.preventDefault()

                let levelsPoints = document.querySelectorAll(
                    '.radio-toolbar-radio',
                )
                const levelsPointsArray = Array.from(levelsPoints)
                for (let levelsPoints of levelsPointsArray) {
                    if ((levelsPoints as HTMLInputElement).checked) {
                        let level: number = Number(
                            (levelsPoints as HTMLInputElement).value,
                        )
                        renderGame(level)
                    }
                }
            })
        }
    }
}

gameComplexity()
