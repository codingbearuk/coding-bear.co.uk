class ContactDetails {
    constructor(data){
        this.data = data;
        this.closeIcon = '<i id="detailsClose" class="fas fa-times"></i>';
    }
    removeContainer(){
        const container = document.getElementsByClassName('contact-details-container')[0];
        container.remove();
    }
    render(){
        const container = document.createElement('div');
        container.classList.add('contact-details-container');
        document.body.appendChild(container);

        const detailsContainer = document.createElement('div');
        container.appendChild(detailsContainer);
        detailsContainer.innerHTML = (
            `<div>
                ${this.closeIcon}
            </div>
            <div>
                <div class="logo-details">
                
                </div>
                <div class="details-content">
                
                </div>
            </div>`
        );

        const closeIcon = document.querySelector('#detailsClose');
        closeIcon.addEventListener('click', this.removeContainer);

        const bearIconContainer = container.querySelector('.logo-details');
        const bearIcon = `<img src="../images/preloader-logo.png" alt="bear-icon"/>`
        bearIconContainer.innerHTML = bearIcon;

        const detailsContentContainer = container.querySelector('.details-content');
        const detailsContent = (
            `<div><h1>Kamil Pieczyk</h1>
                <h3>javascript developer / web designer</h3>
                <p><solid><i class="fas fa-mobile-alt"></i></solid> 07 593 706 457</p>
                <p><solid><i class="fas fa-at"></i></solid> kamil@coding-bear.co.uk</p>
            </div>`
        );
        detailsContentContainer.innerHTML = detailsContent;
    }
};

export default ContactDetails;