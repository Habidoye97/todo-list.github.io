import './assets/styles.css';

const body = document.querySelector('body');

const displaySection = document.querySelector(".display-section");

// PROJECT BUTTON
const inboxBtn = document.querySelector("#button-inbox-project");
inboxBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return
  setActiveButton(inboxBtn)
  let projectName = "Inbox"
  displayDefault(projectName)
})

const todayBtn = document.querySelector("#button-today-project");
todayBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return
  setActiveButton(todayBtn)
  let projectName = "Today"
  displayDefault(projectName)
})

const upcomingBtn = document.querySelector("#button-upcoming-project");
upcomingBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return
  setActiveButton(upcomingBtn)
  let projectName = "Upcoming"
  displayDefault(projectName)
})

function displayDefault (projectName) {
  const todoDisplay = document.querySelector(".todo-list-display-container")
  todoDisplay.textContent = "";
  const listHead = document.createElement("h2");
  listHead.setAttribute('class', 'list-header')
  listHead.textContent = projectName
  const listDetails = document.createElement('div');
  listDetails.setAttribute('class', 'list-details');
  listDetails.setAttribute('id', 'list-details');
  const addTaskBtn = document.createElement('button');
  addTaskBtn.setAttribute('id', 'add-task-button')
  addTaskBtn.textContent = 'Add TasK'
  todoDisplay.appendChild(listHead)
  todoDisplay.appendChild(listDetails)
  todoDisplay.appendChild(addTaskBtn)
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

function setActiveButton (option) {
  const navOption = document.querySelectorAll('.button-default-project')

  navOption.forEach((option) => {
    if(option !== this) {
      option.classList.remove('active')
    }
  })

  option.classList.add('active')
}

function todoPage () {
  displayDefault("Inbox")
  setActiveButton(document.querySelector('.button-default-project'))
}

todoPage()

