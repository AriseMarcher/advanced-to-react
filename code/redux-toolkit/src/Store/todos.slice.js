import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'
export const TODOS_FEATURE_KEY = 'todos'

const todosAdapter = createEntityAdapter()
console.log(todosAdapter.getInitialState())
export const loadTodos = createAsyncThunk(
  'todos/loadTodos', // action type的属性值
  (payload, thunkAPI) => {
    return axios.get(payload).then(response => response.data)
  }
)

const { reducer: TodosReducer, actions } = createSlice({
  name: TODOS_FEATURE_KEY,
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: {
      reducer: todosAdapter.addOne,
      prepare: todo => {
        return {
          payload: {
            id: Math.random(),
            ...todo
          }
        }
      }
    },
    setTodos: todosAdapter.addMany
  },
  extraReducers: {
    [loadTodos.fulfilled]: todosAdapter.addMany,
    [loadTodos.pending]: (state, action) => {
      return state
    }
  }
})

export const { addTodo, setTodos } = actions

export default TodosReducer
