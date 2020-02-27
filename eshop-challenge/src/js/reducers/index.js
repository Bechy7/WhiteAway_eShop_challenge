import { DATA_LOADED } from "../constants/action-types";

const initialState = {
  products: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED:
      //Return the products fetched from the API
      return Object.assign({}, state, {
        products: state.products.concat(action.payload)
      });
    
    default:
      return state;
  }
}

export default rootReducer;