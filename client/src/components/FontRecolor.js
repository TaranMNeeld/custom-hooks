import React, { useEffect } from 'react'
import { useFontRecolor } from '../hooks/useFontRecolor'


const FontRecolor = () => {
    const [fontColor, setFontColor] = useFontRecolor()

    const handleChange = event => {
        localStorage.setItem('fontColor', event.target.value)
        setFontColor(event.target.value)
    }


    return (
        <div>
            Text color
            <input type='text' placeholder='Enter any color value' onChange={handleChange} />
        </div>
    )
}

export default FontRecolor