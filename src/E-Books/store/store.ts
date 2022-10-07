import { configureStore } from '@reduxjs/toolkit'
import { eBooksSlice } from '../Slicer/EBooksSlice'

export const store = configureStore({
  reducer: {
    eBooks:eBooksSlice.reducer
  },
})