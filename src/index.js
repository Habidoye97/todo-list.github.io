import './assets/styles.css';

const body = document.querySelector('body');

const displaySection = document.querySelector(".display-section")
const inboxBtn = document.querySelector("#button-inbox-project");
inboxBtn.addEventListener('click', displayDefault)

function displayDefault () {
  const topic = document.querySelector(".list-topic");
  topic.innerHTML = "";
  const topicType = document.createElement('div');
  topicType.setAttribute('class', 'topic-type');
  topicType.textContent = "Home"
  const topicDueDate = document.createElement('div');
  topicDueDate.setAttribute('class', 'topic-due-date');
  topicDueDate.textContent = "Due Date";
  topic.appendChild(topicType);
  topic.appendChild(topicDueDate);
  const addTaskBtn = document.createElement('button');
  addTaskBtn.setAttribute('id', 'add-task-button')
  addTaskBtn.textContent = 'Add TasK'
  topic.appendChild(addTaskBtn)
}

function createTaskForm () {
  const addTaskForm = document.createElement('form');
  addTaskForm.setAttribute('id', 'addTaskForm');
  const addTaskFormTop = document.createElement('div');
  addTaskFormTop.setAttribute('id', 'addTaskFormTop');
  const taskTitle = document.createElement('textarea')
  taskTitle.setAttribute('id', 'taskTitleArea');
  taskTitle.placeholder = "Title: Laundry"
  taskTitle.required
  const taskDetails = document.createElement('textarea');
  taskDetails.setAttribute('id', 'taskDetailsArea');
  taskDetails.placeholder = "Details: e.g. fold laundry at 4pm"
  const dueDate = document.createElement('input');
  dueDate.setAttribute('id', 'dueDate')
  dueDate.placeholder = "Due Date"
  dueDate.autocomplete = 'off';
  dueDate.type = "date"
  const addTaskFormBottom = document.createElement('div');
  addTaskFormBottom.setAttribute('id', 'addTaskFormbottom');
  const addNewTaskBtn = document.createElement('button');
  addNewTaskBtn.setAttribute('id', 'add-new-task-button')
  const cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('id', 'add-task-button');
  addTaskFormTop.appendChild(taskTitle)
  addTaskFormTop.appendChild(taskDetails)
  addTaskFormTop.appendChild(dueDate)
  addTaskFormBottom.appendChild(addNewTaskBtn)
  addTaskFormBottom.appendChild(cancelBtn)
  addTaskForm.appendChild(addTaskFormTop)
  addTaskForm.appendChild(addNewTaskBtn)
  displaySection.appendChild(addTaskForm)
}