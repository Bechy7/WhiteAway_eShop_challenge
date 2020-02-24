import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

render(
    //Provider wraps up the application and makes it aware of the entire Redux's store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
