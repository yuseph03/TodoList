import _ from 'lodash';
import './styles.css';
import gitPic from './images/github-mark.svg'
import {inbox, formPopup, activateBtn} from './popup.js';

home();
inbox();
footer();

document.querySelector('.inbox').addEventListener('click', inbox);
document.querySelector('.inbox').addEventListener('click', function() {activateBtn('inbox')});
document.querySelector('.week').addEventListener('click', function() {activateBtn('week')});

const inboxButton = document.querySelector('.inboxButton');
const addProject = document.querySelector('.addProject');

const TodoItem = (desc) => {
  const getDesc = () => {return desc};
  const getCompl = () => {return false};
  const SetCompl = () => {return true };
  return {getDesc, getCompl, SetCompl};
};

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
  inbox.setAttribute('class', 'inbox btnActive');
  inbox.setAttribute('type', 'button');
  inbox.textContent = 'Inbox';

  const week = document.createElement('button');
  week.setAttribute('class', 'week');
  week.setAttribute('type', 'button');
  week.textContent = 'This week';

  const projects = document.createElement('div');
  projects.setAttribute('class', 'projects')
  projects.textContent = 'Projects'

  const addProject = document.createElement('button');
  addProject.setAttribute('class', 'addProject');
  addProject.setAttribute('type', 'button');
  addProject.textContent = '+ Add Project';
  addProject.addEventListener('click', function() {formPopup('.addProject', 'projPopup')});

  const main = document.createElement('div');
  main.setAttribute('id', 'main');


  head.append(mainLogo);
  projects.append(addProject);
  taskBar.append(inbox, week, projects);
  container.append(taskBar, main);
  document.body.append(head, container);
}

function footer() {
  const foot = document.createElement('footer')
  foot.setAttribute('class', 'footer')

  const footP = document.createElement('p')
  footP.textContent = 'Copyright '+new Date().getFullYear()+' © Yuseph03'

  const gitLink = document.createElement('a')
  gitLink.href = "https://github.com/Yuseph03"
  const gitLogo = document.createElement('i')
  const img = new Image();
  img.src = gitPic;
  img.setAttribute('class', 'fa-github');

  gitLogo.append(img)
  gitLink.append(gitLogo);
  foot.append(footP, gitLink);
  document.body.append(foot);
}