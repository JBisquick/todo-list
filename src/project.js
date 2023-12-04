let projectList = [];

function createProject(name) {
  if (name === '') {
    return;
  }
  let todoList = [];
  projectList.push({ name, todoList });
}

function removeProject(name) {
  let i = 0;
  for (const project of projectList) {
    if (project.name === name) {
      projectList.splice(i, 1);
    }
    i++
  }
}

function findProject(projectName) {
  for (const project of projectList) {
    if (project.name === projectName) {
      return project.todoList;
    }
  }
}

export { createProject, removeProject, findProject, projectList };
