import { createSlice } from '@reduxjs/toolkit'
import { IBooks } from '../IState';

export interface IInitialState{
  Books:IBooks[],
  Category: string
}

export const eBooksSlice = createSlice({
  name: 'eBooks',
  initialState: {
    Books: [], // Assuming this is part of IInitialState
    Category: "" // Corrected from "Catogry" to "Category"
  } as IInitialState,
  reducers: {
    updateBookSlicerState: (state: IInitialState, action) => {
      console.log('##state', state);
      console.log('##Action', action);

      return {...state, Books: [...action.payload] };
    },
    updateCategory: (state: IInitialState, action) => {
      return {...state, Category: action.payload }; // Corrected from "updateCategory" to "updateCategory"
    }
  },
});

  // Action creators are generated for each case reducer function
  export const { updateBookSlicerState, updateCategory } = eBooksSlice.actions
  
  export default eBooksSlice.reducer

