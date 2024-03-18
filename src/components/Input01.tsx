import { useEffect, useRef, useState } from "react";

import inputsStyle from "../assets/inputs.module.css";
import { StyledModal01 } from "./Ui/Layout";

const Input01: React.FC = () => {
  const commentCount = useRef(1);

  type comment = { id: number; name: string; content: string };
  const [comment, setComment] = useState({
    name: "",
    content: "",
  });

  const [commentList, setCommentList] = useState<comment[]>([]);

  useEffect(() => {
    console.log(commentList, commentCount);
  }, [commentList]);

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (comment.name == "") {
      alert("123");
    } else {
      return false;
    }

    setCommentList([
      ...commentList,
      {
        id: commentCount.current,
        ...comment,
      },
    ]);
    commentCount.current += 1;
    setModalState(!modalState);
  };

  const inputChanged = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  const [modalState, setModalState] = useState(false);
  const modal = useRef<HTMLDivElement>(null);
  const submitCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalState(!modalState);
  };
  return (
    <section className={inputsStyle.input_wrap01}>
      <h2>Input01</h2>
      <form action="./input01" method="get">
        <div>
          <input
            name="name"
            id="name"
            onInput={inputChanged}
            value={comment.name}
          />
        </div>
        <div>
          <textarea
            name="content"
            id="content"
            onInput={inputChanged}
            value={comment.content}
          />
        </div>
        <button onClick={submitCheck}>확인</button>
      </form>
      <article>
        <h3>List</h3>
        {commentList
          ? commentList.map((item, index) => {
              return (
                <div key={index}>
                  <p>{item.name}</p>
                  <p>{item.content}</p>
                </div>
              );
            })
          : null}
      </article>

      {modalState ? (
        <StyledModal01 ref={modal}>
          <h3>이 내용으로 커밋하시겠습니까?</h3>
          <p>작성자 : {comment.name}</p>
          <p>내용 : {comment.content}</p>
          <div>
            <button onClick={submit}>네</button>
            <button className="red" onClick={submitCheck}>
              아니요
            </button>
          </div>
        </StyledModal01>
      ) : null}
    </section>
  );
};

export default Input01;
