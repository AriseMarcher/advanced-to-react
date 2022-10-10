import React, { render } from "./react"

const root = document.getElementById("root")
const jsx = (
  <div>
    <p>
      Hello React
      <p>Hello React Child</p>
    </p>
    <p>Hello Fiber</p>
  </div>
)

render(jsx, root)