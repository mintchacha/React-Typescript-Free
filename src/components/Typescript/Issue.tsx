import typescriptStyle from "./typescript.module.css";

const Issue = () => {
  return (
    <article className={typescriptStyle.issue}>
      <h2 className={typescriptStyle.title}>Issue</h2>

      <section>
        <h3>TypeScript 유의사항</h3>
        <ul>
          <li>11</li>
        </ul>
      </section>

      <section>
        <h3>React 신규 이슈 정리</h3>
        <ul>
          <li>React 19가 출시됩니다!!</li>
        </ul>
      </section>

      <section>
        <h3>기타 작업 이슈, 히스토리 정리</h3>
        <a
          href="https://blog.naver.com/mlcartoon/223382174071"
          target="_blank"
          rel="noopener noreferrer"
        >
          개인 블로그
        </a>
      </section>
    </article>
  );
};

export default Issue;
