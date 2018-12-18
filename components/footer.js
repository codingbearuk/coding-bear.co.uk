function footer(data){
    const container = document.querySelector('footer');
    container.innerHTML = `
        <div id="copyright">${data[6].copyright}</div>
    `;
    //screen resolution background
    if(window.innerWidth < 500){
        container.setAttribute('style',`background-image: url(${data[6].backgroundMobile})`);
    }else if(window.innerWidth > 500 && window.innerWidth < 850){
        container.setAttribute('style',`background-image: url(${data[6].backgroundMobile})`);
    }else{
        container.setAttribute('style',`background-image: url(${data[6].background})`);
    }
    window.addEventListener('resize',()=>{
        if(window.innerWidth < 500){
            container.setAttribute('style',`background-image: url(${data[6].backgroundMobile})`);
        }else if(window.innerWidth > 500 && window.innerWidth < 850){
            container.setAttribute('style',`background-image: url(${data[6].backgroundMobile})`);
        }else{
            container.setAttribute('style',`background-image: url(${data[6].background})`);
        }
    });
}

export default footer;