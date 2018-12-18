const langBar = function(){
    const language = document.createElement('div');
    language.classList.add('lang');
    document.body.appendChild(language);
    language.innerHTML = `
        <div class = "pl">PL</div>
        <div class = "eng active">EN</div>
    `;
}


export default langBar;