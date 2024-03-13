import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import Game from "./components/Game";
import Input01 from "./components/Input01";
import Input02 from "./components/Input02";
import Inputs from "./components/Inputs";
import TypeScript from "./components/TypeScript";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "inputs",
    element: <Inputs />,
    children: [
      { path: "input01", element: <Input01 /> },
      { path: "input02/:id", element: <Input02 /> },
    ],
  },
  {
    path: "typescript",
    element: <TypeScript />,
  },
  {
    path: "game",
    element: <Game />,
  },
]);

export default router;
