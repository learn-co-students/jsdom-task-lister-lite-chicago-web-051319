class Task {
  constructor(description) {
    this.description = description;
  }

  renderTask() {
    return `<li>${this.description}<button type="button" id="deleteTask" data-description="${this.description}">X</button></li>`;
  }
}
