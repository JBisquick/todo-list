import { findProject } from './project';
import { format } from 'date-fns';

function createTodo(projectTitle, title, description, dueDate) {
  let checked = false;
  let importance = false;
  const project = findProject(projectTitle);
  if (dueDate === '') {
    dueDate = 'No Due Date';
  } else {
    format(new Date(dueDate), 'yyyy-MM-dd');
  }
  project.push({ title, description, dueDate, importance, checked });
}

function deleteTodo(projectTitle, name) {
  const project = findProject(projectTitle);
  let i = 0;
  for (const todo of project) {
    if (todo.title === name) {
      project.splice(i, 1);
    }
    i++
  }
}

function changeTodoImportance(todo) {
  if (todo.importance === false) {
    todo.importance = true;
  } else {
    todo.importance = false;
  }
}

export { createTodo, deleteTodo, changeTodoImportance };