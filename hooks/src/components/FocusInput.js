import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <>
            <input type="text" ref={inputRef} />
        </>
    )
}

export default FocusInput