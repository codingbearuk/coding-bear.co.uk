class GoToTop {
    constructor(){
        this.circle = document.createElement('div');
        this.hint = document.createElement('div');
    }
    listeners(){
        this.circle.addEventListener('click', function(){
            if(scrollY > 0){
                document.querySelector('html').style.scrollBehavior = "auto";
                const time = setInterval( ()=>{
                    let i = scrollY;
                    i-=20;
                    scrollTo(0 , i)
                    if(i <= 0){
                        clearInterval(time);
                        document.querySelector('html').style.scrollBehavior = "smooth";
                    }
                } , 1);
            }
            //scrollTo(0,0);
        });
        this.circle.addEventListener('mouseover', () => {
            const circlePosition = [this.circle.offsetTop, this.circle.offsetLeft];
            this.hint.classList = "hint";
            this.hint.innerHTML = "Go to the top";
            this.hint.style.position = `fixed`;
            this.hint.style.top = `${circlePosition[0] + 30}px`;
            this.hint.style.left = `${circlePosition[1] - 150}px`;
            document.body.appendChild(this.hint);
        });
        this.circle.addEventListener('mouseout', () => {
            this.hint.remove();
        });
    }

    render(){
        this.circle.classList = "go-to-top";
        this.circle.innerHTML = `<i class="fas fa-arrow-alt-circle-up"></i>`;
        document.body.appendChild(this.circle);
        this.listeners();
    }
}

export default GoToTop;