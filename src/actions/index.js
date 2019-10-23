export function addBook(title) {
  return {
    type:'ADD_BOOK',
    payload: title
  }
};

export function removeBook(title) {
  return {
    type:'REMOVE_BOOK',
    payload: title
  }
};
