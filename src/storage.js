
function saveToLocalStorage(projectList) {
  localStorage.setItem('projects', JSON.stringify(projectList));
}

function loadLocalStorage() { 
  let projectList = localStorage.getItem('projects');
  // For the first time loading in the page to start as an array
  if (projectList === 'undefined' || projectList === null) {
    projectList = JSON.stringify([]);
  }
  return JSON.parse(projectList);
}

export { saveToLocalStorage, loadLocalStorage };