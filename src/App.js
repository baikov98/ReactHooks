
import React, { useEffect, useState,  } from 'react'


function App() {
  
  const [count, setCount] = useState(1)
  const [colored, setColored] = useState(false)
  
  const styles = {
    color: colored ? 'red' : 'black'
  }
    
  
  return (
    <>
      <h1 style={styles}>Колво элем - {count}</h1>
      <button onClick={() => setCount(prev => prev +1)}>Добавить</button>
      <button onClick={() => setColored(prev => !prev)}>Izmenit</button>
    </>
  )
}
export default App;
