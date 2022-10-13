import { createStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers/root.reducer";

export const store = createStore(rootReducer)
