import React, { useEffect, useState,  } from 'react'


function useLogger(value) {
  useEffect(() => {
      console.log('vla changed ', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {
  const input = useInput('')

  useLogger(input.value)

  return (
    <div className={'container pt-3'}>
      
      <input type='text' {...input.bind}></input>
      <button onClick={input.clear}>O4is</button>
      <h1>{input.value} </h1>
    </div>
  )
}
export default App;
