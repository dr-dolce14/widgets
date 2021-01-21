import React from 'react';
import NotesContainer from './containers/NotesContainer'
import NoteForm from './components/NoteForm'

class App extends React.Component {
    render () {

        return (
            <div>
                <NoteForm />
                <NotesContainer />
            </div>
        )
    }
}
export default App