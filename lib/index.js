let navLocked = false;
let lastActionType = null;

const navigationDebouncer = (interval = 600) =>
  () => 
  next => 
  action => {
    if (action.type && action.type.split('/')[0] === 'Navigation') {
      if (action.type !== 'Navigation/SET_PARAMS') {
        if (navLocked && (action.type === lastActionType)) {
          return;
        } else {
          setTimeout(() => navLocked = false, interval);
          navLocked = true;
          lastActionType = action.type;
        }
      }
    };
    next(action);
}

export default navigationDebouncer;