import React, { useEffect, useState,  } from 'react'


function App() {
  const [name, setName] = useState('')
  const changeHandler = e => {
    setName(e.target.value)
  }
  return (
    <div className={'container pt-3'}>
      
      <input type='text' value={name} onChange={changeHandler}></input>
      <h1>{name}</h1>
    </div>
  )
}
export default App;
