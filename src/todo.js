import { findProject, projectList } from './project';
import { saveToLocalStorage } from './storage.js';

function createTodo(projectTitle, title, description, dueDate) {
  let checked = false;
  let importance = false;
  const project = findProject(projectTitle).todoList;
  project.push({ title, description, dueDate, importance, checked });
  saveToLocalStorage(projectList);
}

function deleteTodo(project, name) {
  let i = 0;
  for (const todo of project.todoList) {
    if (todo.title === name) {
      project.todoList.splice(i, 1);
    }
    i++
  }
  saveToLocalStorage(projectList);
}

function changeTodoImportance(todo) {
  if (todo.importance === false) {
    todo.importance = true;
  } else {
    todo.importance = false;
  }
  saveToLocalStorage(projectList);
}

function changeChecked(todo) {
  if (todo.checked === false) {
    todo.checked = true;
  } else {
    todo.checked = false;
  }
  saveToLocalStorage(projectList);
}

export { createTodo, deleteTodo, changeTodoImportance, changeChecked };