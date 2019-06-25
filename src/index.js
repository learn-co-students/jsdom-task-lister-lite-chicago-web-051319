document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  const tasklist = document.getElementById('tasks');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    let listItem = document.createElement('li');
    listItem.innerText = input.value;
    tasklist.appendChild(listItem);

    let del = document.createElement('button');
    del.textContent = "X";
    listItem.appendChild(del);
    del.addEventListener('click', function(e){
      del.parentElement.remove(del.parentElement);
    })
  });

});


// b.setAttribute('content', 'test content');
