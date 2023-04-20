import React, { createElement } from "react";
import ReactDom from "react-dom/client";
import App from "./App";
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
 <App/>
)

// JSX - html с движком JS
// <h1>123</h1> => React.createElement("h1", null, "123")