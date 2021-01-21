export const addNote = (noteObj) => ({ type: "add note", payload: noteObj})

export const getNotes = () => {
    console.log("first dispatch invoked")
    return function (dispatch) {
        console.log("second dispatch invoked")
        fetch("http://localhost:3000/notes")
        .then(resp => resp.json())
        .then(data => dispatch({type: "add_notes_from_fetch", payload: data}) )     
    }
}  
    