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
      reducer: (state, action) => {
        console.log(action)
        // state.push(action.payload)
        todosAdapter.addOne(action.payload)
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
      // action.payload.forEach(todo => state.push(todo))
      todosAdapter.addMany(state, action.payload)
    }
  },
  extraReducers: {
    [loadTodos.fulfilled]: (state, action) => {
      // action.payload.forEach(todo => state.push(todo))
      console.log('this is fulfilled')
      todosAdapter.addMany(state, action.payload)
    },
    [loadTodos.pending]: (state, action) => {
      return state
    }
  }
})

export const { addTodo, setTodos } = actions

export default TodosReducer
