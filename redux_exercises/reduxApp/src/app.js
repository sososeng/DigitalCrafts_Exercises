
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers/index';
//step3 define reducers
import {addToCart} from './actions/cartActions';

import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

import logger from 'redux-logger';
//step 1 create the store

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);



// store.subscribe(function(){
//   console.log('current state is:' , store.getState());
// });





//step 2 create and dispatch actions
//store.dispatch({type:'INCREMENT', payload:1});
//store.dispatch({type:'DECREMENT', payload:1});

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

store.dispatch(deleteBooks({
  id:1
}));

store.dispatch(updateBooks({
  id:2,
  title:'Learn React in 24h'
}));

// cart actions

store.dispatch(addToCart([{id:1}]));
