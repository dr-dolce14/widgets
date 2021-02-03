import React from 'react';

class Dogs extends React.Component {
    state = { activeIndex: 0 };

    onTitleClick = (breed, index) => {
        this.setState({ 
            activeIndex: index,
        })
        console.log("The", breed.name, "at index", index)
    };


    renderBreeds() {
        return this.props.dogBreeds.map((breed, index) => {
            return (
              <React.Fragment key={breed.name}>
                <div 
                    className="title active"
                    onClick={() => this.onTitleClick(breed, index)}
                >
                <i className="dropdown icon"></i>
                {breed.name}

                </div>
                <div className="content active">
                    <p>{breed.description}</p>
                </div>
                </React.Fragment>
            )
        })
    }

render() {
    return (
        <div className="ui styled accordion">
            {this.renderBreeds()}
            <h1>{this.state.activeIndex}</h1>

        </div>
    )
}
}

export default Dogs