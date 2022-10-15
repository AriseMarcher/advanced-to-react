import { useDispatch, useSelector } from 'react-redux'
import { addTodo, TODOS_FEATURE_KEY } from '../../Store/todos.slice'

function Main() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state[TODOS_FEATURE_KEY])
  return (
    <section className="main">
      <button onClick={() => dispatch(addTodo({id: Math.random(), title: '测试任务'}))}>
        添加任务
      </button>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.cid}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{todo.title}</label>
              <button className="destroy" />
            </div>
            <input className="edit" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Main