import { createProject, projectList } from './project';
import { addProjectForm } from './projectDom';
import { createTodo, deleteTodo } from './todo'
import './styles.css';

const addProject = document.querySelector('.project-title');

addProject.addEventListener('click', addProjectForm);

createProject('bob');

createTodo('bob', 'Take dog to the bathroom', 'They got to go POOP', '12/12/23');
createTodo('bob', 'Take dog to the park', 'They got to go have FUN', '12/22/23');
deleteTodo('bob', 'Take dog to the bathroom');
console.log(projectList);