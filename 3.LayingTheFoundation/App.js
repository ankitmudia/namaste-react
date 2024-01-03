import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "this is h1 using core react"
);

console.log(heading);
// JSX
//className gets converted to class in browser, jsx is converted to html using transpiler
// we need to use () is we are having multi line jsx, no need if single line

//This is a React Element
const jsxHeading = (
  <h1 className="head" id="heading">
    Namaste React Using JSX
  </h1>
);

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//This is how we render a React Element
root.render(jsxHeading);

// ==========================================================================

const Title = () => (
  <h1 className="head" tabIndex={5}>Namaste React Using JSX</h1>
);

//React Functional Component, Also have component composition
const HeaderComponent = () => (
  <div id="container">
    <Title />
    <h1 id="headerComponent">This is a React Functional Component</h1>
  </div>
);

//This is how we render a React Component
root.render(<HeaderComponent />);
