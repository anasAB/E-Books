import { configureStore } from '@reduxjs/toolkit'
import { eBooksSlice } from '../Slicer/eBooksSlice'
import { eBookDetialSlice } from '../Slicer/eBookDetialSlice'
import { eBookCart } from '../Slicer/cartSlice'

export const store = configureStore({
  reducer: {
    eBooks: eBooksSlice.reducer,
    eBookDetail: eBookDetialSlice.reducer,
    bookCart: eBookCart.reducer
  }
})
