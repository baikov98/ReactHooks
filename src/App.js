
import React, { useEffect, useState,  } from 'react'
import Alert from './alert/Alert'
import Main from './Main'
import {AlertProvider} from './alert/AlertContext'

function App() {


  return (
    <AlertProvider>
    <div className={'container'}>
    <Alert/>
      <Main toggle={() => {}}/>
    </div>
    </AlertProvider>
  )
}
export default App;
