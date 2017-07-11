
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers/index';
//step3 define reducers
import {addToCart} from './actions/cartActions';

import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

import logger from 'redux-logger';
import {Provider} from 'react-redux';
import React from 'react';
import {render} from 'react-dom';
import BooksList from './components/pages/booksList';

//step 1 create the store


const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


render(
  <Provider store = {store}>
    <BooksList/>
  </Provider>, document.getElementById('app')
);


//step 2 create and dispatch actions

store.dispatch(postBooks([

  {
      id:1,
      title:'this is the book title',
      description: 'this is the book description',
      price:33.33
    },
    {
      id:2,
      title:'this is the second book title',
      description: 'this is the second book description',
      price:44.44
    },

  ]
));


store.dispatch(updateBooks({
  id:2,
  title:'Learn React in 24h'
}));

// cart actions

store.dispatch(addToCart([{id:1}]));
