import { createSlice } from '@reduxjs/toolkit'
import { IBooks } from '../IState';

export interface IInitialState{
  Books:IBooks[],
}

  
  export const eBooksSlice = createSlice({
    name: 'eBooks',
    initialState:{
      Books:[],
      Catogry:'crime'
    }as IInitialState,
    reducers: {

      updateBookSlicerState: (state: IInitialState, action)  => {
        return { ...state, Books:[...action.payload] }
      },

      updateCatogry: (state: IInitialState, action)  => {
        return { ...state, Catogry:action.payload }
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updateBookSlicerState, updateCatogry } = eBooksSlice.actions
  
  export default eBooksSlice.reducer

