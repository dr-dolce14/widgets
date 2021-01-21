import React from 'react'
import { connect } from 'react-redux'

class NoteForm extends React.Component {
    state = {
        content: ""
    }

    changeHandler = (e) => {
        this.setState({ content: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text-area" value={this.state.content} onChange={this.changeHandler}>
                </input>
                <input type="submit" value="add note">
                </input>
            </form>
        )
    }
}

// write action (write to the store)
const mapDispatchToProps = (dispatch) => {
    //dispatch: to take in an action adn then call our reducer and pass that action into the reducer
    return {submitHandler: (noteObj) => dispatch({ type: "add note", payload: noteObj})}
}

export default connect(null, mapDispatchToProps)(NoteForm)