export { inbox, formPopup, activateBtn };
 
const inboxButton = document.querySelector('.inboxButton');
const addProject = document.querySelector('.addProject');

function inbox() {
    const main = document.getElementById('main');
    main.innerHTML = '';
  
    const inboxTitle = document.createElement('p');
    inboxTitle.textContent = 'Inbox';
    inboxTitle.setAttribute('class', 'inboxTitle');
  
    const inboxButton = document.createElement('button');
    inboxButton.setAttribute('class', 'inboxButton');
    inboxButton.setAttribute('type', 'button');
    inboxButton.textContent = '+ Add Task';
    inboxButton.addEventListener('click', function() {formPopup('.inboxButton', 'taskPopup')});

    main.append(inboxTitle, inboxButton);
}

function formPopup(positionEl, className) {
    const inboxButton = document.querySelector('.inboxButton');
    const addProject = document.querySelector('.addProject');

    const position = document.querySelector(`${positionEl}`);

    const form = document.createElement('form');
    form.setAttribute('class', `${className}`);

    const formInput = document.createElement('input');
    formInput.setAttribute('class', 'formInput');
    formInput.setAttribute('type', 'text');

    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'formContainer');

    const formSubmit = document.createElement('button');
    formSubmit.setAttribute('class', 'formSubmit');
    formSubmit.setAttribute('type', 'button');
    formSubmit.textContent = 'Add';

    const formCancel = document.createElement('button');
    formCancel.setAttribute('class', 'formCancel');
    formCancel.setAttribute('type', 'button');
    formCancel.textContent = 'Cancel';
    formCancel.addEventListener('click', function() {remove(`${className}`)});


    formContainer.append(formSubmit, formCancel);
    form.append(formInput, formContainer);
    position.insertAdjacentElement('beforebegin', form);

    if(className == 'taskPopup') {
      inboxButton.style.display = 'none';
    } else {
      addProject.style.display = 'none';
    }
}

function activateBtn(btn) {
    const button = document.querySelector(`.${btn}`)
    const activeBtns = document.querySelectorAll('.btnActive');
    activeBtns.forEach((element) => {
      element.classList.remove('btnActive');
    })
    button.classList.add('btnActive');
}
  
function remove(element) {
    const inboxButton = document.querySelector('.inboxButton');
    const addProject = document.querySelector('.addProject');
    const main = document.getElementById('main');
    const projPopup = document.querySelector('.projects');
    const popup = document.querySelector(`.${element}`);
    if(popup.parentNode == main){
      main.removeChild(popup);
      inboxButton.style.display = 'block';
    } else {
      projPopup.removeChild(popup);
      addProject.style.display = 'block';
    }
}