import { configureStore } from '@reduxjs/toolkit'
import TodosReducer, { TODOS_FEATURE_KEY } from './todos.slice'

export default configureStore({
  reducer: {
    [TODOS_FEATURE_KEY]: TodosReducer
  },
  devTools: ProcessingInstruction.env.NODE_ENV !== 'production'
})
