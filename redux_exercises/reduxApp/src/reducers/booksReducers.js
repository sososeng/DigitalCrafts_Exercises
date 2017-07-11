import {createStore} from 'redux';


//step3 define reducers

export function booksReducers (state={books:[  {
      id:6,
      title:'this is the book title',
      description: 'this is the book description',
      price:66
    },
    {
      id:7,
      title:'this is the book title',
      description: 'this is the book description',
      price:77
    }]},action){

  switch(action.type){

    case "GET_BOOK":
      return {...state, books:[...state.books]};

    case "POST_BOOK":
      //let books = state.books.concat(action.payload);
      //return {books};
      return {books:[...state.books, ...action.payload]};
    case "DELETE_BOOK":
       // Create a copy of the current array ofbooks
       const currentBookToDelete = [...state.books];
       // Determine at which index in books array is the book to be deleted
       const indexToDelete =currentBookToDelete.findIndex(function(book){
         return book.id === action.payload.id;
        });
       //use slice to remove the book at the specified index
       return {books:[...currentBookToDelete.slice(0,indexToDelete),...currentBookToDelete.slice(indexToDelete +1)]};

    case "UPDATE_BOOK":
      // Create a copy of the current array of books
      const currentBookToUpdate = [...state.books];
      // Determine at which index in books array is the book to be deleted
      const indexToUpdate = currentBookToUpdate.findIndex(function(book){
        return book.id === action.payload.id;
      });
      // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methos too
      const newBookToUpdate = {...currentBookToUpdate[indexToUpdate],title: action.payload.title};
      // This Log has the purpose to show you how newBookToUpdate looks like
      console.log("what is it newBookToUpdate", newBookToUpdate);
      //use slice to remove the book at the specified index, replace with the new object and concatenate witht he rest of items in the array
      return {books:[...currentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate,...currentBookToUpdate.slice(indexToUpdate +1)]};



  }
  return state;
}
