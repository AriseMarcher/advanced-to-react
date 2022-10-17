import { useState } from 'react'

function useUpdateInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: event => setValue(event.target.value)
  }
}

function App() {
  const usernameInput = useUpdateInput('')
  const passwordInput = useUpdateInput('')
  const submitForm = event => {
    event.preventDefault();
    console.log(usernameInput)
    console.log(passwordInput)
  }

  return <form onSubmit={submitForm}>
    <input type="text" name="username" {...usernameInput} />
    <input type="password" name="password" {...passwordInput} />
    <input type="submit" />
  </form>
}

export default App;
