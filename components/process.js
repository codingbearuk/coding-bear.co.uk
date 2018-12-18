function process (data) {
    const container = document.querySelector('#process');
    const processBlock = (title, img, desc) => {
        return (
            `<div>
                <a title="${title}"><img src="${img}" alt="${title}"/>
                <h2>${title}</h2>
                <p class="hidden">${desc}</p></a>
            </div>`
        )
    }; //one div element
    
    container.innerHTML = data[1].process.map( processObj => processBlock(processObj.title,processObj.img,processObj.desc)).join('');

    //click effect
    for(let i = 0; i < container.children.length; i++){
        //console.log(container.children[i]);
        container.children[i].addEventListener('click', (e) => {
            container.children[i].classList.toggle('process-active');
            if(container.children[i].classList.contains('process-active')){
                setTimeout(()=>{
                    container.children[i].querySelector('p').classList.toggle('hidden');
                },600)
            } else{
                container.children[i].querySelector('p').classList.toggle('hidden');
            }
        });
    };
};

export default process;