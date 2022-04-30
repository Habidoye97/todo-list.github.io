/* eslint-disable require-jsdoc */
import './assets/styles.css';
import {isToday, format, isBefore} from 'date-fns';

let tasksInbox = [];
let tasksToday = [];
let tasksUpcoming = [];
let overDueTask = [];
const todayDate = new Date(format(new Date(), 'yyyy-MM-dd'));

const displayContainer = document.querySelector('.todo-list-display-container');
const listHolder = document.createElement('div');
const todoListUl = document.createElement('ul');
const listHead = document.createElement('h2');
// eslint-disable-next-line max-len
const overDueTaskContainer = document.querySelector('.overdue-task-display-container');
const overDueTaskHeadContainer = document.createElement('div');
const overDueTaskHead = document.createElement('h3');
const overDueTaskUl = document.createElement('ul');
overDueTaskContainer.appendChild(overDueTaskHeadContainer);
overDueTaskHeadContainer.appendChild(overDueTaskHead);

function Task(title, description, date) {
  this.id = JSON.parse(localStorage.getItem('tasksInbox')).length + 1;
  this.title = title;
  this.description = description;
  this.date = date;
}

if (localStorage.getItem('tasksInbox') === null) {
  tasksInbox = [];
} else {
  const tasksInboxFromStorage = JSON.parse(localStorage.getItem('tasksInbox'));
  tasksInbox = tasksInboxFromStorage;
}

if (localStorage.getItem('tasksToday') === null) {
  tasksToday = [];
} else {
  const tasksTodayFromStorage = JSON.parse(localStorage.getItem('tasksToday'));
  tasksToday = tasksTodayFromStorage;
}

if (localStorage.getItem('tasksUpcoming') === null) {
  tasksUpcoming = [];
} else {
  // eslint-disable-next-line max-len
  const tasksUpcomingFromStorage = JSON.parse(localStorage.getItem('tasksUpcoming'));
  tasksUpcoming = tasksUpcomingFromStorage;
}

if (localStorage.getItem('overDueTask') === null) {
  overDueTask = [];
} else {
  // eslint-disable-next-line max-len
  const overDueTaskFromStorage = JSON.parse(localStorage.getItem('overDueTask'));
  overDueTask = overDueTaskFromStorage;
}

function addTaskToLibrary(title, description, date) {
  const task = new Task(title, description, date);
  if (title !== '' && description !=='' && date !== '') {
    if (isToday(new Date(date))) {
      tasksToday.push(task);
      tasksInbox.push(task);
      return;
    }
    if (!isToday(new Date(date))) {
      tasksUpcoming.push(task);
      tasksInbox.push(task);
      return;
    }
  } else {
    tasksInbox.push(task);
  }
}

// PROJECT BUTTON
const inboxBtn = document.querySelector('#button-inbox-project');
inboxBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return;
  setActiveButton(inboxBtn);
  createTodo(getProjectArray());
  showTaskNumber();
  const projectName = 'Inbox';
  displayDefault(projectName);
  getAddTaskButton().addEventListener('click', () => {
    createTaskForm();
    getAddTaskButton().style.display = 'none';
  });
});

const todayBtn = document.querySelector('#button-today-project');
todayBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return;
  setActiveButton(todayBtn);
  createTodo(getProjectArray());
  createOverDue();
  showTaskNumber();
  const projectName = 'Today';
  displayDefault(projectName);
  getAddTaskButton().addEventListener('click', () => {
    createTaskForm();
    getAddTaskButton().style.display = 'none';
  });
});

const upcomingBtn = document.querySelector('#button-upcoming-project');
upcomingBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return;
  setActiveButton(upcomingBtn);
  createTodo(getProjectArray());
  showTaskNumber();
  const projectName = 'Upcoming';
  displayDefault(projectName);
  getAddTaskButton().addEventListener('click', () => {
    createTaskForm();
    getAddTaskButton().style.display = 'none';
  });
});


function displayDefault(projectName) {
  displayContainer.textContent = '';
  listHead.setAttribute('class', 'list-header');
  listHead.textContent = projectName;
  listHolder.setAttribute('class', 'todo-list-holder');
  todoListUl.setAttribute('class', 'task-list-section');
  const addTaskBtn = document.createElement('button');
  addTaskBtn.setAttribute('class', 'add-task-button');
  const addTaskImg = document.createElement('img');
  addTaskImg.setAttribute('id', 'add-task-image');
  addTaskImg.src = './icons8-plus-64.png';
  const addTaskBtnText = document.createElement('span');
  addTaskBtnText.setAttribute('id', 'add-task-btn-text');
  addTaskBtnText.textContent = 'Add Task';
  addTaskBtn.appendChild(addTaskImg);
  addTaskBtn.appendChild(addTaskBtnText);
  listHolder.appendChild(todoListUl);
  displayContainer.appendChild(listHead);
  displayContainer.appendChild(listHolder);
  displayContainer.appendChild(addTaskBtn);
  switch (projectName) {
    case 'Inbox':
      addTaskBtn.setAttribute('id', 'inbox-add-btn');
      todoListUl.setAttribute('id', 'inbox-todo-list-details');
      break;
    case 'Today':
      addTaskBtn.setAttribute('id', 'today-add-btn');
      todoListUl.setAttribute('id', 'today-todo-list-details');
      break;
    case 'Upcoming':
      addTaskBtn.setAttribute('id', 'upcoming-add-btn');
      todoListUl.setAttribute('id', 'upcoming-todo-list-details');
      break;
    default:
      return;
  }
}

function getButtonId() {
  const idToGet = document.querySelector('.add-task-button');
  return idToGet.id;
}

function createTaskForm() {
  const addTaskForm = document.createElement('form');
  addTaskForm.setAttribute('id', 'addTaskForm');
  const addTaskFormTop = document.createElement('div');
  addTaskFormTop.setAttribute('id', 'addTaskFormTop');
  const taskTitle = document.createElement('textarea');
  taskTitle.setAttribute('id', 'taskTitleArea');
  taskTitle.placeholder = 'e.g. Read everyday p3 @goals #Learning';
  taskTitle.required;
  const taskDetails = document.createElement('textarea');
  taskDetails.setAttribute('id', 'taskDetailsArea');
  taskDetails.placeholder = 'Description';
  const dueDate = document.createElement('input');
  dueDate.setAttribute('id', 'dueDate');
  dueDate.min = format(new Date(), 'yyyy-MM-dd');
  dueDate.autocomplete = 'off';
  dueDate.type = 'date';
  const addTaskFormBottom = document.createElement('div');
  addTaskFormBottom.setAttribute('id', 'addTaskFormbottom');
  const addNewTaskBtn = document.createElement('button');
  addNewTaskBtn.setAttribute('id', 'add-new-task-button');
  addNewTaskBtn.textContent = 'Add Task';
  addNewTaskBtn.type = 'button';
  addNewTaskBtn.addEventListener('click', () => {
    getFormInput();
    displayContainer.removeChild(addTaskForm);
    getAddTaskButton().style.display = 'block';
    createTodo(getProjectArray());
    const activeProject = document.querySelector('.active');
    if (activeProject.id === 'button-today-project') {
      createOverDue();
    }
    showTaskNumber();
  });
  const cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('id', 'cancel-task-button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.type = 'button';
  cancelBtn.addEventListener('click', () => {
    addTaskForm.reset();
    displayContainer.removeChild(addTaskForm);
    getAddTaskButton().style.display = 'block';
  });
  addTaskFormTop.appendChild(taskTitle);
  addTaskFormTop.appendChild(taskDetails);
  addTaskFormTop.appendChild(dueDate);
  addTaskFormBottom.appendChild(addNewTaskBtn);
  addTaskFormBottom.appendChild(cancelBtn);
  addTaskForm.appendChild(addTaskFormTop);
  addTaskForm.appendChild(addTaskFormBottom);
  displayContainer.appendChild(addTaskForm);
}

function getFormInput() {
  const taskFormContent = document.querySelector('#addTaskForm');
  const taskTitleContent = document.querySelector('#taskTitleArea');
  const taskDetailsContent = document.querySelector('#taskDetailsArea');
  const dueDateContent = document.querySelector('#dueDate');
  if (taskTitleContent.value !== '' && taskDetailsContent.value !== '' ) {
    // eslint-disable-next-line max-len
    addTaskToLibrary(taskTitleContent.value, taskDetailsContent.value, dueDateContent.value);
  } else {
    if (taskTitleContent.value === '') {
      alert('Your Todo must have a Title');
    } else {
      alert('Your Todo must have description');
    }
  }
  taskFormContent.reset();
}

function setActiveButton(option) {
  const navOption = document.querySelectorAll('.button-default-project');
  navOption.forEach((button) => {
    if (option) {
      button.classList.remove('active');
    }
  });

  option.classList.add('active');
}

function todoPage() {
  displayDefault('Inbox');
  setActiveButton(document.querySelector('#button-inbox-project'));
  removeTodayTask();
  removeOverdueTask();
  createTodo(getProjectArray());
  getAddTaskButton().addEventListener('click', () => {
    createTaskForm();
    getAddTaskButton().style.display = 'none';
  });
  showTaskNumber();
}


todoPage();

function getAddTaskButton() {
  const addTaskBtn = document.getElementById(getButtonId());
  return addTaskBtn;
}

function getProjectArray() {
  const activeProject = document.querySelector('.active');
  if (activeProject.id === 'button-inbox-project') {
    return tasksInbox;
  }
  if (activeProject.id === 'button-today-project') {
    return tasksToday;
  }
  if (activeProject.id === 'button-upcoming-project') {
    return tasksUpcoming;
  }
}


function createTodo(projectArray) {
  localStorage.setItem('tasksInbox', JSON.stringify(tasksInbox));
  localStorage.setItem('tasksToday', JSON.stringify(tasksToday));
  localStorage.setItem('tasksUpcoming', JSON.stringify(tasksUpcoming));
  overDueTaskHead.textContent = '';
  overDueTaskUl.textContent = '';
  todoListUl.textContent = '';
  for (let i=0; i<projectArray.length; i++) {
    const taskList = document.createElement('li');
    const taskListContainer = document.createElement('div');
    const taskCompletedContainer = document.createElement('div');
    const taskCompledtedCheck = document.createElement('input');
    taskCompledtedCheck.type = 'checkbox';
    const taskContentContainer = document.createElement('div');
    const taskContentWrapper = document.createElement('div');
    const taskContentHead = document.createElement('h4');
    taskContentHead.textContent = projectArray[i].title;
    const taskContentDescription = document.createElement('p');
    taskContentDescription.textContent = projectArray[i].description;
    const taskContentDateContainer = document.createElement('div');
    const taskContentDate = document.createElement('span');
    const taskDeleteContainer = document.createElement('div');
    const taskDeleteBtn = document.createElement('button');
    const taskDeleteImg = document.createElement('img');
    const taskDate = projectArray[i].date;
    const date = taskDate ? format(new Date(taskDate), 'E dd'): taskDate;
    taskContentDate.textContent = date;
    taskList.setAttribute('class', 'task-list-item');
    taskListContainer.setAttribute('class', 'task-list-body');
    // eslint-disable-next-line max-len
    taskCompletedContainer.setAttribute('class', 'task-list-checkbox-container');
    taskCompledtedCheck.setAttribute('class', 'task-list-complete-checkbox');
    taskCompledtedCheck.addEventListener('click', () => {
      deleteTask(projectArray[i].id, '1 task completed ');
    });
    taskContentContainer.setAttribute('class', 'task-list-item-content');
    taskContentWrapper.setAttribute('class', 'task-list-item-content-wrapper');
    taskContentHead.setAttribute('class', 'task-content head');
    taskContentDescription.setAttribute('class', 'task-content description');
    // eslint-disable-next-line max-len
    taskContentDateContainer.setAttribute('class', 'task-content-date-container');
    taskContentDate.setAttribute('class', 'task-content date');
    taskDeleteContainer.setAttribute('class', 'task-list-item-delete-wrapper');
    taskDeleteBtn.setAttribute('class', 'task-delete-button hidden');
    taskDeleteBtn.addEventListener('click', function() {
      // eslint-disable-next-line max-len
      deleteTask(projectArray[i].id, `Are you sure u want to delete ${projectArray[i].title}`);
    });
    taskDeleteImg.setAttribute('class', 'task-delete-img');
    taskDeleteImg.src = './icons8-delete-16.png';
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

function deleteTask(taskId, message) {
  const storedTaskInbox = JSON.parse(localStorage.getItem('tasksInbox'));
  const storedTaskToday = JSON.parse(localStorage.getItem('tasksToday'));
  const storedTaskUpcoming = JSON.parse(localStorage.getItem('tasksUpcoming'));
  const storedTaskOverdue = JSON.parse(localStorage.getItem('overDueTask'));
  const selectedTask = storedTaskInbox.find((item) => item.id === taskId);
  const confirmTaskDelete = confirm(message);
  if (confirmTaskDelete) {
    if (isToday(new Date(selectedTask.date))) {
      const indexInInbox = storedTaskInbox.indexOf(selectedTask);
      const indexInToday = storedTaskToday.indexOf(selectedTask);
      if (indexInInbox > -1) {
        storedTaskInbox.splice(indexInInbox, 1);
        storedTaskToday.splice(indexInToday, 1);
        tasksInbox = storedTaskInbox;
        tasksToday = storedTaskToday;
        createTodo(getProjectArray());
        showTaskNumber();
        return;
      }
    }
    if (!isToday(new Date(selectedTask.date))) {
      if (Date.parse(new Date(selectedTask.date)) > Date.parse(new Date())) {
        const indexInInbox = storedTaskInbox.indexOf(selectedTask);
        const indexInUpcomming = storedTaskUpcoming.indexOf(selectedTask);
        if (indexInInbox > -1) {
          storedTaskInbox.splice(indexInInbox, 1);
          storedTaskUpcoming.splice(indexInUpcomming, 1);
          tasksInbox = storedTaskInbox;
          tasksUpcoming = storedTaskUpcoming;
          createTodo(getProjectArray());
          showTaskNumber();
          return;
        }
      } else {
        const indexInInbox = storedTaskInbox.indexOf(selectedTask);
        const indexInOverDue = storedTaskOverdue.indexOf(selectedTask);
        if (indexInInbox > -1) {
          storedTaskInbox.splice(indexInInbox, 1);
          storedTaskOverdue.splice(indexInOverDue, 1);
          tasksInbox = storedTaskInbox;
          overDueTask = storedTaskOverdue;
          createTodo(getProjectArray());
          showTaskNumber();
          return;
        }
      }
    }
  } else {
    return;
  }
};

function showTaskNumber() {
  const inboxTaskNumber = document.getElementById('number-of-inbox-task');
  const todayTaskNumber = document.getElementById('number-of-today-task');
  const upcomingTaskNumber = document.getElementById('number-of-upcoming-task');
  const inboxTasksCount = JSON.parse(localStorage.getItem('tasksInbox')).length;
  const todayTasksCount = JSON.parse(localStorage.getItem('tasksToday')).length;
  const upcomingCount =JSON.parse(localStorage.getItem('tasksUpcoming')).length;
  inboxTaskNumber.textContent = inboxTasksCount === 0 ? '':inboxTasksCount;
  todayTaskNumber.textContent = todayTasksCount===0 ? '': todayTasksCount;
  upcomingTaskNumber.textContent = upcomingCount === 0? '':upcomingCount;
}

document.getElementById('inpNavToggle').addEventListener('click', function() {
  const navBar = document.getElementById('nav');
  navBar.classList.toggle('display');
});

function removeOverdueTask() {
  for (let i = 0; i < tasksToday.length; i++) {
    if (isBefore(new Date(tasksToday[i].date), todayDate)) {
      overDueTask.push(tasksToday[i]);
      tasksToday[i] = '';
    }
  };
  tasksToday = tasksToday.filter((el)=> {
    return el != null && el != '';
  });
  localStorage.setItem('overDueTask', JSON.stringify(overDueTask));
}

function removeTodayTask() {
  for (let i = 0; i < tasksUpcoming.length; i++) {
    if (isToday(new Date(tasksUpcoming[i].date))) {
      tasksToday.push(tasksUpcoming[i]);
      tasksUpcoming[i] = '';
    }
  };
  tasksUpcoming = tasksUpcoming.filter((el)=> {
    return el != null && el != '';
  });
}
console.log(overDueTask);

function createOverDue() {
  overDueTaskContainer.appendChild(overDueTaskUl);
  overDueTaskHead.textContent = 'Overdue';
  overDueTaskUl.textContent = ' ';
  for (let i=0; i<overDueTask.length; i++) {
    const taskList = document.createElement('li');
    const taskListContainer = document.createElement('div');
    const taskCompletedContainer = document.createElement('div');
    const taskCompledtedCheck = document.createElement('input');
    taskCompledtedCheck.type = 'checkbox';
    const taskContentContainer = document.createElement('div');
    const taskContentWrapper = document.createElement('div');
    const taskContentHead = document.createElement('h4');
    taskContentHead.textContent = overDueTask[i].title;
    const taskContentDescription = document.createElement('p');
    taskContentDescription.textContent = overDueTask[i].description;
    const taskContentDateContainer = document.createElement('div');
    const taskContentDate = document.createElement('span');
    const taskDeleteContainer = document.createElement('div');
    const taskDeleteBtn = document.createElement('button');
    const taskDeleteImg = document.createElement('img');
    const taskDate = overDueTask[i].date;
    const date = taskDate ? format(new Date(taskDate), 'E dd'): taskDate;
    taskContentDate.textContent = date;
    taskList.setAttribute('class', 'overdue task-list-item');
    taskListContainer.setAttribute('class', 'overdue task-list-body');
    // eslint-disable-next-line max-len
    taskCompletedContainer.setAttribute('class', 'overdue task-list-checkbox-container');
    // eslint-disable-next-line max-len
    taskCompledtedCheck.setAttribute('class', 'overdue task-list-complete-checkbox');
    taskCompledtedCheck.addEventListener('click', () => {
      deleteTask(overDueTask[i].id, '1 task completed ');
    });
    // eslint-disable-next-line max-len
    taskContentContainer.setAttribute('class', 'overdue task-list-item-content');
    // eslint-disable-next-line max-len
    taskContentWrapper.setAttribute('class', 'overdue task-list-item-content-wrapper');
    taskContentHead.setAttribute('class', 'overdue-task-content head');
    // eslint-disable-next-line max-len
    taskContentDescription.setAttribute('class', 'overdue task-content description');
    // eslint-disable-next-line max-len
    taskContentDateContainer.setAttribute('class', 'overdue task-content-date-container');
    taskContentDate.setAttribute('class', 'overdue task-content date');
    // eslint-disable-next-line max-len
    taskDeleteContainer.setAttribute('class', 'overdue task-list-item-delete-wrapper');
    taskDeleteBtn.setAttribute('class', 'overdue task-delete-button hidden');
    taskDeleteBtn.addEventListener('click', function() {
      deleteTask(overDueTask[i].id, 'Are us sure u want to delete ');
    });
    taskDeleteImg.setAttribute('class', 'overdue task-delete-img');
    taskDeleteImg.src = './icons8-delete-16.png';
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
    overDueTaskUl.appendChild(taskList);
  }
  if (overDueTask.length === 0) {
    overDueTaskHead.textContent = '';
  }
}
console.log(Date.parse(new Date()));
