// import {createStore} from 'redux';
// import {createStore} from "redux";
// import { createStore } from 'redux'
// import { createStore } from Redux;
const  {createStore} = Redux;

import reducer from './reducer.js';

// const store = Redux.createStore(reducer); 
const store = createStore(reducer); 
// const store = {}//createStore(reducer);

export default store;
// export default {};

