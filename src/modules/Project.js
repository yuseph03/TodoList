export default class Project {
  constructor(name) {
    this.tasks = [];
    this.name = name;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  setTask(newTask) {
    this.tasks.push(newTask);
  }
}
