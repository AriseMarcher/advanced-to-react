import { createSlice } from '@reduxjs/toolkit'

export const TODOS_FEATURE_KEY = 'todos'

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
    }
  }
})

export const { addTodo } = actions

export default TodosReducer
