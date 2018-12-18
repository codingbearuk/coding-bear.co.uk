class Menu{
    constructor(data){
        this.data = data;
        this.menuContainer = document.querySelector('.menuContainer');
    }
    render(){
        const menuContainer = this.menuContainer;
        const data = this.data;
    
        const optionElement = ( name , icon , url ) => {
            return (
                `<div class="option">
                    ${icon}
                    <a id="${url}">${name}</a>
                </div>`
                )
            };

        const menuArray = data[0].menu.map(option => optionElement(option.name, option.icon, option.url)).join("");
        menuContainer.innerHTML = (
            `<div class="remove">
                <i class="fas fa-times menu-remove"></i>
            </div>
            <div class="select">
                ${menuArray}
            </div>`
        );
        //links
        const home = document.querySelector('.header');
        const welcome = document.querySelector('#welcome');
        const about = document.querySelector('#about');
        const offer = document.querySelector('#offer');
        const realizations = document.querySelector('#realizations');
        const contact = document.querySelector('#contact');
        
        const optionsArray = [...menuContainer.querySelectorAll(`.option`)];
        const sectionsArray = [home, welcome, about, offer, realizations, contact];
        for(let i=0; i<optionsArray.length;i++){
            const option = optionsArray[i];
            option.addEventListener('click', function(){
                document.querySelector('html').style.scrollBehavior = "auto";
                const section = sectionsArray[i].offsetTop;
                if(scrollY < section){
                    const time = setInterval( ()=> {
                        let i = scrollY;
                        i+=8;
                        scrollTo(0 , i)
                        if(i >= section){
                            clearInterval(time);
                            document.querySelector('html').style.scrollBehavior = "smooth";
                        }
                    }, 1);
                }else{
                    const time = setInterval( ()=> {
                        let i = scrollY;
                        i-=8;
                        scrollTo(0 , i)
                        if(i <= section){
                            clearInterval(time);
                            document.querySelector('html').style.scrollBehavior = "smooth";
                        }
                    }, 1);
                }
                //scrollTo(0,section);
            })
        }
        const remove = document.querySelector('.menu-remove');
        remove.addEventListener('click', ()=>{
            menuContainer.classList.remove('menuActive')
        })
    }
}

export default Menu;