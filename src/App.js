import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Dogs from './components/Dogs'

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework."
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers."
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components."
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

const dogBreeds = [
    {
        name: "Spinone Italiano",
        description: "The Spinone Italiano, a densely-coated hunting dog, is sociable, docile, and patient, sometimes stubborn but always endearing. Of ancient Italian lineage, the Spinone is among the field dogs of Continental Europe famed for versatility."
    },
    {
        name: "Collie",
        description: "The majestic Collie, thanks to a hundred years as a pop-culture star, is among the world’s most recognizable and beloved dog breeds. The full-coated “rough” Collie is the more familiar variety, but there is also a sleek “smooth” Collie."
    },
    {
        name: "Irish Wolfound",
        description: "The calm, dignified, and kindly Irish Wolfhound is the tallest of all AKC breeds. Once fearless big-game hunters capable of dispatching a wolf in single combat, Wolfhounds today are the most serene and agreeable of companions."
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
    <div>
        <Dropdown 
          selected={selected} 
          onSelectedChange={setSelected}
          options={options}
          />
    </div>
    )
}

export default App;