import { useEffect, useState, memo } from 'react'

function compare (prevProps, nextProps) {
  if (
    prevProps.person.name !== nextProps.person.name ||
    prevProps.person.age !== nextProps.person.age
  ) {
    // false 表示需要重新渲染
    return false
  }
  // true 表示不需要重新渲染 跟 shouldComponentUpdate相反
  return true
}

const ShowName = memo(function ({person}) {
  console.log('is Update?')
  return <div>{person.name} -- {person.age}</div>
}, compare)

function App() {
  const [person, setPerson] = useState(({
    name: '张三',
    age: 20,
    job: 'waiter'
  }))

  useEffect(() => {
    setInterval(() => {
      setPerson({...person, job: 'teacher'})
    }, 1000)
  }, [])

  return <div>
    <ShowName person={person} />
  </div>
}

export default App;