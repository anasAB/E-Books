import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { BookObject } from '../../types/books';

export interface IInitialState {
  category: string;
  ebooks: BookObject[];
  isDataLoading: boolean,
  favoveritBooksId: string[]
}

const initialState: IInitialState = {
  category: "",
  ebooks: [],
  isDataLoading: false,
  favoveritBooksId: []
}

export const eBooksSlice = createSlice({
  name: 'eBooks',
  initialState,
  
  reducers: {
          
    updateBookSlicerState: (state: IInitialState, action) => {
      return {...state, ebooks: [...action.payload] };
    },

    updateCategory: (state: IInitialState, action) => {
      return {...state, category: action.payload };
    },

    updateLoadingDataStatus: (state: IInitialState, action) => {
      return {...state, isDataLoading: action.payload };
    },

    updateFavoveritBooksList: (state: IInitialState, action: PayloadAction<string>) => {      
      if( state.favoveritBooksId.includes(action.payload)) {
        return {...state, favoveritBooksId: state.favoveritBooksId.filter((id: string) => id!== action.payload)};
      }else{
        return {...state, favoveritBooksId: [...state.favoveritBooksId, action.payload] };
      }
        
    },



  },
});

  // Action creators are generated for each case reducer function
  export const { updateBookSlicerState, updateCategory, updateLoadingDataStatus, updateFavoveritBooksList } = eBooksSlice.actions
  
  export default eBooksSlice.reducer

