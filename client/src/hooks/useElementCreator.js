import {useState, useEffect} from 'react'

export const useElementCreator = () => {

    let localElements = localStorage.getItem('elements')
    const [elements, setElements] = useState([
        {
            id: 1,
            name: 'div'
        }
    ])
    const body = document.querySelector('body')

    useEffect(() => {
        setElements(JSON.parse(localElements))
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
    }, [localElements])
    
    return [elements, setElements]
}