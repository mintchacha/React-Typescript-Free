import { useState } from "react";
import typeScriptStyle from "./typescript.module.css";

const UseState = () => {
  const [state, setState] = useState("state");
  const click = () => {
    setState("setState");
  };
  const statePrev = state;

  const [user, setUser] = useState({
    name: "홍길동",
    phone: "010-1111-1111",
  });
  const nameChange = () => {
    setUser({
      ...user,
      name: "박찬호",
    });
  };

  return (
    <article className={typeScriptStyle.useState}>
      <div className={typeScriptStyle.title}>
        <h2>useState</h2>
        <p>용도 : 상태를 담아 사용하고 배열과 객체를 수정할 수도 있다.</p>
      </div>
      <section className={typeScriptStyle["content-wrap"]}>
        <h3>관련 설명</h3>
        <ul className={typeScriptStyle["list-style01"]}>
          <li>
            <h4>
              데이터를 넣어주는 데에 쓰인다. 생태가 변하면 화면이 리렌더링 된다.
            </h4>
            <div className={typeScriptStyle["codebox"]}>
              <div>
                <p>const [state, setState] = useState("값");</p>
                <p className={typeScriptStyle.annotation}>
                  // 여기서 [] = useState() 로 호출하는 방식은 React 의
                  규칙으로, const [a, b] = Array 처럼 구조분해할당으로
                  배열내부의 요소들을 변수이름으로 바로 받아오는 것과는 관계가
                  없는듯. (객체는 대괄호대신 중괄호로)
                </p>
              </div>
              <p>
                {`console.log(${statePrev});`}
                <span className={typeScriptStyle.annotation}>// "값"</span>
                <button onClick={click}>setState 예시</button>
              </p>
            </div>
          </li>

          <li>
            <h4>
              ...라는 점세개로 작성하는 전개연산자(혹은 스프레드문법) 를
              사용하여 기존 객체형식을 복사해오면 필요한부분만 수정할 수 있다.
            </h4>
            <div className={typeScriptStyle["codebox"]}>
              <div>
                <p>{`const [user, setUser] = useState({`}</p>
                <p>&nbsp;&nbsp;{`id : 1,`}</p>
                <p>&nbsp;&nbsp;{`name : "홍길동",`}</p>
                <p>&nbsp;&nbsp;{`phone : 010-1111-1111,`}</p>
                <p>{`});`}</p>
              </div>
              <div>
                <p>{`const nameChange = () => {`}</p>
                <p>&nbsp;&nbsp;{`setUser({)`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`...user,`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`name : "박찬호"`}</p>
                <p>&nbsp;&nbsp;{`})`}</p>
                <p>{`}`}</p>
              </div>
              <p>
                <span className={typeScriptStyle.annotation}>
                  // 이름 : {user.name}
                </span>
                <button onClick={nameChange}>setState 예시02</button>
              </p>
            </div>
            <p>
              객체자체를 복사 해 오는 것이 아니다! 객체의 데이터를 그대로
              가져오기만 하는 것이다(깊은 복사). 실제로 배열1과 ...배열1을
              할당한 배열2를 비교연산자로 비교해보면 false가 뜬다. 왜냐면
              배열이나 객체는 새로 생성될 때마다 각자 고유의 데이터좌표를
              참조하기 때문이다. 그래서 객체에 객체자체를 복사하면(앝은 복사)
              데이터좌표를 복사하기 때문에 어느 객체를 수정해도 둘 모두의 값이
              바뀌는 걸 볼 수 있다. 그런 하나의 값을 바꿨는데 다른 모든 값이
              바뀌는 데이터의 혼란을 막기위해 전개연산자를 이용해서 방지하는데
              이를 객체의 불변성 이라고 한다.
            </p>
          </li>

          <li>
            <h4>
              json형식으로 데이터를 받아온 것 처럼 객체를 포함한 배열을 선언해
              줄 때는 타입을 정해줘야 한다.
            </h4>
            <div className={typeScriptStyle["codebox"]}>
              <div>
                <p>{`type user = { id: number; name: string; phone: string };`}</p>
                <p>{`const [userList, setUserList] = useState<user[]>([{`}</p>
                <p>&nbsp;&nbsp;{`id : 1,`}</p>
                <p>&nbsp;&nbsp;{`name : "홍길동",`}</p>
                <p>&nbsp;&nbsp;{`phone : 010-1111-1111,`}</p>
                <p>{`}]);`}</p>
              </div>
              <p>
                <span className={typeScriptStyle.annotation}>
                  // 객체배열에 객체 추가하기
                </span>
              </p>
              <div>
                <p>{`const nameChange = () => {`}</p>
                <p>&nbsp;&nbsp;{`setUserList([`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`...userList,`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`{`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`...user,`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`name : "박찬호"`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</p>
                <p>&nbsp;&nbsp;{`])`}</p>
                <p>{`}`}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default UseState;
