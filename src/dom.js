import { createProject, removeProject, findProject, projectList } from './project';
import { createTodo, deleteTodo, changeTodoImportance, changeChecked } from './todo';
import { format } from 'date-fns';
import unimportant from './imgs/unimportant.png';
import important from './imgs/important.png';

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
      loadAllTodos();
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
  const todoAdd = document.querySelector('.add-todo');
  todoTitle.textContent = e.target.textContent;
  todoAdd.textContent = '+';
}

function addTodoDom(project, todo) {
  const todoListContainer = document.querySelector('.todo-list-container');

  const todoContainer = document.createElement('li');
  todoContainer.classList.add('todo-container');
  todoListContainer.appendChild(todoContainer);

  const checkBox = document.createElement('div');
  todoContainer.appendChild(checkBox);
  if (todo.checked === true) {
    checkBox.textContent = '+';
  } else {
    checkBox.textContent = '-';
  }
  checkBox.addEventListener('click', function(e) {changeCheckedDom(todo, e)});

  const todoInformation = document.createElement('div');
  todoInformation.classList.add('todo-information')
  todoContainer.appendChild(todoInformation);

  const todoTitle = document.createElement('div');
  todoTitle.textContent = todo.title;
  todoInformation.appendChild(todoTitle);

  const todoDescription = document.createElement('div');
  todoDescription.textContent = todo.description;
  todoInformation.appendChild(todoDescription);

  const dueDate = document.createElement('div');
  dueDate.textContent = todo.dueDate;
  todoContainer.appendChild(dueDate);

  const star = document.createElement('img');
  if (todo.importance === true) {
    star.src = important;
  } else {
    star.src = unimportant;
  }
  todoContainer.appendChild(star);
  star.addEventListener('click', function(e) {
    changeImportanceDom(todo, todoContainer, e)
  });

  const trash = document.createElement('div');
  trash.textContent = '-';
  trash.addEventListener('click', function() {
    todoContainer.remove();
    deleteTodo(project, todo.title);
  });
  todoContainer.appendChild(trash);
}

function changeImportanceDom(todo, container, e) {
  changeTodoImportance(todo);
  if (e.target.src === important) {
    e.target.src = unimportant;
  } else {
    e.target.src = important;
  }
  const todoTitle = document.querySelector('.todo-title');
  if (todoTitle.textContent === 'Important') {
    container.remove();
  }
}

function changeCheckedDom(todo, e) {
  changeChecked(todo);
  if (e.target.textContent === '+') {
    e.target.textContent = '-';
  } else {
    e.target.textContent = '+';
  }
}

function loadTodoList(project) {
  unloadTodoList ();

  const todoContent = document.querySelector('.todo-content');
  const todoListContainer = document.createElement('ul');
  todoListContainer.classList.add('todo-list-container');
  todoContent.appendChild(todoListContainer);
  
  for (const todo of project.todoList) {
    addTodoDom(project, todo);
  }
}

function unloadTodoList() {
  const todoList = document.querySelector('.todo-list-container');
  todoList.remove();
}

function submitTodo() {
  let projectName = document.querySelector('.todo-title').textContent;
  let title = document.querySelector('#todo-name').value;
  let description = document.querySelector('#todo-description').value;
  let dueDate = document.querySelector('#todo-date').value;
  if (validateTodoForm() === false) {
    return;
  }
  let importance = false;
  let checked = false;
  if (dueDate === '') {
    dueDate = 'No Due Date';
  } else {
    format(new Date(dueDate), 'yyyy-MM-dd');
  }
  createTodo(projectName, title, description, dueDate);
  addTodoDom(findProject(projectName), { title, description, dueDate, importance, checked });
  resetTodoForm();
}

function resetTodoForm() {
  const todoForm = document.querySelector('.form-background');
  todoForm.style.display = 'none';
	document.querySelector('#todo-name').value = '';
  document.querySelector('#todo-description').value = '';
  document.querySelector('#todo-date').value = '';
}

function addTodoForm() {
  const todoForm = document.querySelector('.form-background');
  todoForm.style.display = 'flex';
}

function validateTodoForm() {
  const name = document.querySelector('#todo-name').value;
  const description = document.querySelector('#todo-description').value;
  if (name === '') {
    alert('Need to fill out title.');
    return false;
  } else if (description === '') {
    alert('Need to fill out description.');
    return false;
  } else {
    return true;
  }
}

function loadAllTitle() {
  const todoTitle = document.querySelector('.todo-title');
  const todoAdd = document.querySelector('.add-todo');
  todoTitle.textContent = 'All';
  todoAdd.textContent = '';
}

function loadTodayTitle() {
  const todoTitle = document.querySelector('.todo-title');
  const todoAdd = document.querySelector('.add-todo');
  todoTitle.textContent = 'Today';
  todoAdd.textContent = '';
}

function loadWeekTitle() {
  const todoTitle = document.querySelector('.todo-title');
  const todoAdd = document.querySelector('.add-todo');
  todoTitle.textContent = 'Week';
  todoAdd.textContent = '';
}

function loadImportantTitle() {
  const todoTitle = document.querySelector('.todo-title');
  const todoAdd = document.querySelector('.add-todo');
  todoTitle.textContent = 'Important';
  todoAdd.textContent = '';
}

function loadAllTodos() {
  unloadTodoList();
  loadAllTitle();
  const todoContent = document.querySelector('.todo-content');
  const todoListContainer = document.createElement('ul');
  todoListContainer.classList.add('todo-list-container');
  todoContent.appendChild(todoListContainer);

  for (const project of projectList) {
    for (const todo of project.todoList) {
      addTodoDom(project, todo);
    }
  }
}

function loadImportantTodos() {
  unloadTodoList();
  loadImportantTitle();
  const todoContent = document.querySelector('.todo-content');
  const todoListContainer = document.createElement('ul');
  todoListContainer.classList.add('todo-list-container');
  todoContent.appendChild(todoListContainer);

  for (const project of projectList) {
    for (const todo of project.todoList) {
      if (todo.importance === true) {
        addTodoDom(project, todo);
      }
    }
  }
}

function loadTodayTodos() {
  unloadTodoList();
  loadTodayTitle();
  const todoContent = document.querySelector('.todo-content');
  const todoListContainer = document.createElement('ul');
  todoListContainer.classList.add('todo-list-container');
  todoContent.appendChild(todoListContainer);

  for (const project of projectList) {
    for (const todo of project.todoList) {
      const today = new Date();
      const due = new Date(todo.dueDate);
      const dueTimeMili = due.getTime() - today.getTime();
      const miliInDay = 86400000;
      if (dueTimeMili < miliInDay) {addTodoDom(project, todo)};
    }
  }
}

function loadWeekTodos() {
  unloadTodoList();
  loadWeekTitle();
  const todoContent = document.querySelector('.todo-content');
  const todoListContainer = document.createElement('ul');
  todoListContainer.classList.add('todo-list-container');
  todoContent.appendChild(todoListContainer);

  for (const project of projectList) {
    for (const todo of project.todoList) {
      const today = new Date();
      const due = new Date(todo.dueDate);
      const dueTimeMili = due.getTime() - today.getTime();
      const miliInWeek = 86400000*7;
      if (dueTimeMili < miliInWeek) {addTodoDom(project, todo)};
    }
  }
}

export { addProjectForm, loadProjectDivs, loadTodoList, submitTodo, resetTodoForm, addTodoForm, loadAllTodos, loadTodayTodos, loadWeekTodos, loadImportantTodos };