import { createTodo, deleteTodo } from './todo'

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

export { loadTodoList };