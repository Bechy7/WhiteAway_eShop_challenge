import { DATA_LOADED } from "../constants/action-types";

export function getData() {
  return function(dispatch) {
    return fetch("https://bojwbhw97e.execute-api.us-east-2.amazonaws.com/Production/eshop-challenge/products")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json.body });
        console.log(json)
      });
  };
}