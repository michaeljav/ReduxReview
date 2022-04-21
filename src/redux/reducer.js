/*this is the function that will be called when the dispach is executed*/

let id =0;
import {ADD_TODO,DELETE_TODO,DONE_TODO} from './actionTypes.js';

function reducer(state= [], action){

  switch(action.type) { 
    case ADD_TODO : {
      id++;

      return [
        ...state,
        {
          id,
          text: action.payload.text,
        }
      ]
    }
    case DELETE_TODO:{
        const index = state.findIndex(n => n.id === action.payload.id);
        /**To delete from array index  and number of element to delete */
        state.splice(index,1);
        return [
          ...state      
        ]

    }
    case DONE_TODO:{
      
      const item = state.find(n => n.id === action.payload.id);
            
      item.completed = !item.completed;
      return [...state];

    }

    default:
      return state;
  }
}

export default reducer;
