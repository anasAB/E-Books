
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IInitialState } from '../E-Books/Slicer/eBooksSlice';
import { IBookDetail } from '../E-Books/Slicer/eBookDetialSlice';


export type RootState = {
  eBooks: IInitialState;
  eBookDetail: IBookDetail
};


export const useStoreType: TypedUseSelectorHook<RootState> = useSelector;
