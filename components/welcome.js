import process from './process';

function welcome(data){
    const container = document.querySelector('#welcome');
    container.innerHTML = `
        <h1>${data[1].title}</h1>
        <p>${data[1].content}</p>
    `;
    process(data);
};

export default welcome