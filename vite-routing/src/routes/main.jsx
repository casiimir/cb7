import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";
import ConfettiLayout from "../layouts/confettiLayout";
import DefaultLayout from "../layouts/defaultLayout";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <h1 style={{ marginTop: "50px" }}>ABOUT</h1>,
//   },
//   {
//     path: "/who",
//     element: (
//       <ConfettiLayout>
//         <div style={{ marginTop: "50px" }}>
//           <iframe width="100%" height="600" src="https://edgemony.com"></iframe>
//         </div>
//       </ConfettiLayout>
//     ),
//   },
//   {
//     path: "/todo/:id",
//     element: (
//       <ConfettiLayout>
//         <Todo />
//       </ConfettiLayout>
//     ),
//   },
// ]);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />}>
        <Route
          path="/about"
          element={<h1 style={{ marginTop: "50px" }}>ABOUT</h1>}
        />
        <Route
          path="/who"
          element={
            <ConfettiLayout>
              //{" "}
              <div style={{ marginTop: "50px" }}>
                //{" "}
                <iframe
                  width="100%"
                  height="600"
                  src="https://edgemony.com"
                ></iframe>
                //{" "}
              </div>
              //{" "}
            </ConfettiLayout>
          }
        />
        <Route
          path="/todo/:id"
          element={
            <ConfettiLayout>
              <Todo />
            </ConfettiLayout>
          }
        />
      </Route>
    </Route>
  )
);
