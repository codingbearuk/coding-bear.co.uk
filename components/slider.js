function slider(data){
    //Slide counter
    let slideValue = 0;
    //choose/create DOM elements
    const container = document.querySelector('.middle-container');
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    sliderContainer.innerHTML = `
        <div id="behind">
            <img id="prev" src="${data[0].prev}" />
        </div>
        <div id="slider-content">
            <h1>${data[0].slider[slideValue].title}</h1>
            <p>${data[0].slider[slideValue].content}</p>
        </div>
        <div id="forvard">
            <img id="next" src="${data[0].next}" />
        </div>
    `
    container.appendChild(sliderContainer);

    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const content = document.querySelector('#slider-content');

    window.setInterval( () => {
        if(slideValue < 3){
            slideValue++;
            content.innerHTML = `
                <h1>${data[0].slider[slideValue].title}</h1>
                <p>${data[0].slider[slideValue].content}</p>
            `;
        }else{
            slideValue = 0;
            content.innerHTML = `
                <h1>${data[0].slider[slideValue].title}</h1>
                <p>${data[0].slider[slideValue].content}</p>
            `;
        }
    }, 5000);

    prev.addEventListener('click',function(){
        if(slideValue >= 0){
            slideValue--;
            content.innerHTML = `
                <h1>${data[0].slider[slideValue].title}</h1>
                <p>${data[0].slider[slideValue].content}</p>
            `;
        }else{
            slideValue = 3;
            content.innerHTML = `
                <h1>${data[0].slider[slideValue].title}</h1>
                <p>${data[0].slider[slideValue].content}</p>
            `;
        }
    });
    next.addEventListener('click',() => {
        if(slideValue < 3){
            slideValue++;
            content.innerHTML = `
                <h1>${data[0].slider[slideValue].title}</h1>
                <p>${data[0].slider[slideValue].content}</p>
            `;
        }else{
            slideValue = 0;
            content.innerHTML = `
                <h1>${data[0].slider[slideValue].title}</h1>
                <p>${data[0].slider[slideValue].content}</p>
            `;
        }
    });
}

export default slider;