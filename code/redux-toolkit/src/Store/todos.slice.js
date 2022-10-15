import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const TODOS_FEATURE_KEY = 'todos'

export const loadTodos = createAsyncThunk(
  'todos/loadTodos', // action type的属性值
  (payload, thunkAPI) => {
    return axios.get(payload).then(response => response.data)
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
  },
  extraReducers: {
    [loadTodos.fulfilled]: (state, action) => {
      action.payload.forEach(todo => state.push(todo))
    },
    [loadTodos.pending]: (state, action) => {
      console.log('pedding')
      return state
    }
  }
})

export const { addTodo, setTodos } = actions

export default TodosReducer
