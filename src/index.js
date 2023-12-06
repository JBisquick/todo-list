import { createProject, findProject } from './project';
import { addProjectForm, loadTodoList, submitTodo, resetTodoForm } from './dom';
import { createTodo, deleteTodo } from './todo'
import './styles.css';

const addProject = document.querySelector('.project-title');
const submitButton = document.querySelector('.submit');
const cancelButton = document.querySelector('.cancel');

addProject.addEventListener('click', addProjectForm);
submitButton.addEventListener('click', submitTodo);
cancelButton.addEventListener('click', resetTodoForm);

createProject('bob');

createTodo('bob', 'Take dog to the bathroom', 'They got to go POOP', '12/12/23');
createTodo('bob', 'Take dog to the park', 'They got to go have FUN', '12/22/23');

loadTodoList(findProject('bob'));