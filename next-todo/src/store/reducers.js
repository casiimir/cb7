export const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "SET_TODO_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    case "SET_LOGOUT":
      return {
        ...state,
        username: "",
      };
    default:
      return state;
  }
};
