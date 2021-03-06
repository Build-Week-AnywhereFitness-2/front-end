import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import reducers from "./reducers/index"
import { ChakraProvider } from "@chakra-ui/react"

export const store = createStore(reducers, applyMiddleware(thunk, logger))

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

