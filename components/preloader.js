class Preloader{
    constructor(){
        this.container = document.createElement('div'); 
        this.img = '../images/preloader.png';
        this.imgContainer = document.createElement('div');
        this.logo = '../images/preloader-logo.png';
        this.logoContainer = document.createElement('div');
    }
    render(){
        this.container.classList = "preloader";
        this.imgContainer.innerHTML = (`
            <img src="${this.img}" alt="preloader" />
        `);
        this.logoContainer.innerHTML = (
            `<img src="${this.logo}" alt="preloader" />`
        );

        document.body.appendChild(this.container);
        this.container.appendChild(this.imgContainer);
        this.container.appendChild(this.logoContainer);

        document.addEventListener('DOMContentLoaded', () => {
            this.container.classList.add('preloader-animation');
            setTimeout(() => this.container.remove(), 3000);
        })
    }
}

export default Preloader;