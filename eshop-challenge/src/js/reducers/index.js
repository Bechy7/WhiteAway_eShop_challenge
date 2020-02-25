import { DATA_LOADED } from "../constants/action-types";

const initialState = {
  products: []
};

function rootReducer(state = initialState, action) {
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      products: state.products.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;