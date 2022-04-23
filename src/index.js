import './assets/styles.css';
import {isToday, toDate, isThisWeek, isBefore, endOfToday, add, format,} from "date-fns"

const body = document.querySelector('body');
const date = new Date();
const dateFormat = format(date, "yyyy-MM-dd")
console.log(dateFormat)


let taskLibrary = [];
let tasksToday = [];
let tasksUpcoming = [];

const displayContainer = document.querySelector(".todo-list-display-container");
const listHolder = document.createElement('div');
const todoListUl = document.createElement('ul');
const listHead = document.createElement("h2");

function Task(title, description, date) {
  this.title = title
  this.description = description
  this.date = date
}

if (localStorage.getItem('tasks') === null) {
    taskLibrary = [];
} else {
  const taskFromStorage = JSON.parse(localStorage.getItem('tasks'));
  taskLibrary = taskFromStorage;
}

function addTaskToLibrary(title, description, date) {
  const task = new Task(title, description, date)
  if (isToday(new Date(date))) {
    tasksToday.push(task)
    
  }
  console.log(tasksToday)
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
    getAddTaskButton().style.display = 'none'
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
  listHead.setAttribute('class', 'list-header')
  listHead.textContent = projectName
  listHolder.setAttribute('class', 'todo-list-holder');
  todoListUl.setAttribute('class', 'task-list-section')
  createTodo()
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
  listHolder.appendChild(todoListUl)
  displayContainer.appendChild(listHead)
  displayContainer.appendChild(listHolder)
  displayContainer.appendChild(addTaskBtn)
  switch(projectName) {
    case "Inbox":
      addTaskBtn.setAttribute('id', 'inbox-add-btn');
      todoListUl.setAttribute('id', 'inbox-todo-list-details');
      break;
    case "Today":
      addTaskBtn.setAttribute('id', 'today-add-btn');
      todoListUl.setAttribute('id', 'today-todo-list-details');
      break;
    case "Upcoming":
      addTaskBtn.setAttribute('id', 'upcoming-add-btn');
      todoListUl.setAttribute('id', 'upcoming-todo-list-details');
      break;
    default:
      return
  }
}

function getButtonId() {
  const idToGet = document.querySelector(".add-task-button");
  
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
  dueDate.min = format(new Date(), 'yyyy-MM-dd');
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
    displayContainer.removeChild(addTaskForm);
    
    getAddTaskButton().style.display = "block"
    createTodo()
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
  console.log(toDate(format(new Date(dueDateContent.value), 'dd.MMM')))
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
  
  return addTaskBtn
}

function getProject () {
  const projectButtonId = getButtonId()
}

function createTodo () {
  localStorage.setItem('tasks', JSON.stringify(taskLibrary));
  
  todoListUl.textContent = " ";
  for(let i=0; i<taskLibrary.length; i++) {
    const taskList = document.createElement('li');
    const taskListContainer = document.createElement('div');
    const taskCompletedContainer = document.createElement('div');
    const taskCompledtedCheck = document.createElement('input');
    taskCompledtedCheck.type = 'checkbox';
    const taskContentContainer = document.createElement('div');
    const taskContentWrapper = document.createElement('div');
    const taskContentHead = document.createElement('h4');
    taskContentHead.textContent = taskLibrary[i].title
    const taskContentDescription = document.createElement('p');
    taskContentDescription.textContent = taskLibrary[i].description
    const taskContentDateContainer = document.createElement('div');
    const taskContentDate = document.createElement('span');
    const taskDeleteContainer = document.createElement('div');
    const taskDeleteBtn = document.createElement('button');
    const taskDeleteImg = document.createElement('img');
    const contentDate =  taskLibrary[i].date;
    taskContentDate.textContent = contentDate ? format(new Date(contentDate), 'E dd'): contentDate
    taskList.setAttribute('class', 'task-list-item');
    taskListContainer.setAttribute('class', 'task-list-body');
    taskCompletedContainer.setAttribute('class', 'task-list-checkbox-container');
    taskCompledtedCheck.setAttribute('class', 'task-list-complete-checkbox');
    taskContentContainer.setAttribute('class', 'task-list-item-content');
    taskContentWrapper.setAttribute('class', 'task-list-item-content-wrapper');
    taskContentHead.setAttribute('class', 'task-content head')
    taskContentDescription.setAttribute('class', 'task-content description')
    taskContentDateContainer.setAttribute('class', 'task-content-date-container')
    taskContentDate.setAttribute('class', 'task-content date');
    taskDeleteContainer.setAttribute('class', 'task-list-item-delete-wrapper');
    taskDeleteBtn.setAttribute('class', 'task-delete-button hidden');
    taskDeleteImg.setAttribute('class', 'task-delete-img');
    taskDeleteImg.src = './icons8-delete-16.png'
    taskCompletedContainer.appendChild(taskCompledtedCheck);
    taskDeleteBtn.appendChild(taskDeleteImg);
    taskDeleteContainer.appendChild(taskDeleteBtn);
    taskContentWrapper.appendChild(taskContentHead);
    taskContentWrapper.appendChild(taskContentDescription);
    taskContentDateContainer.appendChild(taskContentDate);
    taskContentContainer.appendChild(taskContentWrapper);
    taskContentContainer.appendChild(taskContentDateContainer);
    taskListContainer.appendChild(taskCompletedContainer);
    taskListContainer.appendChild(taskContentContainer);
    taskListContainer.appendChild(taskDeleteContainer);
    taskList.appendChild(taskListContainer);
    todoListUl.appendChild(taskList);
  }
}
