import { css } from '@emotion/react'

const style = css`
  width: 100px;
  height: 200px;
  background: skyblue;
`

const style1 = css({
  width: 100,
  height: 200,
  background: 'red'
})

console.log(style1)

function App() {
  return (
    <div css={style1}>
      App Page
    </div>
  );
}

export default App;
