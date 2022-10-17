import { css, Global } from '@emotion/react'
import Demo from './Demo';

const styles = css`
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: red;
  }
`


function App() {
  return (
    <div>
      <Global styles={styles} />
      <a href="#">a标签</a>
      <Demo />
    </div>
  );
}

export default App;
