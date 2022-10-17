import styled from '@emotion/styled'

const Container = styled.div`
  width: 200px;
  height: 200px;
  background: skyblue;
  &:hover {
    background: red;
  }
  & > span {
    color: yellow;
  }
`

function App() {
  return (
    <div>
      <Container>
        <span>123</span>
      </Container>
    </div>
  );
}

export default App;
