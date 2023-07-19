import { createContext } from "react";

export const MainContext = createContext({});

export const initialState = {
  todos: [],
  username: "",
};
