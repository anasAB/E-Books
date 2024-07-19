import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BookObject } from '../../types/books';

export interface IInitialState {
  category: string;
  ebooks: BookObject[];
  isDataLoading: boolean,
  favoveritBooks: BookObject[], // TODO replace it with favoveritBooks
  showFavoveritBooks: boolean
}

const initialState: IInitialState = {
  category: "",
  ebooks: [],
  isDataLoading: false,
  favoveritBooks: [],
  showFavoveritBooks: false
}

export const eBooksSlice = createSlice({
  name: 'eBooks',
  initialState,

  reducers: {

    updateBookSlicerState: (state: IInitialState, action) => {
      // if(state.showFavoveritBooks){
      //   console.log('## Filter now');

      // }else{
      //   console.log('## No need for filter');

      // }

      return { ...state, ebooks: [...action.payload] };
    },

    updateCategory: (state: IInitialState, action) => {
      return { ...state, category: action.payload };
    },

    updateLoadingDataStatus: (state: IInitialState, action) => {
      return { ...state, isDataLoading: action.payload };
    },

    updateFavoveritBooksList: (state: IInitialState, action) => {
      const test = state.favoveritBooks.find(book => book.id === action.payload.id)

      if (test) {
        return { ...state, favoveritBooks: state.favoveritBooks.filter((book: BookObject) => book.id !== action.payload.id) };
      } else {
        return { ...state, favoveritBooks: [...state.favoveritBooks, action.payload] };
      }

    },

    updateShowFavoveritBooks: (state: IInitialState) => {
      return { ...state, showFavoveritBooks: !state.showFavoveritBooks }
    }


  },
});

// Action creators are generated for each case reducer function
export const { updateBookSlicerState, updateCategory, updateLoadingDataStatus, updateFavoveritBooksList, updateShowFavoveritBooks } = eBooksSlice.actions

export default eBooksSlice.reducer

