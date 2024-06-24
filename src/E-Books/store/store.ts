import { configureStore } from '@reduxjs/toolkit'
import { eBooksSlice } from '../Slicer/eBooksSlice'
import { eBookDetialSlice } from '../Slicer/eBookDetialSlice'



export const store = configureStore({
  reducer: {
    eBooks:eBooksSlice.reducer,
    eBookDetail: eBookDetialSlice.reducer
  },
})