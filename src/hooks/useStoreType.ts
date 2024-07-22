import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { IInitialState } from '../E-Books/Slicer/eBooksSlice'
import { IBookDetail } from '../E-Books/Slicer/eBookDetialSlice'
import { IBookCart } from '../E-Books/Slicer/cartSlice'

export type RootState = {
  eBooks: IInitialState
  eBookDetail: IBookDetail
  bookCart: IBookCart
}

export const useStoreType: TypedUseSelectorHook<RootState> = useSelector
