import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import Game from "./components/Game";
import Input01 from "./components/Input01";
import Input02 from "./components/Input02";
import Inputs from "./components/Inputs";
import NotFound from "./components/NotFound.tsx";
import TypeScript from "./components/TypeScript";

const router = createBrowserRouter([
  { path: "/2024", element: <App /> },
  {
    path: "/2024/inputs",
    element: <Inputs />,
    children: [
      { path: "input01", element: <Input01 /> },
      { path: "input02/:id", element: <Input02 /> },
    ],
  },
  {
    path: "/2024/typescript",
    element: <TypeScript />,
  },
  {
    path: "/2024/game",
    element: <Game />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
