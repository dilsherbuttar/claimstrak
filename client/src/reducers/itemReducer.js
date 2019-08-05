import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
 
  } from '../actions/types';
  import uuid from 'uuid'
  
  const initialState = {
    items: [
        { _id: uuid(), date: "10/01/2009", name: "Brittney", amount: "5000" },
      { _id: uuid(), date: "10/01/2009", name: "Jenn", amount: "1050" },
      { _id: uuid(), date: "10/01/2009", name: "Vivian", amount: "500" },
      { _id: uuid(), date: "10/01/2009", name: "Speech", amount: "587" }
    ]
   
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state,
          items: action.payload,
         
        };
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter(item => item._id !== action.payload)
        };
      case ADD_ITEM:
        return {
          ...state,
          items: [action.payload, ...state.items]
        };
      
      default:
        return state;
    }
}


        