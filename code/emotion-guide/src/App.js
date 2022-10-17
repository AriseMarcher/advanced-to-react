import { css, keyframes } from '@emotion/react'

const move = keyframes`
  0% {
    background: skyblue;
    left: 0;
    top: 0
  }
  100% {
    background: red;
    left: 500px;
    top: 200px;
  }
`

const box = css`
  width: 50px;
  height: 50px;
  position: absolute;
  animation: ${move} 2s ease infinite;
`

function App() {
  return (
    <div css={box}>
      Go
    </div>
  );
}

export default App;
