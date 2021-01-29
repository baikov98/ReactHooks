
import React, { useEffect, useState, useCallback } from 'react'
import ItemsList from './ItemsList'


function App() {
  
  const [count, setCount] = useState(1)
  const [colored, setColored] = useState(false)
  
  const styles = {
    color: colored ? 'red' : 'black'
  }
    
  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((val, i) => `Элемент ${i + indexNumber}`)
  }, [count])

  return (
    <>
      <h1 style={styles}>Колво элем - {count}</h1>
      <button onClick={() => setCount(prev => prev +1)}>Добавить</button>
      <button onClick={() => setColored(prev => !prev)}>Izmenit</button>
      <ItemsList getItems={generateItemsFromAPI}/>
    </>
  )
}
export default App;
