import { combineReducers } from 'redux'

const rootReducer = (currentState = {notes: []}, action) => {
    // need a default state because when store is created/initialized, a call to state is made and this will throw an error without a default

    switch(action.type) {
        case "add note":
            return {...currentState, notes: [...currentState.notes, action.payload]}
        case "add_notes_from_fetch":
            return {...currentState, notes: action.payload}
        //case "add_something_else_from_fetch":
        //  return {...currentState, something_else_key: action.payload}
        default:
            return currentState // do not want a spread operator here because if you return a copy of state, that is a new action and would trigger a re-rendering of components
        }
    }

// const defaultState = {
//     notes: [],
//     something_else_key: []
// }
   
// function notesReducer(currentState = defaultState.notes, action){
//     switch (action.type) {
//         case "add_note":
//             return [...currentState, action.payload]
//         case "add_notes_from_fetch":
//             return action.payload
//         default:
//             return currentState
//     }
// }

// function somethingElseKeyReducer(){
//     return[{ content: "whatevs"}]
// }

// const rootReducer = combineReducers({
//     notes: notesReducer,
//     something_else_key: somethingElseKeyReducer
// })


export default rootReducer