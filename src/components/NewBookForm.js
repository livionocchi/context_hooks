import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'
import { addBook } from '../actions'
import { useDispatch } from 'react-redux'

const NewBookForm = () => {
  const dispatch = useDispatch()
  //const { dispatch } = useContext(BookContext);
  const [ title, setTitle ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBook(title));
    setTitle('')
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type='text' value={ title } onChange={ (e) => setTitle(e.target.value) }/>
      <button type='submit'>submit</button>
    </form>
  )
}

export default NewBookForm;
