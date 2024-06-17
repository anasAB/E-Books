
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { IInitialState } from '../E-Books/Slicer/EBooksSlice';


interface IStoreState {
    eBooks: IInitialState;
  }


export const useStoreType: TypedUseSelectorHook<IStoreState> = useSelector;
