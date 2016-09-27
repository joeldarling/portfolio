const TOGGLE_SHOW_PROJECT = 'TOGGLE_SHOW_PROJECT';

export const showProjectReducer = (state = false, action = {}) => {
  switch(action.type){
    case TOGGLE_SHOW_PROJECT:
      return !state;
    default:
      return state;
  }
}
