import { configureStore } from '@reduxjs/toolkit'
import blogSlice from "./slice/Blog_slice.js"

export const store = configureStore({
  reducer: {
    blogSlice
  },
})