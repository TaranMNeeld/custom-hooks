import React, { useEffect } from 'react'
import {useFontResizer} from '../hooks/useFontResizer'


const FontResizer = () => {
    const [fontSizer, setFontSizer] = useFontResizer()

    const handleChange = event => {
        localStorage.setItem('fontSize', event.target.value)
        setFontSizer(event.target.value)
    }


    return (
        <div>
            Text
            <input type='range' min='1' max='50' onChange={handleChange}/>
        </div>
    )
}

export default FontResizer