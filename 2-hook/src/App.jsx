// const App = () => <>2-hook</>;
//
// export default App;
import React from "react";
import MyReact from "./lib/MyReact";

const Counter = () => {
  MyReact.resetCursor();
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  function handleClick(e) {
    setCount(count + 1)
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  MyReact.useEffect(() => {
    document.title = `count: ${count}` // 동기적인 코드라 렌더링 지연, 최상위 스코프에서 side effect 발생(예측하기 어려워짐)
    console.log("effect1");
  }, count)

  MyReact.useEffect(() => {
    console.log("effect2");
  }, name)

  console.log("Counter rendered");

  return <>
    <button onClick={handleClick}>plus</button>
    <input value={name} onChange={handleChangeName} />
  </>
}

export default Counter
