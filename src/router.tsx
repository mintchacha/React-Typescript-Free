import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import Application from "./components/Application.tsx";
import Game from "./components/Game";
import NotFound from "./components/NotFound.tsx";
import Input01 from "./components/Sample/Input01.tsx";
import Input02 from "./components/Sample/Input02.tsx";
import Sample from "./components/Sample/Sample.tsx";
import Issue from "./components/Typescript/Issue.tsx";
import TypeScript from "./components/Typescript/TypeScript.tsx";
import UseEffect from "./components/Typescript/UseEffect.tsx";
import UseRef from "./components/Typescript/UseRef.tsx";
import UseState from "./components/Typescript/UseState.tsx";

const router = createBrowserRouter([
  { path: "/React-Typescript-Free", element: <App /> },
  {
    path: "/React-Typescript-Free/inputs",
    element: <Sample />,
    children: [
      { path: "input01", element: <Input01 /> },
      { path: "input02/:id", element: <Input02 /> },
    ],
  },
  {
    path: "/React-Typescript-Free/typescript/",
    element: <TypeScript />,
    children: [
      { path: "issue", element: <Issue /> },
      { path: "useRef", element: <UseRef /> },
      { path: "useState", element: <UseState /> },
      { path: "useEffect", element: <UseEffect /> },
    ],
  },
  {
    path: "/React-Typescript-Free/game",
    element: <Game />,
  },
  {
    path: "/React-Typescript-Free/application",
    element: <Application />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
