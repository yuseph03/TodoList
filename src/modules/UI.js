import Storage from './Storage';

export default class UI {
  static loadHomePage() {
    UI.loadProject('Inbox');
    UI.loadProjects();
    UI.initBtns();
    UI.initProjectBtns();
    console.log(Storage.getTodolist())
  }

  static initAddTaskBtn() {
    const addTaskBtn = document.getElementById('button-add-task');
    const taskCancel = document.getElementById('button-cancel-task-popup');
    const taskPopup = document.getElementById('add-task-popup');
    const taskConfirm = document.getElementById('button-add-task-popup');

    addTaskBtn.addEventListener('click', () => UI.activatePopup(taskPopup));
    taskCancel.addEventListener('click', () => UI.deactivatePopup(taskPopup));
    taskConfirm.addEventListener('click', () => Storage.addTask());
  }

  static initAddProjectBtn() {
    const addProjBtn = document.getElementById('button-add-project');
    const projCancel = document.getElementById('button-cancel-project-popup');
    const projPopup = document.getElementById('add-project-popup');
    const projConfirm = document.getElementById('button-add-project-popup');

    addProjBtn.addEventListener('click', () => UI.activatePopup(projPopup));
    projCancel.addEventListener('click', () => UI.deactivatePopup(projPopup));
    projConfirm.addEventListener('click', () => Storage.addProject());
  }

  static initProjectBtns() {
    const projDefaultBtns = Array.from(document.querySelectorAll('.button-default-project'))
    const projDeleteBtns = Array.from(document.querySelectorAll('.right-project-panel'));
    const projBtnArray = Array.from(document.querySelectorAll('.left-project-panel'));

    projDefaultBtns.forEach((element) => element.addEventListener('click', 
      () => Storage.openProject(element.querySelector('span').textContent)));

    projDeleteBtns.forEach((element) => element.addEventListener('click', 
      () => Storage.removeProject(element)));

    projBtnArray.forEach((element) => element.addEventListener('click',
      () => Storage.openProject(element.querySelector('span').textContent)));
  }

  static loadProjects() {
    const todolist = Storage.getTodolist();
    const projects = todolist.getProjects();
    const inbox = todolist.getProject('Inbox');

    if (projects.length > 3) {
      Object.values(projects).forEach((val) => {
        if (val.name != 'Inbox' && val.name !== 'Week' && val.name !== 'Today') {
            UI.loadProjectBtn(val.name);
        }});
      }

    if (inbox.getTasks()) {
      inbox.getTasks().forEach((task) => {
        UI.loadTask(task.name, task.date);
      })
    }
  }

  static loadProject(projectName) {
    const projectPreview = document.querySelector('.project-preview');

    projectPreview.innerHTML = `
        <h1 id="project-name">${projectName}</h1>
        <div class="tasks-list" id="tasks-list"></div>
        <button class="button-add-task" id="button-add-task">
          <i class="fas fa-plus"></i>
          Add Task
        </button>
        <div class="add-task-popup" id="add-task-popup">
          <input
            class="input-add-task-popup"
            id="input-add-task-popup"
            type="text"
          />
          <div class="add-task-popup-buttons">
            <button class="button-add-task-popup" id="button-add-task-popup">
              Add
            </button>
            <button
              class="button-cancel-task-popup"
              id="button-cancel-task-popup"
            >
              Cancel
            </button>
          </div>
        </div>`;
  }

  static loadProjectBtn(projectName) {
    const projList = document.getElementById('projects-list');

    projList.innerHTML += `
    <button class="button-project" data-project-button>
        <div class="left-project-panel">
          <i class="fas fa-tasks"></i>
          <span>${projectName}</span>
        </div>
        <div class="right-project-panel">
          <i class="fas fa-times"></i>
        </div>
      </button>`;
  }

  static loadTask(task, date) {
    const tasksList = document.getElementById('tasks-list');
    tasksList.innerHTML += `
        <button class="button-task" data-task-button>
          <div class="left-task-panel">
            <i class="far fa-circle"></i>
            <p class="task-content">${task}</p>
            <input type="text" class="input-task-name" data-input-task-name>
          </div>
          <div class="right-task-panel">
            <p class="due-date" id="due-date">${date}</p>
            <input type="date" class="input-due-date" data-input-due-date>
            <i class="fas fa-times"></i>
          </div>
        </button>`;
  }

  // EVENT LISTENERS

  static initBtns() {
    UI.initAddTaskBtn();
    UI.initAddProjectBtn();
  }

  static activatePopup(popup) {
    popup.classList.add('active');
  }

  static deactivatePopup(popup) {
    popup.classList.remove('active');
  }
}
