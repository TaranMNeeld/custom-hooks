import {useState, useEffect} from 'react'

export const useFontResizer = () => {

    let localFontSize = localStorage.getItem('fontSize')
    const [fontSize, setFontSize] = useState(localFontSize)
    const body = document.querySelector('body')

    useEffect(() => {
        setFontSize(localFontSize)
        body.style.fontSize = `${fontSize}px`;
    }, [localFontSize])
    
    return [fontSize, setFontSize]
}