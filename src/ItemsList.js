import React, { useEffect, useState } from 'react'

export default function ItemsList({ getItems }) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const newItems = getItems(42)
        setItems(newItems)
        console.log(11)
    }, [getItems])
    return (
        <ul>
            { items.map(i => <li key={i}>{i}</li>) }
        </ul>
    )
}