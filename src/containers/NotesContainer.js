import React from 'react';
import { connect } from 'react-redux'
import Note from '../components/Note'
import { getNotes } from '../redux/actions'

class NotesContainer extends React.Component {

    // state = { notes: [] }

    componentDidMount() {
        this.props.fetchNotes()
    }

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
    return {notes: state.notes}
}

// write action
const mapDispatchToProps = (dispatch) => {
    return{fetchNotes: () => dispatch(getNotes())}
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)

