
function saveToLocalStorage(projectList) {
  localStorage.setItem('projects', JSON.stringify(projectList));
}

function loadLocalStorage() { 
  let projectList = localStorage.getItem('projects');
  if (projectList === 'undefined' || projectList === 'null') {
    projectList = JSON.stringify([]);
  }
  return JSON.parse(projectList);
}

export { saveToLocalStorage, loadLocalStorage };