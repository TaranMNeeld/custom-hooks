import React, {useState} from 'react'
import {useElementCreator} from '../hooks/useElementCreator'

const ElementCreator = () => {
    const [elements, setElements] = useElementCreator()

    const [newElement, setNewElement] = useState('')

    const handleChange = event => {
        setNewElement(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        let nextId = elements[elements.length - 1].id + 1
        setElements([...elements, {
            id: nextId,
            name: newElement
        }])
        localStorage.setItem('elements', JSON.stringify(elements))
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