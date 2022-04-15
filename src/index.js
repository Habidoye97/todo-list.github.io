import './assets/styles.css';

const body = document.querySelector('body');

let taskLibrary = [];

const displayContainer = document.querySelector(".todo-list-display-container");

function Task(title, description, date) {
  this.title = title
  this.author = description
  this.date = date
}

function addTaskToLibrary(title, description, date) {
  const task = new Task(title, description, date)
  taskLibrary.push(task)
  console.log(taskLibrary)
}

// PROJECT BUTTON
const inboxBtn = document.querySelector("#button-inbox-project");
inboxBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return
  setActiveButton(inboxBtn)
  let projectName = "Inbox"
  displayDefault(projectName)
  getAddTaskButton().addEventListener('click', () => {
    createTaskForm()
    dgetAddTaskButton().style.display = 'none'
  })
})

const todayBtn = document.querySelector("#button-today-project");
todayBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return
  setActiveButton(todayBtn)
  let projectName = "Today"
  displayDefault(projectName)
  getAddTaskButton().addEventListener('click', () => {
    createTaskForm()
    getAddTaskButton().style.display = 'none'
  })
})

const upcomingBtn = document.querySelector("#button-upcoming-project");
upcomingBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return
  setActiveButton(upcomingBtn)
  let projectName = "Upcoming"
  displayDefault(projectName)
  getAddTaskButton().addEventListener('click', () => {
    createTaskForm()
    getAddTaskButton().style.display = 'none'
  })
})


function displayDefault (projectName) {
  
  displayContainer.textContent = "";
  const listHead = document.createElement("h2");
  listHead.setAttribute('class', 'list-header')
  listHead.textContent = projectName
  const listDetails = document.createElement('div');
  listDetails.setAttribute('class', 'list-details');
  listDetails.setAttribute('id', 'list-details');
  const addTaskBtn = document.createElement('button');
  addTaskBtn.setAttribute('class', 'add-task-button');
  const addTaskImg = document.createElement("img");
  addTaskImg.setAttribute('id', 'add-task-image')
  addTaskImg.src = './icons8-plus-64.png'
  const addTaskBtnText = document.createElement("span")
  addTaskBtnText.setAttribute('id', 'add-task-btn-text')
  addTaskBtnText.textContent = "Add Task"
  addTaskBtn.appendChild(addTaskImg)
  addTaskBtn.appendChild(addTaskBtnText)
  displayContainer.appendChild(listHead)
  displayContainer.appendChild(listDetails)
  displayContainer.appendChild(addTaskBtn)
  switch(projectName) {
    case "Inbox":
      addTaskBtn.setAttribute('id', 'inbox-add-btn')
      break;
    case "Today":
      addTaskBtn.setAttribute('id', 'today-add-btn')
      break;
    case "Upcoming":
      addTaskBtn.setAttribute('id', 'home-add-btn')
      break;
    default:
      return
  }
}

function getButtonId() {
  const idToGet = document.querySelector(".add-task-button");
  console.log(idToGet.id)
  return idToGet.id
}

function createTaskForm () {
  const addTaskForm = document.createElement('form');
  addTaskForm.setAttribute('id', 'addTaskForm');
  
  const addTaskFormTop = document.createElement('div');
  addTaskFormTop.setAttribute('id', 'addTaskFormTop');
  const taskTitle = document.createElement('textarea')
  taskTitle.setAttribute('id', 'taskTitleArea');
  taskTitle.placeholder = "e.g. Read everyday p3 @goals #Learning"
  taskTitle.required
  const taskDetails = document.createElement('textarea');
  taskDetails.setAttribute('id', 'taskDetailsArea');
  taskDetails.placeholder = "Description"
  const dueDate = document.createElement('input');
  dueDate.setAttribute('id', 'dueDate')
  dueDate.placeholder = "Due Date"
  dueDate.autocomplete = 'off';
  dueDate.type = "date"
  const addTaskFormBottom = document.createElement('div');
  addTaskFormBottom.setAttribute('id', 'addTaskFormbottom');
  const addNewTaskBtn = document.createElement('button');
  addNewTaskBtn.setAttribute('id', 'add-new-task-button');
  addNewTaskBtn.textContent = "Add Task"
  addNewTaskBtn.type = 'button'
  addNewTaskBtn.addEventListener('click', () => {
    getFormInput()
    displayContainer.removeChild(addTaskForm)
    getAddTaskButton().style.display = "block"
  });
  const cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('id', 'cancel-task-button');
  cancelBtn.textContent = "Cancel";
  cancelBtn.type = 'button'
  cancelBtn.addEventListener('click', () => {
    addTaskForm.reset()
    displayContainer.removeChild(addTaskForm)
    getAddTaskButton().style.display = "block"
  })
  addTaskFormTop.appendChild(taskTitle)
  addTaskFormTop.appendChild(taskDetails)
  addTaskFormTop.appendChild(dueDate)
  addTaskFormBottom.appendChild(addNewTaskBtn)
  addTaskFormBottom.appendChild(cancelBtn)
  addTaskForm.appendChild(addTaskFormTop)
  addTaskForm.appendChild(addTaskFormBottom)
  displayContainer.appendChild(addTaskForm)
}

function getFormInput () {
  const taskFormContent = document.querySelector('#addTaskForm');
  const taskTitleContent = document.querySelector('#taskTitleArea');
  const taskDetailsContent = document.querySelector('#taskDetailsArea');
  const dueDateContent = document.querySelector('#dueDate');
  if (taskTitleContent.value !== '' && taskDetailsContent.value !== '' ) {
    addTaskToLibrary(taskTitleContent.value, taskDetailsContent.value, dueDateContent.value)
  }
  taskFormContent.reset()
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
  getAddTaskButton().addEventListener('click', () => {
    createTaskForm()
    getAddTaskButton().style.display = 'none'
  }) 
}


todoPage()

function getAddTaskButton () {
  const addTaskBtn = document.getElementById(getButtonId());
  console.log(addTaskBtn)
  return addTaskBtn
}


