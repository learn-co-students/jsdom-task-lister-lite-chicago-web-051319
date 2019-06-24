document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTaskList = new TaskList();
  let formValue = document.getElementById('new-task-description');
  let location = document.getElementById('tasks');
  const addToList = () => location.innerHTML = newTaskList.renderNewTask();

  document.getElementById('create-task-form').addEventListener('submit', event => {
    event.preventDefault();
    newTaskList.makeNewTask(formValue.value);
    addToList();
  });

  let task = document.getElementById('deleteTask');
  location.addEventListener('click', event => {
    let target = event.target;
    if (target.id == 'deleteTask') {
      newTaskList.removeTask(target.dataset.description);
      addToList();
    }
  });
});
