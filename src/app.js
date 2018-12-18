import Nav from '../components/nav';
import langBar from '../components/langbar';
import socialMedia from '../components/socialmedia';
import scrollStatus from '../components/scrollstatus';
import welcome from '../components/welcome';
import about from '../components/about';
import offer from '../components/offer';
import realizations from '../components/realizations';
import contact from '../components/contact';
import footer from '../components/footer';
import Preloader from '../components/preloader';
import GoToTop from '../components/gototop';
import Animations from '../components/animations';

const loader = new Preloader;
loader.render();

class App{
    constructor(english, polish){
        this.english = english;
        this.polish = polish;
    }
    render(){
        const header = new Nav(this.english, document.querySelector('nav'));
        const headerPL = new Nav(this.polish, document.querySelector('nav'));
        const goTop = new GoToTop();

        header.render();
        goTop.render();
        langBar();
        socialMedia();
        scrollStatus();
        welcome(this.english);
        about(this.english);
        offer(this.english);
        realizations(this.english);
        contact(this.english);
        footer(this.english);

        //language change
        const buttonPl = document.querySelector('.pl');
        const buttonEng = document.querySelector('.eng');
        buttonPl.addEventListener('click', (e) => {
            buttonPl.classList.toggle('active');
            buttonEng.classList.toggle('active');

            headerPL.render();
            welcome(this.polish);
            about(this.polish);
            offer(this.polish);
            realizations(this.polish);
            contact(this.polish);
            footer(this.polish);
        });
        buttonEng.addEventListener('click', (e) => {
            buttonPl.classList.toggle('active');
            buttonEng.classList.toggle('active');

            header.render();
            welcome(this.english);
            about(this.english);
            offer(this.english);
            realizations(this.english);
            contact(this.english);
            footer(this.english);
        });
    }
};

fetch('db.json')
.then(resp => resp.json())
.then((response) => {
    const english = response.dataEng;
    const polish = response.dataPl;
    const RunApp = new App(english, polish);
    RunApp.render();
    console.log(response);
});

const animations = new Animations();
animations.render();

