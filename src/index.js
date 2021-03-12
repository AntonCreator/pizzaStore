import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware, ConnectedRouter} from 'connected-react-router';

import createRootReducer from "./reducers/rootReducer";
import "../src/css/App.css";
import routes from "./routes";


const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(createRootReducer(history),
composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store = {store}>
    <ConnectedRouter history = {history}>
      { routes }
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
)