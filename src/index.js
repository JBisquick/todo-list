import { addProjectForm, submitTodo, resetTodoForm, addTodoForm, loadAllTodos, loadTodayTodos, loadWeekTodos, loadImportantTodos, loadProjectDivs } from './dom';
import './styles.css';

const addProject = document.querySelector('.project-title');
const submitButton = document.querySelector('.submit');
const cancelButton = document.querySelector('.cancel');
const addTodo = document.querySelector('.add-todo');
const all = document.querySelector('#all');
const today = document.querySelector('#today');
const week = document.querySelector('#week');
const important = document.querySelector('#important');

addProject.addEventListener('click', addProjectForm);
submitButton.addEventListener('click', submitTodo);
cancelButton.addEventListener('click', resetTodoForm);
addTodo.addEventListener('click', addTodoForm)
all.addEventListener('click', loadAllTodos);
today.addEventListener('click', loadTodayTodos);
week.addEventListener('click', loadWeekTodos);
important.addEventListener('click', loadImportantTodos);

loadAllTodos();
loadProjectDivs();