import { createProject, findProject } from './project';
import { addProjectForm, loadProjectDivs, loadTodoList, submitTodo, resetTodoForm, addTodoForm } from './dom';
import { createTodo } from './todo'
import './styles.css';

const addProject = document.querySelector('.project-title');
const submitButton = document.querySelector('.submit');
const cancelButton = document.querySelector('.cancel');
const addTodo = document.querySelector('.add-todo');

addProject.addEventListener('click', addProjectForm);
submitButton.addEventListener('click', submitTodo);
cancelButton.addEventListener('click', resetTodoForm);
addTodo.addEventListener('click', addTodoForm)


createProject('bob');

createTodo('bob', 'Take dog to the bathroom', 'They got to go POOP', '12/12/23');
createTodo('bob', 'Take dog to the park', 'They got to go have FUN', '12/22/23');

loadTodoList(findProject('bob'));
loadProjectDivs();