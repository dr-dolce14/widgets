import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const rootReducer = (currentState = {notes: [] }, action) => {
    // need a default state because when store is created/initialized, a call to state is made and this will throw an error without a default
    if (action.type === "add note") {
        console.log("reducer action: ", action)
        return {...currentState, notes: [...currentState.notes, action.payload]}

    } else {

    }
    return currentState // do not want a spread operator here because if you return a copy of state, that is a new action and would trigger a re-rendering of components
}

const store = createStore(rootReducer)

console.log("Store: ", store)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.querySelector('#root')
    )