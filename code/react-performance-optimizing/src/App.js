import { useState } from "react";
import Test from "./Test";

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      App
      <button onClick={() => setFlag(prev => !prev)}>
        销毁Test组件
      </button>
      {
        flag && <Test />
      }
    </div>
  );
}

export default App;
