import React from 'react';
import { connect } from 'react-redux'
import Note from '../components/Note'

class NotesContainer extends React.Component {

    // state = { notes: [] }

    // componentDidMount() {
    //     fetch("http://localhost:3000/notes")
    //     .then(resp => resp.json())
    //     .then(notes => this.setState({ notes: notes }))
    // }

    renderNotes = () => {
        return this.props.notes.map((note) => <Note key={note.id} note={note} />)
    }

    render () {
        console.log("Container props: ", this.props)

        return (
           <ul>
               {this.renderNotes()}
           </ul>
        )
    }

}

//read action
const mapStateToProps = (state) => {
    console.log("Current Redux State: ", state)
    return {notes: state.notes}
}

export default connect(mapStateToProps)(NotesContainer)

