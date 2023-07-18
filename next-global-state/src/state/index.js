import { createContext } from "react";

export const MainContext = createContext({});

export const initialState = {
  username: "Pippo",
  isLogged: true,
};
