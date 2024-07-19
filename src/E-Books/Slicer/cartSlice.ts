import { createSlice } from '@reduxjs/toolkit'
import { BookObject } from '../../types/books';

export interface IBookCart {
    bookCart: BookObject[];
}

const initialState: IBookCart = {
    bookCart: [],
}

export const eBookCart = createSlice({
  name: 'bookCart',
  initialState,

  reducers: {
    
    updateBookCart: (state: IBookCart, action) => {        
        if(state.bookCart.some(book => book.id === action.payload.id)) {
            return {...state, bookCart: state.bookCart.filter((book: BookObject) => book.id !== action.payload.id)};
        }else{
            return {...state, bookCart: [...state.bookCart, action.payload] };
        }
    },



  },
});

// Action creators are generated for each case reducer function
export const { updateBookCart } = eBookCart.actions

export default eBookCart.reducer

