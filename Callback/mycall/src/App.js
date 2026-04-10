import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import Child from "./Child";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("clicked me");
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <Child onClick={handleClick} label="Click ME" />
    </div>
  );
}

export default App;

//"On initial render, both parent(event handler-doesnot print console) and child render(prints console).
// Clicking the child button only executes the callback and
//  does not trigger a re-render.so child doesnot render. only parent prints console.
//  When the parent state updates, it re-renders,
//  but useCallback ensures the function reference remains same,
// so React.memo detects no prop change and skips the child re-render."
