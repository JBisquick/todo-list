import { findProject } from './project';

function createTodo(projectTitle, title, description, dueDate) {
  let checked = false;
  let important = false;
  const project = findProject(projectTitle);
  project.push({ title, description, dueDate, important, checked });
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


export { createTodo, deleteTodo };