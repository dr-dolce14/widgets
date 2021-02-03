import React, { useState } from 'react'

const Accordion = ({ dogBreeds }) => {
    const [activeIndex, setActiveIndex] = useState(null)


    const onTitleClick = (index) => {
        setActiveIndex(index)
    }


    const renderedItems = dogBreeds.map((breed, index) => {
        const active = index === activeIndex ? 'active' : '';
        return <React.Fragment key={breed.name}>
            <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}
            >
                <i className="dropdown icon"></i>
                {breed.name}
            </div>
            <div className={`content ${active}`}>
                <p>{breed.description}</p>
            </div>
        </React.Fragment>
    })

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
}

export default Accordion



