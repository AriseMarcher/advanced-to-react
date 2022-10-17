import styled from '@emotion/styled'

// const Child = styled.div`
//   color: red
// `

// const Parent = styled.div`
//   ${Child} {
//     color: blue
//   }
// `

const Child = styled.div({
  color: 'red'
})

const Parent = styled.div({
  [Child]: {
    color: 'blue'
  }
})
function App() {
  return (
    <div>
      <Parent>
        <Child>123</Child>
        456
      </Parent>
    </div>
  );
}

export default App;
