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

    return function cleanup() {
      document.title = ""
      console.log("effect1 cleanup")
    };
  }, [count, name])

  MyReact.useEffect(() => {
    console.log("effect2");
  }, [name])

  MyReact.useEffect(() => {
    setName(localStorage.getItem("name") || "")
    console.log("effect3")
  }, [])

  console.log("Counter rendered");

  return <>
    <button onClick={handleClick}>plus</button>
    <input value={name} onChange={handleChangeName} />
  </>
}

export default () => {
  const [mounted, setMounted] = React.useState(false);

  function handleToggle() {
    const nextMounted = !mounted;
    if(!nextMounted) MyReact.cleanupEffects();
    setMounted(nextMounted);
  }

  return <>
    <button onClick={handleToggle}>toggle component</button>
    {mounted && <Counter />}
  </>
}
