import { useSearchParams } from "react-router-dom";
import inputsStyle from "../assets/inputs.module.css";

const Input01 = () => {
  const submit = () => {
    alert("입력 완료.");
  };

  const [param] = useSearchParams();
  const name = param.get("name");
  const content = param.get("content");

  return (
    <section className={inputsStyle.input_wrap01}>
      {param && (
        <div>
          <p>작성자 : {name}</p>
          <p>내용 : {content}</p>
        </div>
      )}
      <form action="./input01" method="get">
        <div>
          <input name="name" id="name" />
        </div>
        <div>
          <textarea name="content" />
        </div>
        <button onClick={submit}>확인</button>
      </form>
    </section>
  );
};

export default Input01;
