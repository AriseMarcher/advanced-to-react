import Css from './Css'
import { css } from '@emotion/react'

const style = css`
  background: red;
`
console.log(style)

function App() {
  return (
    <div>
      <Css css={style} />
    </div>
  );
}

export default App;
