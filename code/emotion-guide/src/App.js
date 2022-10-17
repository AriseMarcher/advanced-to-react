import styled from '@emotion/styled'

const Button = styled.button`
  width: 100px;
  height: 30px;
  background: ${props => props.bgColor || '#eee'};
`

// const Container = styled.div(props => ({
//   width: props.w || 1000,
//   height: 500,
//   border: '1px solid #eee',
//   margin: '0 auto',
//   background: '#eee',
// }))

const Container = styled.div({
  width: 1000,
  height: 500,
  border: '1px solid #eee',
  margin: '0 auto',
  background: '#eee',
}, props => ({
  width: props.width
}))

function App() {
  return (
    <div>
      <Container width={300}>
        <Button bgColor="blue">按钮</Button>
      </Container>
    </div>
  );
}

export default App;
