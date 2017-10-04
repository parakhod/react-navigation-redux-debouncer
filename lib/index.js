let navLocked = false;

const navigationDebouncer = (interval = 600) =>
  () => 
  next => 
  action => {
    if (action.type.split('/')[0] === 'Navigation') {
      if (navLocked) {
        return;
      } else {
        setTimeout(() => navLocked = false, interval);
        navLocked = true;
      }
    };
    next(action);
}

export default navigationDebouncer;
