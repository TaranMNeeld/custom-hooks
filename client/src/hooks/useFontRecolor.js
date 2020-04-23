import {useState, useEffect} from 'react'

export const useFontRecolor = () => {

    let localFontColor = localStorage.getItem('fontColor')
    const [fontColor, setFontColor] = useState(localFontColor)
    const body = document.querySelector('body')

    useEffect(() => {
        setFontColor(localFontColor)
        body.style.color = `${fontColor}`;
    }, [localFontColor])
    
    return [fontColor, setFontColor]
}