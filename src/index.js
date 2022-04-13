import './assets/styles.css';

const body = document.querySelector('body');

const displayContainer = document.querySelector(".todo-list-display-container");

// PROJECT BUTTON
const inboxBtn = document.querySelector("#button-inbox-project");
inboxBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return
  setActiveButton(inboxBtn)
  let projectName = "Inbox"
  displayDefault(projectName)
  getAddTaskElement().addEventListener('click', () => {
    createTaskForm()
    displayContainer.removeChild(getAddTaskElement())
  })
})

const todayBtn = document.querySelector("#button-today-project");
todayBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return
  setActiveButton(todayBtn)
  let projectName = "Today"
  displayDefault(projectName)
  getAddTaskElement().addEventListener('click', () => {
    createTaskForm()
    displayContainer.removeChild(getAddTaskElement())
  })
})

const upcomingBtn = document.querySelector("#button-upcoming-project");
upcomingBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return
  setActiveButton(upcomingBtn)
  let projectName = "Upcoming"
  displayDefault(projectName)
  getAddTaskElement().addEventListener('click', () => {
    createTaskForm()
    displayContainer.removeChild(getAddTaskElement())
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
  const cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('id', 'cancel-task-button');
  cancelBtn.textContent = "Cancel";
  addTaskFormTop.appendChild(taskTitle)
  addTaskFormTop.appendChild(taskDetails)
  addTaskFormTop.appendChild(dueDate)
  addTaskFormBottom.appendChild(addNewTaskBtn)
  addTaskFormBottom.appendChild(cancelBtn)
  addTaskForm.appendChild(addTaskFormTop)
  addTaskForm.appendChild(addTaskFormBottom)
  displayContainer.appendChild(addTaskForm)
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
  getAddTaskElement().addEventListener('click', () => {
    createTaskForm()
    displayContainer.removeChild(getAddTaskElement())
  })
}


todoPage()

function getAddTaskElement () {
  const addTaskBtn = document.getElementById(getButtonId());
  console.log(addTaskBtn)
  return addTaskBtn
}


