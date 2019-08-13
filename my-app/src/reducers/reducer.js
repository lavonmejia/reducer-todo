
export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }


  export const simpleReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_EDITING':
        return {
          ...state,
          completed: !state.completed
        };
      default:
        return state;
    }
  };