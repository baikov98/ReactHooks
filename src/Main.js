import React from 'react'
import {useAlert} from './alert/AlertContext'

export default function Main() {
    const {show} = useAlert()
    return (
        <>
            <h1>ПРивет в примере с Context</h1>
            <button onClick={() => show('text is main.js')} className='btn btn-success'>Показать алерт</button>
        </>
    )
}