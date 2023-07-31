export function renderGame (level, appEl, label) {
    const appHtml = `
    <div class="content center">
     <div class="top__content">
     <h3 class="top__content_title">${level.value} уровень сложности </h3>
       </div>
        </div> `;
        appEl.innerHTML = appHtml;    
}