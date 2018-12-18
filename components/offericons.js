function offerIcons(data){
    const container = document.querySelector('#offer');
    const offerIcons = document.createElement('div');
    offerIcons.classList.add('one-icon-container');
    container.appendChild(offerIcons);
    //icon container component
    const iconDiv = (title, img) => {
        return (
            `<div>
                <a title="${title}"><img src="${img}" alt="${title}"/></a>
                <h2>${title}</h2>
            </div>`
        )
    };
    offerIcons.innerHTML = data[3].icons.map( icon => iconDiv(icon.title, icon.img)).join("");
};

export default offerIcons;