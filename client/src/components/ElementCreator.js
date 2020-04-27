import React, { useState, useEffect } from 'react'

const ElementCreator = () => {
    const [elements, setElements] = useState([
        {
            id: 1,
            name: 'div',
        }
    ])

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
        console.log(elements)
        localStorage.setItem('elements', elements)
    }

    useEffect(() => {
        const body = document.body
        for(let i = 0; i < elements.length; i++) {
            let element = elements[i]
            let hasChild = document.getElementById(`${element.id}`)
            if (!hasChild) {
                let newElement = document.createElement(`${element.name}`)
                newElement.setAttribute('id', `${element.id}`)
                newElement.innerText = `this is a ${element.name}`
                body.appendChild(newElement)
            }
        }
    }, [elements])


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