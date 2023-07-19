import { useReducer } from "react";
import { MainContext } from "@/store";
import { mainReducer } from "@/store/reducers";
import { initialState } from "@/store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </MainContext.Provider>
  );
}
