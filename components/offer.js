import offerIcons from './offericons';

function offer(data) {
    const container = document.querySelector('#offer');
    container.innerHTML = `
        <h1><a name="services">${data[3].title}</h1></a>
        <p>${data[3].content}</p>
    `;
    offerIcons(data);
};

export default offer;