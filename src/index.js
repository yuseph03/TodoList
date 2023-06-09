import _ from 'lodash';
import './styles.css';

home();
inbox();

const TodoItem = (desc) => {
  const getDesc = () => {return desc};
  const getCompl = () => {return false};
  const SetCompl = () => {return true };
  return {getDesc, getCompl, SetCompl};
};

document.querySelector('.inbox').addEventListener('click', inbox);
document.querySelector('.inboxButton').addEventListener('click', function() {formPopup('.inboxButton', 'red')});
document.querySelector('.addProject').addEventListener('click', function() {formPopup('.addProject', 'blue')});


function home() {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const head = document.createElement('div');
  head.setAttribute('class','head');

  const mainLogo = document.createElement('div');
  mainLogo.setAttribute('class', 'main-logo')
  mainLogo.textContent = 'TodoList';

  const taskBar = document.createElement('div');
  taskBar.setAttribute('class', 'taskBar');

  const inbox = document.createElement('button');
  inbox.setAttribute('class', 'inbox');
  inbox.textContent = 'Inbox';

  const week = document.createElement('button');
  week.setAttribute('class', 'week');
  week.textContent = 'This week';

  const projects = document.createElement('div');
  projects.setAttribute('class', 'projects')
  projects.textContent = 'Projects'

  const addProject = document.createElement('button');
  addProject.setAttribute('class', 'addProject');
  addProject.textContent = '+ Add Project';

  const main = document.createElement('div');
  main.setAttribute('id', 'main');


  head.append(mainLogo);
  projects.append(addProject);
  taskBar.append(inbox, week, projects);
  container.append(taskBar, main);
  document.body.append(head, container);
}

function inbox() {
  const main = document.getElementById('main');
  main.innerHTML = '';

  const inboxTitle = document.createElement('p');
  inboxTitle.textContent = 'Inbox';
  inboxTitle.setAttribute('class', 'inboxTitle');

  const inboxButton = document.createElement('button');
  inboxButton.setAttribute('class', 'inboxButton');
  inboxButton.textContent = '+ Add Task';
  
  main.append(inboxTitle, inboxButton);
}

function formPopup(positionEl, styleEl) {
  const position = document.querySelector(`${positionEl}`);

  const form = document.createElement('form');
  form.setAttribute('class', `${styleEl}`);

  const formInput = document.createElement('input');
  formInput.setAttribute('class', 'formInput');
  formInput.setAttribute('type', 'text');

  const formSubmit = document.createElement('input');
  formSubmit.setAttribute('class', 'formSubmit');
  formSubmit.setAttribute('type', 'submit');
  formSubmit.setAttribute('value', 'Add');

  const formCancel = document.createElement('button');
  formCancel.setAttribute('class', 'formCancel');
  formCancel.textContent = 'Cancel';

  form.append(formInput, formSubmit, formCancel);
  position.insertAdjacentElement('beforebegin', form);
}

// function addProject() {
//   const addProject = document.getElementsByClassName('addProject');
//   addProject.innerHTML = '';

//   const form = document.createElement('form');
//   const input = document.createElement('input');
//   input.setAttribute('type', 'text');
//   input.setAttribute('id', 'projName');

//   addProject.append(projectForm);
// }