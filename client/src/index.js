import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/App";
import  {createRoot} from 'react-dom/client'
// import { BrowserRouter as Router } from "react-router-dom";
//keeep tracking of that store from anywhere in the app
import { Provider } from "react-redux";
///
import { applyMiddleware, compose, createStore } from "redux";
///this replace  CreateStore ////
// import { configureStore } from "@reduxjs/toolkit";
///
import thunk from "redux-thunk";
//this import the reducer folder
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
