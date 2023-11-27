import { } from './project';
import { addProjectForm } from './projectDom';
import './styles.css';

const addProject = document.querySelector('.project-title');

addProject.addEventListener('click', addProjectForm);