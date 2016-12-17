const StorageHelper = {
  loadState: loadState,
  saveState: saveState
};

function loadState() {
  try {
    const serializedState = localStorage.getItem('canoe-state');
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err) {
    console.log('No stored state');
    return undefined;
  }
}

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('canoe-state', serializedState);
  } catch (err) {
    console.log('Error whilst saving to local storage: ' + err);
  }
}

export default StorageHelper;