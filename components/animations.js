class Animations {
    constructor(){
        this.welcome = document.querySelector('#welcome');
        this.process = document.querySelector('#process');
        this.about = document.querySelector('#about');
        this.offer = document.querySelector('#offer');
        this.realizations = document.querySelector('#realizations');
        this.contact = document.querySelector('#contact');
    }
    render(){
        this.welcome.style.opacity = "0";
        this.process.style.opacity = "0";
        this.about.style.opacity = "0";
        this.offer.style.opacity = "0";
        this.realizations.style.opacity = "0";
        this.contact.style.opacity = "0";
        //console.log(this.realizations.style)
        document.addEventListener('scroll', (e) => {
            const value = scrollY + 450;
            if(value >= this.welcome.offsetTop){
                this.welcome.style.transition = "2s";
                this.welcome.style.opacity = "1";
                this.process.style.transition = "2s";
                this.process.style.opacity = "1";
            } else{
                this.welcome.style.opacity = "0";
                this.process.style.opacity = "0";
            }
            if(value >= this.about.offsetTop){
                this.about.style.transition = "2s";
                this.about.style.opacity = "1";
            } else {
                this.about.style.opacity = "0";
            }
            if(value >= this.offer.offsetTop){
                this.offer.style.transition = "2s";
                this.offer.style.opacity = "1";
            } else {
                this.offer.style.opacity = "0";
            }
            if(value >= this.realizations.offsetTop){
                this.realizations.style.transition = "2s";
                this.realizations.style.opacity = "1";
            } else {
                this.realizations.style.opacity = "0";
            }
            if(value >= this.contact.offsetTop){
                this.contact.style.transition = "2s";
                this.contact.style.opacity = "1";
            } else {
                this.contact.style.opacity = "0";
            }
        })
    }
}
export default Animations;