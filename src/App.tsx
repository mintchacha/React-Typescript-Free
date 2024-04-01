import { useState } from "react";

import viteLogo from "../public/vite.svg";
import AppStyles from "./App.module.css";
import reactLogo from "./assets/react.svg";

import Header from "./components/Common/Header.tsx";

function App() {
  const [count, setCount] = useState(0);
  const name: string = "hello";
  return (
    <>
      <Header />
      <section className={AppStyles.app}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className={AppStyles.logo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className={`${AppStyles.logo} react`}
              alt="React logo"
            />
          </a>
        </div>
        <h2>{name} Vite + React</h2>
        <div className={AppStyles.card}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            <a
              href="https://github.com/mintchacha/React-Typescript-Free"
              target="_blank"
              rel="noopener noreferrer"
              className={AppStyles.giticon}
            ></a>
          </p>
        </div>
        <p className={AppStyles["read-the-docs"]}>
          Click on the Vite and React logos to learn more
        </p>
      </section>
    </>
  );
}

export default App;
