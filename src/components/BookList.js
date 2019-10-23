import React, { useContext } from 'react'
//import { BookContext } from '../contexts/BookContext'
import NewBookForm from './NewBookForm'
import { removeBook } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

export const initialState = {
  books: []
}

const BookList = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      { books.length ? (
          <ul>
            { books.map((el, index) => <li onClick={() => dispatch(removeBook(el.title)) } key={ index }>{ el.title }</li>) }
          </ul>
        ) : (
          <div>no books available</div>
        )
      }
      <NewBookForm />
    </React.Fragment>
  )
}

export default BookList;
