import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const rootReducer = () => {
    return {notes: []}
}

const store = createStore(rootReducer)

console.log("Store: ", store)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.querySelector('#root')
    )