import styled from '@emotion/styled'

function Demo ({className}) {
  return <div className={className}>Demo</div>
}

const Fancy = styled(Demo)`
  color: red;
`

const Orange = styled(Demo)({
  background: 'orange',
  color: 'white'
})

function App() {
  return (
    <div>
      <Fancy />
      <Orange />
    </div>
  );
}

export default App;
