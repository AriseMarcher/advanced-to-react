import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const TODOS_FEATURE_KEY = 'todos'

export const loadTodos = createAsyncThunk(
  'todos/loadTodos', // action type的属性值
  (payload, thunkAPI) => {
    axios.get(payload).then(response => {
      thunkAPI.dispatch(setTodos(response.data))
    })
  }
)

const { reducer: TodosReducer, actions } = createSlice({
  name: TODOS_FEATURE_KEY,
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        console.log(action)
        state.push(action.payload)
      },
      prepare: todo => {
        console.log('----', todo)
        return {
          payload: {
            id: Math.random(),
            ...todo
          }
        }
      }
    },
    setTodos: (state, action) => {
      action.payload.forEach(todo => state.push(todo))
    }
  }
})

export const { addTodo, setTodos } = actions

export default TodosReducer
