import ContactDetails from './contactdetails';

function contact(data){
    data = data[5];
    const container = document.querySelector('#contact');
    const input = (icon, ID, defaultValue, divID, actionID, type) => {
        return `
            <div id="${divID}" class="inputTemplate">
                <div class="icon${icon}div"><i class="fas ${icon}"></i></div>
                <div><input name="${ID}" type="${type}" value="${defaultValue}" flag= "false" required /></div>
                <div class="actionCross" id=${actionID}></div>
            </div>
        `
    };
    const textarea = (ID, content) => {
        return `
            <div id="${ID}" class="inputTemplate">
                <textarea name="message">${content}
                </textarea>
            </div>
        `
    };
    const submit = (text) => {
        return `<button type="submit">${text}</button>`
    }
    container.innerHTML = (
        `<h1><a name="contacts"></a>${data.title}</h1>
        <form name="contact-form" method="post" action="http://kingzgraphics.co.uk/mail.php">

        </form>
        <div id="contact-details-btn">
            <div>
                <strong>
                    ${data.or}
                </strong>
            </div>
            <div id="details-btn">
                ${submit(data.btn)}
            </div>
        </div>`
    );

    const form = document.querySelector('form');
    form.innerHTML = data.inputs.map( OneInput => input(OneInput.icon,OneInput.ID, OneInput.value, OneInput.divID, OneInput.actionID, OneInput.type) ).join("") + textarea(data.textarea.id, data.textarea.content) + `<div id="advice">${data.advice.toUpperCase()}</div>` + "<div id='submit'><div>send message</div></div>";

    for(let i =0 ; i < data.inputs.length ; i++){
    
        const div = document.querySelector(`#${data.inputs[i].divID}`);
        const input = div.querySelector(`input`);
        const icon = div.querySelector('i');

        //icon whichone change on x or v if form is correct
        const actionIcon = document.querySelector(`#${data.inputs[i].actionID}`);

        input.addEventListener('focus', function(e){
            if(e.target.value == data.inputs[i].value) e.target.value = "";
            div.classList.toggle('divActive');
            icon.classList.toggle('iconActive');
        });
        input.addEventListener('blur', (e)=>{
            if(e.target.value.length == 0){
                input.setAttribute('flag', 'false'); 
                div.classList.contains('divOK')? div.classList.remove('divOK'): null;
                if( div.classList.contains('divBad')){
                    div.classList.remove('divBad');
                    icon.classList.remove('iconBad');
                    actionIcon.innerHTML = ""
                }
                e.target.value = data.inputs[i].value;
                icon.classList = ["fas", data.inputs[i].icon].join(" ");
                icon.classList.toggle('iconActive');
                [icon.classList].includes('iconOK')? icon.classList.remove('iconOK'): null;
            } else if(e.target.value != data.inputs[i].value && e.target.value.length >= 3 && e.target.attributes.type.value != "email" && e.target.attributes.name.value != "number"){
                div.classList.add('divOK');
                icon.classList.value = "";
                icon.classList.add('fas');    
                icon.classList.add('fa-check-circle');
                icon.classList.add('iconOK');
                input.setAttribute('flag', 'true');    
            } else if(e.target.attributes.type.value = "email" && e.target.value. length > 5 &&         e.target.value.includes('@')){
                div.classList.add('divOK');
                icon.classList.value = "";
                icon.classList.add('fas');    
                icon.classList.add('fa-check-circle');
                icon.classList.add('iconOK');
                input.setAttribute('flag', 'true');    
            } else if (e.target.attributes.name.value == "number" && (e.target.value * 1) + "" != "NaN" && e.target.value.length > 6 ){
                
                div.classList.add('divOK');
                icon.classList.value = "";
                icon.classList.add('fas');    
                icon.classList.add('fa-check-circle');
                icon.classList.add('iconOK');
                input.setAttribute('flag', 'true');    
            }
            div.classList.toggle('divActive');
            icon.classList.toggle('iconActive');
        });
        input.addEventListener('input', (e)=>{
            if(e.target.value.length < 3){
                if(div.classList.contains('divOK')){
                    div.classList.remove('divOK');
                    icon.classList.remove('iconOK');
                    icon.classList.remove('fa-check-circle');
                    icon.classList.add(`${data.inputs[i].icon}`);

                }
                div.classList.add('divBad');
                icon.classList.add('iconBad');
                actionIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
            }else if(e.target.attributes.type.value=="email"){
                let containsAt = e.target.value.includes('@');
                if(e.target.value.length < 6 || containsAt == false){
                    if(div.classList.contains('divOK')){
                        div.classList.remove('divOK');
                        icon.classList.remove('iconOK');
                        icon.classList.remove('fa-check-circle');
                        icon.classList.add(`${data.inputs[i].icon}`);
                    }
                    div.classList.add('divBad');
                    icon.classList.add('iconBad');
                    actionIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
                }else{
                    div.classList.remove('divBad');
                    icon.classList.remove('iconBad');
                    actionIcon.innerHTML = ""
                }
            }else if (e.target.attributes.name.value == "number") {
                const numberTest = (e.target.value * 1) + "";

                if(numberTest == "NaN" || e.target.value.length < 6){
                    
                    if(div.classList.contains('divOK')){
                        div.classList.remove('divOK');
                        icon.classList.remove('iconOK');
                        icon.classList.remove('fa-check-circle');
                        icon.classList.add(`${data.inputs[i].icon}`);
                    }
                    div.classList.add('divBad');
                    icon.classList.add('iconBad');
                    actionIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
                } else {
                    div.classList.remove('divBad');
                    icon.classList.remove('iconBad');
                    actionIcon.innerHTML = ""
                }
            }else{
                div.classList.remove('divBad');
                icon.classList.remove('iconBad');
                actionIcon.innerHTML = ""
            }
        });

        // Hints
        const iconId = document.querySelector(`#${data.inputs[i].divID}`);
        const iconHints = iconId.querySelector('i');
        
        iconHints.addEventListener('mouseover', () => {
            const hint = document.createElement('div');
            hint.classList.add('hint');
            document.body.appendChild(hint);
            hint.style.top = `${iconHints.offsetTop}px`;
            hint.style.left = `${iconHints.offsetLeft + 40}px`;
            hint.innerHTML = `<p>${data.inputs[i].hover}</p>`;
        });
        iconHints.addEventListener('mouseout', () => {
            const hint = document.querySelector('.hint');
            hint.remove();
        });


    };

    const textareaDiv = document.querySelector('#textarea');
    const textareaInput = textareaDiv.querySelector('textarea');
    textareaInput.addEventListener('focus', function(e){
        textareaDiv.classList.toggle('divActive');
        this.innerHTML = "";
    });
    textareaInput.addEventListener('blur', function(e){
        textareaDiv.classList.toggle('divActive');
        this.innerHTML = `${data.textarea.content}`;
    });

    const allInputs = [...document.querySelector('form').querySelectorAll('input')];
    const sendDiv = document.querySelector('#submit');
    for(let eachInput of allInputs){
        eachInput.addEventListener('blur', function(e){
            if(allInputs[0].attributes.flag.value == "true" && allInputs[1].attributes.flag.value == "true" && allInputs[2].attributes.flag.value == "true" && allInputs[3].attributes.flag.value == "true"){
                sendDiv.innerHTML = submit('send message');
            } else{
                sendDiv.innerHTML ="<div>send message</div>";
            }
        });
    };
    
    //Details btn event
    const detailsBtn = document.querySelector('#details-btn');
    const contactDetails = new ContactDetails(data);
    detailsBtn.addEventListener('click', () => {
        contactDetails.render();
    })
}

export default contact;