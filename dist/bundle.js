(()=>{const s=['<img class="game-cards" src="../static/img/туз черви.png">','<img class="game-cards" src="../static/img/туз пики.png">','<img class="game-cards" src="../static/img/туз крести.png">','<img class="game-cards" src="../static/img/туз бубны.png">','<img class="game-cards" src="../static/img/король черви.png">','<img class="game-cards" src="../static/img/король пики.png">','<img class="game-cards" src="../static/img/король крести.png">','<img class="game-cards" src="../static/img/король бубны.png">','<img class="game-cards" src="../static/img/дама черви.png">','<img class="game-cards" src="../static/img/дама пики.png">','<img class="game-cards" src="../static/img/дама крести.png">','<img class="game-cards" src="../static/img/дама бубны.png">','<img class="game-cards" src="../static/img/валет черви.png">','<img class="game-cards" src="../static/img/валет пики.png">','<img class="game-cards" src="../static/img/валет крести.png">','<img class="game-cards" src="../static/img/валет бубны.png">','<img class="game-cards" src="../static/img/10 черви.png">','<img class="game-cards" src="../static/img/10 пики.png">','<img class="game-cards" src="../static/img/10 крести.png">','<img class="game-cards" src="../static/img/10 бубны.png">','<img class="game-cards" src="../static/img/9 черви.png">','<img class="game-cards" src="../static/img/9 пики.png">','<img class="game-cards" src="../static/img/9 крести.png">','<img class="game-cards" src="../static/img/9 бубны.png">','<img class="game-cards" src="../static/img/8 черви.png">','<img class="game-cards" src="../static/img/8 пики.png">','<img class="game-cards" src="../static/img/8 крести.png">','<img class="game-cards" src="../static/img/8 бубны.png">','<img class="game-cards" src="../static/img/7 черви.png">','<img class="game-cards" src="../static/img/7 пики.png">','<img class="game-cards" src="../static/img/7 крести.png">','<img class="game-cards" src="../static/img/7 бубны.png">','<img class="game-cards" src="../static/img/6 черви.png">','<img class="game-cards" src="../static/img/6 пики.png">','<img class="game-cards" src="../static/img/6 крести.png">','<img class="game-cards" src="../static/img/6 бубны.png">'],a=[];for(let s=0;s<36;s++)a.push(`<img src="./static/img/рубашка.png" class="cover-card" data-index="${s}">`);function c(s,a){const c=`<div class="card-game">\n    <header class="card-game-timer">\n    <div class="top">\n    <div class="duration-time">\n    <p class="duration">min</p>\n    <p class="duration">sek</p>\n    </div>\n    <time class="time">00.00</time>\n    </div>\n    <button class="button-two" id="submit-button" type="submit" >Начать заново</button>\n</header>\n<div class="approach center" id="approach">${s.join("")}</div>      \n</div> `;a.innerHTML=c}function i(i){let t=i.value,g=s.sort((()=>Math.random()-.5)).slice(0,t/2);g=g.concat(g).sort((()=>Math.random()-.5));let r=a.slice(0,t),m=[];m=r,c(g);let e=!0,n=null,l=null;function d(s,a){g[s]===g[a]?(m[a]=g[a],alert("Вы выиграли!")):(m=r,alert("Вы проиграли"))}setTimeout((function s(){c(m);let a=document.getElementById("approach").children;for(const i of a)i.addEventListener("click",(()=>{let a=i.dataset.index;e?(n=a,m[a]=g[a],c(m),s()):(l=a,d(n,l),c(m),s()),e=!e}))}),500)}document.getElementById("app").innerHTML='\n<div class="content center">\n<form id="form-level" class="top-content" method="POST"  action="#">\n<div class="top-content">\n    <h1 class="top-content-title"> Выбери <br>сложность</h1> \n   \n<div class="radio-toolbar"> \n    <input class="radio-toolbar-radio" type="radio" id="radio1" name="radios" value="6">\n    <label class="radio-toolbar-label" for="radio1" value="1">1</label>\n    \n    <input class="radio-toolbar-radio" type="radio" id="radio2" name="radios" value="12">\n    <label class="radio-toolbar-label" for="radio2" value="2">2</label>\n    \n    <input class="radio-toolbar-radio" type="radio" id="radio3" name="radios" value="18">\n    <label class="radio-toolbar-label" for="radio3" value="3">3</label>\n</div> \n    <button class="form-button" id="submit-button" type="submit">Старт</button>\n    </form>\n    </div>   \n</div>',document.getElementById("form-level").addEventListener("submit",(s=>{s.preventDefault(),console.log(s);let a=document.querySelectorAll(".radio-toolbar-radio");for(const s of a)s.checked&&i(s)}))})();