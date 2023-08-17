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
    console.log(Storage.getTodolist())
    UI.loadTask(input, 'No Date');
    UI.deactivatePopup(taskPopup);
  }

  static addProject() {
    const input = document.getElementById('input-add-project-popup').value;
    const projPopup = document.getElementById('add-project-popup');
    const todolist = Storage.getTodolist();
    todolist.setProject(input);
    Storage.setTodolist(todolist);
    UI.loadProject(input);
    UI.loadProjectBtn(input)
    UI.deactivatePopup(projPopup);
  }

  // static openProject(proj) {
  //   const todolist = Storage.getTodolist();
  //   UI.loadProject(proj);
  //   todolist.getProject(proj).getTasks().forEach((task) => UI.loadTask(task.name, task.date));
  // }

  static clear() {
    localStorage.clear();
  }
}
