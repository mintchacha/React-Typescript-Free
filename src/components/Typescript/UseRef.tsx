import { useRef } from "react";
import typeScriptStyle from "./typescript.module.css";

const UseRef = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  return (
    <article className={typeScriptStyle["useRef"]}>
      <div className={typeScriptStyle.title}>
        <h2 ref={ref}>useRef</h2>
        <p>
          용도 : 간단한 상태를 세팅해서 사용하거나 HTML요소에 접근하는 용도.
          current 에 사용자의 설정이 담긴다.
        </p>
      </div>
      <section className={typeScriptStyle["content-wrap"]}>
        <h3>유의 사항</h3>
        <ul className={typeScriptStyle["list-style02"]}>
          <li>current 값이 변경되어도 리렌더링 되지 않는다.</li>
          <li>
            어떤 타입을 주냐에 따라 MutableRefObject&lt;T&gt;와
            RefObject&lt;T&gt; 형식으로 나뉜다.
          </li>
          <li>
            <a
              href="https://driip.me/7126d5d5-1937-44a8-98ed-f9065a7c35b5"
              target="_blank"
              rel="noopener noreferrer"
            >
              설명 참조
            </a>
          </li>
        </ul>
      </section>
      <section className={typeScriptStyle["content-wrap"]}>
        <h3>관련 설명</h3>
        <ul className={typeScriptStyle["list-style01"]}>
          <li>
            <h4>값을 넣어주는 방법은 간단하다.</h4>
            <div className={typeScriptStyle["codebox"]}>
              <div>
                <p>const ref = useRef("값");</p>
              </div>
              <p>
                {`console.log(ref.current);`}
                <span className={typeScriptStyle.annotation}>// "값"</span>
              </p>
            </div>
          </li>

          <li className={typeScriptStyle["content-wrap"]}>
            <h4>
              HTML요소를 연결 하려면 요소에 ref 속성으로 넣어서 연결해준다.
            </h4>
            <div className={typeScriptStyle["codebox"]}>
              <div>
                <p>
                  const ref = useRef
                  <span className={typeScriptStyle.type}>
                    &lt;HTMLElement&gt;
                  </span>
                  (null);
                </p>
                <p>
                  ref.current
                  <span className={typeScriptStyle.annotation}>
                    // 요소 컨트롤
                  </span>
                </p>
              </div>
              <p>
                <span className={typeScriptStyle.annotation}>// tsx</span>
              </p>
              <p>&lt;div ref=&#123;ref&#125;&gt;children&lt;/div&gt;</p>
            </div>
            <p>
              첫 인자를 null로 설정하는 이유는 HTML이 렌더링되기 전에 useRef가
              생성되기 때문에 초기값이 undefined이기 때문이다.(Life Cycle문제)
              HTMLElement에서는(RefObject타입) undefined타입이 오면 에러이기
              때문에 초기값을 null로 설정한다.
            </p>
          </li>

          <li className={typeScriptStyle["content-wrap"]}>
            <h4>
              초기값이 null 이기때문에 당연히 원시데이터를 넣어줬을때와 다르게
              요소의 정보를 확인할 수 없다. 렌더링 후에 값을 확인 하기위해서는
              useEffect를 이용하는 방법이 있다.
            </h4>
            <div className={typeScriptStyle["codebox"]}>
              <div>
                <p>
                  const ref = useRef
                  <span className={typeScriptStyle.type}>
                    &lt;HTMLElement&gt;
                  </span>
                  (null);
                </p>
                <p>
                  {` console.log(ref.current);`}
                  <span className={typeScriptStyle.annotation}>// null</span>
                </p>
              </div>
              <p>
                <span className={typeScriptStyle.annotation}>
                  // 값을 확인하고 싶다면 useEffect를 사용해서 확인하자.
                </span>
              </p>
              <p>
                {` useEffect(() => { `}
                <br />
                &nbsp; {` console.log(ref.current);`}
                <span className={typeScriptStyle.annotation}>// ref 출력</span>
                <br />
                {` }, [ref]);`}
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default UseRef;
