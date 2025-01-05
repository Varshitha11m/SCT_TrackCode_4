// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskTextElement = document.createElement('span');
  taskTextElement.textContent = taskText;
  taskTextElement.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  taskInput.value = '';
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
