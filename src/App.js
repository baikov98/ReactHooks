import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'


function App() {
  const [type, setType] = useState('users')

  return (
    <div>
     <h1>Ресурс: {type}</h1>
     <button onClick={() => setType('users')}>Пользователи</button>
     <button onClick={() => setType('todo')}>Todo</button>
     <button onClick={() => setType('posts')}>Посты</button>
    </div>
  )
}
export default App;
