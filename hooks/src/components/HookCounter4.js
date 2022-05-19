import React, { useState } from 'react'

const HookCounter4 = () => {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, { id: items.length, value: Math.random() * 10}])
    }

    console.log(items)

    return (
        <>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul>
        </>
    )
}

export default HookCounter4