import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef()

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (ref.current && ref.current.contains(event.target)) {
            return;
        }
        setOpen(false)
        });
    }, [])

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div 
              key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}
                >
                {option.label} 
            </div>
        )
    })

   

    return (
        <div>
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select an Option</label>
                <div 
                  onClick={() => setOpen(!open)} //when the div is clicked, toggle between true and false
                  className={`ui selection dropdown ${open ? 'visible active' : ''}`} //when the menu is set to true, the term "visible active" is added and the menu is open to see the list
                  >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`} //when the menu is set to true, the term "visible active" is added and the menu is open to see the list
                    > 
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
        <h1 style={{color: `${selected.value}`}}>This text is {selected.value}</h1>
        </div>
    )
};

export default Dropdown