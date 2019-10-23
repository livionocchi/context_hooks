import { initialState } from '../components/BookList'

export const bookReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, { title: action.payload }]
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter(el => el.title !== action.payload)
      };
    default:
      return state;
  }
}
