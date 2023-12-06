import { createProject, removeProject, findProject, projectList } from './project';
import { createTodo } from './todo';

const projects = document.querySelector('.project-list');

function addProjectForm() {
	const projectTitle = document.querySelector('.project-title');
	projectTitle.style.display = 'none'; 
	const form = document.createElement('div');
	form.classList.add('project-form');
	projects.prepend(form);

	const projectInput = document.createElement('input');
	form.appendChild(projectInput);
	projectInput.setAttribute('type', 'text');
	projectInput.setAttribute('placeholder', 'Project Name');
	projectInput.setAttribute('maxlength', '20');

	const buttonContainer = document.createElement('div');
	form.appendChild(buttonContainer);

	const add = document.createElement('button');
	buttonContainer.appendChild(add);
	add.textContent = 'Add';
	add.addEventListener('click', function(e) {
		createProject(projectInput.value);
		removeProjectForm();
		loadProjectDivs();
		projectTitle.style.display = 'flex'; 
	});

	const cancel = document.createElement('button');
	buttonContainer.appendChild(cancel);
	cancel.textContent = 'Cancel';
	cancel.addEventListener('click', function() {
		removeProjectForm();
		projectTitle.style.display = 'flex'; 
	});
}

function removeProjectForm() {
	const form = document.querySelector('.project-form');
	form.remove();
}

function loadProjectDivs() {
	removeProjectDivs();
	for (const project of projectList) {
		const projectDiv = document.createElement('div');
		projectDiv.classList.add('project-div');
		projects.appendChild(projectDiv);

		const projectNameDiv = document.createElement('div');
		projectDiv.appendChild(projectNameDiv);
		projectNameDiv.textContent = project.name;
    projectNameDiv.addEventListener('click', function (e) {
      loadProjectTitle(e);
			loadTodoList(findProject(e.target.textContent));
    })

		const trash = document.createElement('div');
		projectDiv.appendChild(trash);
		trash.textContent = '-';
		trash.addEventListener('click', function() {
			removeProject(project.name);
			loadProjectDivs();
		});
	}
}

function removeProjectDivs() {
	while (projects.hasChildNodes()) {
		projects.removeChild(projects.firstChild);
	}
}

function loadProjectTitle(e) {
  const todoTitle = document.querySelector('.todo-title');
  todoTitle.textContent = e.target.textContent;
}


function loadTodoList(todoList) {
  unloadTodoList ();

  const todoContent = document.querySelector('.todo-content');
  const todoListContainer = document.createElement('div');
  todoListContainer.classList.add('todo-list-container');
  todoContent.appendChild(todoListContainer);
  
  for (const todo of todoList) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    todoListContainer.appendChild(todoContainer);

    const todoTitle = document.createElement('div');
    todoTitle.textContent = todo.title;
    todoContainer.appendChild(todoTitle);
  }
}

function unloadTodoList() {
  const todoList = document.querySelector('.todo-list-container');
  todoList.remove();
}

function submitTodo() {
  const projectName = document.querySelector('.todo-title').textContent;
  const name = document.querySelector('#todo-name').value;
  const description = document.querySelector('#todo-description').value;
  const dueDate = document.querySelector('#todo-date').value;
  createTodo(projectName, name, description, dueDate);
  loadTodoList(findProject(projectName));
}


export { addProjectForm, loadTodoList, submitTodo };