import "./styles.css";
import Timer from "./Components/Timer";
import React from "react";
export default function App() {
  const [start, setStart] = React.useState(100);
  const [show, setShow] = React.useState(true);

  return (
    <div className="App">
      {show ? (
        <Timer start={start} setStart={setStart} end={90} />
      ) : (
        <h1>Hidden</h1>
      )}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "show"}</button>
    </div>
  );
}
