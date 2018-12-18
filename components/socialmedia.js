function socialMedia(){
    const fb = document.createElement('div');
    fb.classList.add('fb');
    fb.innerHTML = (
        `<a target="_blank" href="https://www.facebook.com/KingzGraphicsandWebDesign/">
            <i class="fab fa-facebook-f"></i>
        </a>`
    );
    const linkedin = document.createElement('div');
    linkedin.classList.add('in');
    linkedin.innerHTML = (
        `<a target="_blank" href="https://www.linkedin.com/in/kamil-pieczyk-b21401167/">
            <i class="fab fa-linkedin-in"></i>
        </a>`
    );
    const pin = document.createElement('div');
    pin.classList.add('pin');
    pin.innerHTML = (
        `<a target="_blank" href="https://www.pinterest.co.uk/kamilpieczyk/">
            <i class="fab fa-pinterest-p"></i>
        </a>`
    );
    const git = document.createElement('div');
    git.classList.add('git');
    git.innerHTML = (
        `<a target="_blank" href="https://github.com/codingbearuk">
            <i class="fab fa-github"></i>
        </a>`
    );

    document.body.appendChild(fb);
    document.body.appendChild(linkedin);
    document.body.appendChild(pin);
    document.body.appendChild(git);
}
export default socialMedia;