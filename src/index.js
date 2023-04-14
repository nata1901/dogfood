import React, { createElement } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(
//   React.createElement("h1", null, "Hello React!")
// )

// root.render(
//   React.createElement("h1", {title: "Doggy"}, "Hello React!")
// )

// root.render(
//   React.createElement("div", 
//   {title: "Doggy"}, 
//   React.createElement("h1", null, "Hey!"),
//   React.createElement("p", null, "It is Magic!")
//   )
// )

root.render(
  <div title="Doggy">
    <h1>Hello!</h1>
    <hr />
    <i>i</i>
    <i/>
    <h2>
      <mark>React</mark>
    </h2>
  </div>
)

// JSX - html с движком JS
// <h1>123</h1> => React.createElement("h1", null, "123")