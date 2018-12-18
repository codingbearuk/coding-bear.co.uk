function scrollStatus(){
    const nav = document.querySelector('nav');
    const scrollBar = document.createElement('div');
    let width = 0;
    scrollBar.classList.add('scroll-status');
    document.body.insertBefore(scrollBar,nav);
    scrollBar.style.width = `${width}%`;
    window.addEventListener('scroll', function(){
        let scrollValue = window.scrollY;
        const scrollMaxH = document.body.scrollHeight;
        //console.log(scrollValue, scrollMaxH);
        width =  (scrollValue) * 100 / (scrollMaxH - 630);
        //width =  scrollValue * 100 / scrollMaxH;
        //console.log(width);
        scrollBar.style.width = `${width}%`;
    })

};

export default scrollStatus;