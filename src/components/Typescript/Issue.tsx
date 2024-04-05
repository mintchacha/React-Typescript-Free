import typeScriptStyle from "./typescript.module.css";

const Issue = () => {
  return (
    <article className={typeScriptStyle.issue}>
      <h2 className={typeScriptStyle.title}>Issue</h2>

      <section className={typeScriptStyle["content-wrap"]}>
        <h3>TypeScript 유의사항</h3>
        <ul className={typeScriptStyle["list-style02"]}>
          <li>
            React.FC 타입 선언은 props동작이 일관되지 않기 때문에 권장되지
            않는다.
          </li>
          <li>
            hook에 간단한 인자만 들어간다면 꼭 type 설정해줄 필요는 없다. 상태가
            null 일 수도 있고 아닐수도 있을 때 Generics(데이터 타입)설정 해준다
          </li>
          <li>컴포넌트의 생성과 삭제원리는 Life Cycle에 기반한다.</li>
          <li>
            Hook의 생성은 일부를 제외하고 기본적으로 컴포넌트 함수 내부에서
            호출되어져야 하며. setter 함수또한 onClick이벤트 혹은 전역으로
            사용하면 안되고 함수안에 한번더 감싸서 작동 해야한다.
          </li>
        </ul>
      </section>

      <section className={typeScriptStyle["content-wrap"]}>
        <h3>React 신규 이슈 정리</h3>
        <ul className={typeScriptStyle["list-style01"]}>
          <li>
            <h4>2024.03.19 / React 19가 출시됩니다!!</h4>
            <ul className={typeScriptStyle["list-style02"]}>
              <li>Hook의 시대는가고 컴파일러의 시대가 온다.</li>
              <li>useMemo, useCallback 자동 최적화</li>
              <li>if 문 내부에 use(Context) 호출 등.</li>
            </ul>
          </li>
          <li>
            <h4>2024.03.19 / 어쩌구 저쩌구...</h4>
          </li>
        </ul>
      </section>

      <section className={typeScriptStyle["content-wrap"]}>
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
