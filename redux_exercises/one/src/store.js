import { createStore } from 'redux';
import Diary from './reducers';

var store = createStore(Diary);

export default store;
