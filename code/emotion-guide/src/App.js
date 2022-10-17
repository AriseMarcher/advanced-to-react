import styled from '@emotion/styled'

const Button = styled.button`
  width: 100px;
  height: 30px;
  background: #fff;
`

const Container = styled.div({
  width: 1000,
  height: 500,
  border: '1px solid #eee',
  margin: '0 auto',
  background: '#eee',
})

function App() {
  return (
    <div>
      <Container>
        <Button>按钮</Button>

      </Container>
    </div>
  );
}

export default App;
