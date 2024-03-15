import { useEffect, useRef, useState } from "react";

import inputsStyle from "../assets/inputs.module.css";

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

    setCommentList([
      ...commentList,
      {
        id: commentCount.current,
        ...comment,
      },
    ]);
    commentCount.current += 1;
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

  return (
    <section className={inputsStyle.input_wrap01}>
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
        <button onClick={submit}>확인</button>
      </form>
      <article>
        <div>
          <p>작성자 : {comment.name}</p>
          <p>내용 : {comment.content}</p>
        </div>
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
    </section>
  );
};

export default Input01;
