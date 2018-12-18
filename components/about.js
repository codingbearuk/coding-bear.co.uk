function about(data){
    const container = document.querySelector('#about');
    container.innerHTML = `
        <div class = "img-space"></div>
        <div class = "about-content">
            <h1><a name="about">${data[2].title}</a></h1>
            <p>${data[2].content}</p>
        </div>
    `;
    //screen resolution background
    if(window.innerWidth < 750){
        container.style.backgroundImage = data[2].bgMobile;
    }else{
        container.style.backgroundImage = data[2].bg;
    }
    window.addEventListener('resize',()=>{
        if(window.innerWidth < 750){
            container.style.backgroundImage = data[2].bgMobile;
        }else{
            container.style.backgroundImage = data[2].bg;
        }
    });
};

export default about;