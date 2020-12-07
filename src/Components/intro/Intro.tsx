import React, { useContext, useState } from "react";
import AppContext from "../../context";
import "./styles.css";
import axios from "axios";

function Intro() {
  const [display, setDisplay] = useState<boolean>(true);
  let { start_task } = useContext(AppContext);

  const handle_click = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      start_task(res.data);
      if (res.data.length > 0) {
        setDisplay(!display);
      }
    });
  };
  return (
    <div className={`${display ? "intro_container" : "hide"}`}>
      <h1>React Task</h1>
      <button onClick={handle_click}>Click To Start</button>
    </div>
  );
}

export default Intro;
