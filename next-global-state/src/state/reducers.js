export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGIN": // ACTIONS
      return {
        // Nuovo stato di ritorno
        ...state,
        isLogged: true,
      };
    case "SET_LOGOUT":
      return {
        ...state,
        isLogged: false,
      };
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    default:
      console.log(state);
      return state;
  }
};
