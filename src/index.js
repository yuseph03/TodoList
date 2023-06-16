import _ from 'lodash';
import './styles.css';
import {home, inbox, footer} from './layout.js';

home();
inbox();
footer();

const TodoItem = (desc) => {
  const getDesc = () => {return desc};
  const getCompl = () => {return false};
  const SetCompl = () => {return true };
  return {getDesc, getCompl, SetCompl};
};

const inboxButton = document.querySelector('.inboxButton');
const addProject = document.querySelector('.addProject');

document.querySelector('.inbox').addEventListener('click', inbox);
document.querySelector('.inboxButton').addEventListener('click', function() {formPopup('.inboxButton', 'taskPopup')});
document.querySelector('.addProject').addEventListener('click', function() {formPopup('.addProject', 'projPopup')});


function formPopup(positionEl, className) {
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

function remove(element) {
  console.log('kaar kard');
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