let projectList = [];

function createProject(name) {
  if (name === '') {
    return;
  }
  let todoList = [];
  projectList.push({ name, todoList });
  console.log(projectList);
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

export { createProject, removeProject, projectList };
