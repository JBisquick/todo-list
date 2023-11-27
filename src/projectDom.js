import { createProject } from './project';

const projects = document.querySelector('.project-list');

function addProjectForm() {
	const form = document.createElement('div');
	form.classList.add('form');
	projects.appendChild(form);

	const projectInput = document.createElement('input');
	form.appendChild(projectInput);

	const buttonContainer = document.createElement('div');
	form.appendChild(buttonContainer);

	const add = document.createElement('button');
	buttonContainer.appendChild(add);
	add.textContent = 'Add';
	add.addEventListener('click', function() {
		removeProjectForm();
	});

	const cancel = document.createElement('button');
	buttonContainer.appendChild(cancel);
	cancel.textContent = 'Cancel';
	cancel.addEventListener('click', removeProjectForm);
}

function removeProjectForm() {
	const form = document.querySelector('.form');
	form.remove();
}


export { addProjectForm };