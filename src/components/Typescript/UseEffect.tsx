import { useEffect } from "react";
import typeScriptStyle from "./typescript.module.css";

const UseEffect = () => {
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <article className={typeScriptStyle.UseEffect}>
      <div className={typeScriptStyle.title}>
        <h2>useEffect</h2>
        <p>용도 :</p>
      </div>
    </article>
  );
};

export default UseEffect;
