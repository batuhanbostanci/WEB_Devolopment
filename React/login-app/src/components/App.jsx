import React from "react";
import Login from "./Login";
var isLoggedIn = true;

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        /* isLoggedIn === true ? <h1>Hello</h1> : <Login /> */
        // currentTime > 12 ? <h1>Why are you still working?</h1> : null
        currentTime > 12 && <h1>Why are you still working?</h1>
      }
    </div>
  );
}

export default App;
