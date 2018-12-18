import Search from '../components/search';
import slider from '../components/slider';
import Menu from '../components/menu';

class Nav{
    constructor(data, nav){
        this.data = data;
        this.nav = nav;
    }
    render(){
        //container header
        //const nav = document.querySelector('nav');
        this.nav.innerHTML = `
            <div class="header">
                <div class="top-container">
                    <div class='logo'>
                        <a name="home"><img src='${this.data[0].logo}' /></a>
                    </div>
                    <div class='search'>
                        <img id="search" src='${this.data[0].search}'/>
                    </div>
                    <div class='burger'>
                        <img id = "menuButton"src='${this.data[0].burgerImg}' />
                    </div>
                </div>
                <div class="middle-container">
                
                </div>
                <div class="bottom-container">
                    <img id="scroll" src='${this.data[0].scrollImg}' />
                </div>
            </div>
        `;
        const menu = new Menu(this.data);
        menu.render();

        slider(this.data);

        //search activation
        const searchBar = document.querySelector('#search');
        const search = new Search(this.data);
        search.render();
        searchBar.addEventListener('click', () => {
            const searchContainer = document.querySelector('.searchContainer');
            searchContainer.style.display = "block";
        });
        //menu activation
        const menuButton = document.querySelector('#menuButton');
        menuButton.addEventListener('click', () => {
            const menuContainer = document.querySelector('.menuContainer');
            menuContainer.classList.toggle('menuActive')
        });
        //scroll button
        const scrollBtn = document.querySelector('#scroll');
        scrollBtn.addEventListener('click', function(){
            document.querySelector('html').style.scrollBehavior = "auto";
            const time = setInterval( ()=>{
                let i = scrollY;
                i+=8;
                scrollTo(0 , i)
                if(i >= 500){
                   clearInterval(time);
                    document.querySelector('html').style.scrollBehavior = "smooth";
                }
            } , 1);
        //window.scrollTo(0,500);
        });

        //Screen resolution bg rules
        if(window.innerWidth < 500){
            document.querySelector('.header').style.backgroundImage = this.data[0].mobileBg;
        }else if(window.innerWidth > 500 && window.innerWidth < 850){
            document.querySelector('.header').style.backgroundImage = this.data[0].mobile600;
        }else{
            document.querySelector('.header').style.backgroundImage = this.data[0].bg;
        }
        window.addEventListener('resize',()=>{
            if(window.innerWidth < 500){
                document.querySelector('.header').style.backgroundImage = this.data[0].mobileBg;
            }else if(window.innerWidth > 500 && window.innerWidth < 850){
                document.querySelector('.header').style.backgroundImage = this.data[0].mobile600;
            }else{
                document.querySelector('.header').style.backgroundImage = this.data[0].bg;
            }
        });  
    }
}

export default Nav;