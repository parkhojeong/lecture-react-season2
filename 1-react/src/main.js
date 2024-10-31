import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const { worker } = require("../../shared/mocks/browser");
worker.start({
  onUnhandledRequest: "bypass",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("dialog"));

// root.render(<App />);

import ReactDOM2 from 'react-dom';
const Red = () => {
  return ReactDOM2.createPortal(
    <div className={"red"}>Red</div>,
    document.getElementById("dialog")
    );
}
const Green = () => {
  return <div className={"green"} onClick={(e) => {console.log(e)}}>
    <div>Green</div>
    <Red />
  </div>
}

root.render(<Green />)
// root2.render(<Red />)
