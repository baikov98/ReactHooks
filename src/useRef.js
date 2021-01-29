import React, { useState, useEffect, useRef } from 'react'

let ren = 1
function App() {

  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')
  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])
  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>kolwo  {renderCount.current}</h1>
      <h2>Прошлое сост - {prevValue.current}</h2>
      <input ref={inputRef} type='text' value={value} onChange={ (e) => setValue(e.target.value) }></input>
      <button className='btn btn-success' onClick={focus}>FOCUS</button>
    </div>
  )
}
export default App;