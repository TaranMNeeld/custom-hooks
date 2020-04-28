import React, {useState} from 'react'
import {useElementCreator} from '../hooks/useElementCreator'

const ElementCreator = () => {

    let localElements = localStorage.getItem('elements')
    if(localElements === null) {
        let initialElements = [
            {
                id: 1,
                name: 'div'
            }
        ]
        localStorage.setItem('elements', JSON.stringify(initialElements))
    }
    
    const [elements, setElements] = useElementCreator()

    const [newElement, setNewElement] = useState('')

    const handleChange = event => {
        setNewElement(event.target.value)
    }

    const handleSubmit = event => {
        let nextId = elements[elements.length - 1].id + 1
        let tempElements = [...elements, {
            id: nextId,
            name: newElement
        }]
        console.log(elements)
        localStorage.setItem('elements', JSON.stringify(tempElements))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                HTML element creator
            <input type='text' placeholder='Enter element tag' onChange={handleChange}/>
            <button type='submit'>Add Element</button>
            </form>
        </div>
    )
}

export default ElementCreator