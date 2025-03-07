class TaskList {

  constructor() {
    this.tasks = [];
  }

  makeNewTask(taskDescription) {
    let newTask = new Task(taskDescription);
    this.tasks.push(newTask);
  }

  renderNewTask() {
    return this.tasks.map(task => task.renderTask()).join('');
  }

  removeTask(description) {
    this.tasks = this.tasks.filter(task => task.description != description)
  }

}
