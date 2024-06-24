import { createSlice } from '@reduxjs/toolkit'
import { BookObject } from '../../types/books';

export interface IBookDetail {
  selectedBookDetail: BookObject | null;
  selectedBookId: string | null
}

const initialState: IBookDetail = {
  selectedBookDetail: null,
  selectedBookId: null
}

export const eBookDetialSlice = createSlice({
  name: 'bookDetail',
  initialState,

  reducers: {
    // Update BookDetail Object
    updateBookDetialSlicerState: (state: IBookDetail, action) => {
      return { ...state, ...action.payload };
    },

    // Update BookDetail ID
    updateSelectedBookIdState: (state: IBookDetail, action) => {
      state.selectedBookId = action.payload; // Directly update the state property
    },


  },
});

// Action creators are generated for each case reducer function
export const { updateBookDetialSlicerState, updateSelectedBookIdState } = eBookDetialSlice.actions

export default eBookDetialSlice.reducer

