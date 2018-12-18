class Search{
    constructor(data){
        this.data = data;
        this.searchWindow = document.querySelector('.searchContainer');
    }
    listeners(){
        const input = this.searchWindow.querySelector('input');
        const searchResult = document.querySelector('.search-result');
        const searchDiv = searchResult.querySelector('div');
        const ObjectTemplate = function(title,content,result,href){
            this.title = title;
            this.content = content;
            this.result = result;
            this.href = href
        }
        const menuArray = [];
        for(let i =0; i <= 4; i++ ){
            menuArray[i] = new ObjectTemplate(this.data[i+1].title.toUpperCase(),this.data[i+1].content.toUpperCase(),document.createElement('div'),this.data[i+1].href);
        };

        input.addEventListener('input', (e) => {
            const value = e.target.value.toUpperCase();
            searchDiv.innerHTML = "";

            for(let section of menuArray){
                if (section.title.includes(value) || section.content.includes(value)){
                    section.result.innerHTML = `<strong>Found</strong> <a href="${section.href}">${value}</a> <strong>in ${section.title}</strong>,`;
                    searchResult.appendChild(section.result);
                }else{
                    section.result.remove();
                };
                value.length == 0? section.result.remove() : null;
            }

           
        });
    }
    render(){
        this.searchWindow.innerHTML = `
        <div class="remove">
            <i id="removeSearch" class="fas fa-times"></i>
        </div>
        <div class="input-container">
            <input type="text" name="search" />
        </div>
        <div class="search-result">
            <div>${this.data[0].searchEngine.emptyText}</div>
        </div>
        `;
        const remove = document.querySelector('#removeSearch');
        remove.addEventListener('click', ()=>{
            this.searchWindow.style.display = "none";
        });
        this.listeners();

    }
}

export default Search;