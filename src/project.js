import { saveToLocalStorage, loadLocalStorage } from './storage.js';

let projectList = loadLocalStorage();

function createProject(name) {
  if (name === '') {
    return;
  }
  let todoList = [];
  projectList.push({ name, todoList });
  saveToLocalStorage(projectList);
}

function removeProject(name) {
  let i = 0;
  for (const project of projectList) {
    if (project.name === name) {
      projectList.splice(i, 1);
    }
    i++
  }
  saveToLocalStorage(projectList);
}

function findProject(projectName) {
  for (const project of projectList) {
    if (project.name === projectName) {
      return project;
    }
  }
}

export { createProject, removeProject, findProject, projectList };
