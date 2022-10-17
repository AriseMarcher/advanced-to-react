import { css, useTheme } from '@emotion/react'

const primaryColor = props => css`
  color: ${props.colors.primary}
`

function App() {
  const theme = useTheme()
  return (
    <div css={theme}>
      Go
    </div>
  );
}

export default App;
