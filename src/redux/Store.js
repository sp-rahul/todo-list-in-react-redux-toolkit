import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './todosSlice'

export default configureStore({
  reducer: {
    toDo: toDoReducer
  }
})