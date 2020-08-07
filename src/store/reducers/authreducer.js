const initialState = false;

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      state = true;
      return state;
    case "LOGOUT":
      state = false;
      return state;
    default:
      return state;
  }
};
