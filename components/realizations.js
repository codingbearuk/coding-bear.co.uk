function realization(data){
    const container = document.querySelector('#realizations');
    container.setAttribute('style',`background-image: url(${data[4].background})`)
    container.innerHTML = (`
        <h1><a name="projects"></a>${data[4].title}</h1>
        <div><i class="fas fa-cogs"></i></div>
        <div>in construction</div>
    `);
}

export default realization;