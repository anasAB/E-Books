import { eBooksSlice } from '../Slicer/EBooksSlice'
import { configureStore } from '@reduxjs/toolkit'
import { eBookDetialSlice } from '../Slicer/eBookDetialSlice'
import { eBookCart } from '../Slicer/cartSlice'



export const store = configureStore({
  reducer: {
    eBooks: eBooksSlice.reducer,
    eBookDetail: eBookDetialSlice.reducer,
    bookCart: eBookCart.reducer
  },
})