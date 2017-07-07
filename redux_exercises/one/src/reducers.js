var initialState = {};

export function Diary (state, action) {
  if (state === undefined) {
    return initialState;
  }
  switch (action.type) {
    case 'ADD_Diary':
      return Object.assign(
        {},
        state,
        {[action.id]: action.data}
      );
    default:
      return state;
  }
}
