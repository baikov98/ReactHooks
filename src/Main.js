import React from 'react'
import {useAlert} from './alert/AlertContext'

export default function Main() {
    const {toggle} = useAlert()
    return (
        <>
            <h1>ПРивет в примере с Context</h1>
            <button onClick={toggle} className='btn btn-success'>Показать алерт</button>
        </>
    )
}