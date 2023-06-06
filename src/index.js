import _ from 'lodash';
  
const TodoItem = (title, desc) => {
  const getTitle = () => {return title};
  const getDesc = () => {return desc};
  const getCompl = () => {return false};
  return {getTitle, getDesc, getCompl};
};

const SetCompl = () => {
  return true;
};

// BASIC LAYOUT

const container = document.createElement('div');

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
projects.textContent = 'Projects'

const addProject = document.createElement('button');
addProject.setAttribute('class', 'addProject');
addProject.textContent = 'Add Project';

const main = document.createElement('div');
main.setAttribute('class', 'main');

head.append(mainLogo);
projects.append(addProject);
taskBar.append(inbox, week, projects);
container.append(head, taskBar, main);
document.body.append(container);