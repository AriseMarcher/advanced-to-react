import styled from '@emotion/styled'

const Button = styled.button`
  color: red;
`

function App() {
  return (
    <div>
      <Button as="a">
        123
      </Button>
    </div>
  );
}

export default App;
