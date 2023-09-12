import Project from './Project';
import Task from './Task';
import Todolist from './Todolist';
import UI from './UI';

const NAMESPACE = 'TODO-07';

export default class Storage {
  static getTodolist() {
    const todoList = Object.assign(
      new Todolist(),
      JSON.parse(localStorage.getItem(NAMESPACE)),
    );

    todoList.setProjects(todoList
      .getProjects().map((project) => Object.assign(new Project(), project)));

    todoList.getProjects().forEach((project) => project.setTasks(
      project.getTasks().map((task) => Object.assign(new Task(), task)),
    ));

    return todoList;
  }

  static setTodolist(todolist) {
    localStorage.setItem(NAMESPACE, JSON.stringify(todolist));
  }

  static addTask() {
    const input = document.getElementById('input-add-task-popup').value;
    const project = document.getElementById('project-name').textContent;
    const taskPopup = document.getElementById('add-task-popup');
    const todolist = Storage.getTodolist();

    todolist.getProject(project).setTask(new Task(input, 'No Date'));
    Storage.setTodolist(todolist);
    UI.loadTask(input, 'No Date');
    document.getElementById('input-add-task-popup').value = '';
    UI.deactivatePopup(taskPopup);
    UI.initProjectBtns();
    UI.initTaskBtns();
  }

  static removeTask(task) {
    const todolist = Storage.getTodolist();
    const taskName = task.parentNode.querySelector('.task-content').textContent;
    const projName = document.getElementById('project-name').textContent;

    const taskList = todolist.getProject(projName)
      .getTasks()
      .filter((item) => item.name !== `${taskName}`);
    todolist.getProject(projName).setTasks(taskList);
    Storage.setTodolist(todolist);
    task.parentNode.parentNode.remove();
  }

  static addProject() {
    const input = document.getElementById('input-add-project-popup').value;
    const projPopup = document.getElementById('add-project-popup');
    const todolist = Storage.getTodolist();

    todolist.setProject(input);
    Storage.setTodolist(todolist);
    UI.loadProject(input);
    UI.loadProjectBtn(input);
    document.getElementById('input-add-project-popup').value = '';
    UI.deactivatePopup(projPopup);
    UI.initProjectBtns();
  }

  static removeProject(project) {
    const todolist = Storage.getTodolist();
    const projName = project.parentNode.querySelector('span').textContent;
    const projList = todolist.getProjects().filter((proj) => proj.name !== `${projName}`);

    todolist.setProjects(projList);
    Storage.setTodolist(todolist);
    project.parentNode.remove();
  }

  static openProject(proj) {
    const todolist = Storage.getTodolist();
    UI.loadProject(proj);
    if (todolist.getProject(proj).getTasks()) {
      todolist.getProject(proj)
        .getTasks()
        .forEach((task) => UI.loadTask(task.name, task.date));
    }
    UI.initAddTaskBtn();
    UI.initTaskBtns();
  }

  static storeDate(input) {
    const date = input.value;
    const todolist = Storage.getTodolist();
    const proj = document.getElementById('project-name').textContent;
    const task = input.parentNode.parentNode.querySelector('.task-content').textContent;

    todolist.getProject(proj).getTask(task).setDate(date);
    Storage.setTodolist(todolist);
  }

  static clear() {
    localStorage.clear();
  }
}
