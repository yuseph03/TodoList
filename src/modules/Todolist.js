import Project from './Project';

export default class Todolist {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('Inbox'));
    this.projects.push(new Project('Today'));
    this.projects.push(new Project('Week'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(proj) {
    return this.projects.find((project) => project.name === `${proj}`);
  }

  setProject(proj) {
    return this.projects.push(new Project(`${proj}`));
  }
}
