
import React, { useState, useEffect, useRef } from 'react'

let ren = 1
function App() {

  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value)
  })

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>kolwo  {renderCount.current}</h1>
      <input ref={inputRef} type='text' value={value} onChange={ (e) => setValue(e.target.value) }></input>
      <button className='btn btn-success' onClick={focus}>FOCUS</button>
    </div>
  )
}
export default App;
