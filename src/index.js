import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducer'



const store = createStore(rootReducer, applyMiddleware(thunk))

console.log("Store: ", store)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.querySelector('#root')
    )