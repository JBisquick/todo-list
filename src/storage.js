
function saveToLocalStorage(projectList) {
  localStorage.setItem('projects', JSON.stringify(projectList));
}

function loadLocalStorage() { 
  let projectList = localStorage.getItem('projects');
  if (projectList === 'undefined') {
    projectList = [];
  }
  return JSON.parse(projectList);
}

export { saveToLocalStorage, loadLocalStorage };