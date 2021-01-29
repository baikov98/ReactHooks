import React from 'react'
import Alert from './Alert'

const AlertContext = React.createContext()

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false)

    const toggle = () => setAlert(prev => !prev)

    return (
        <AlertContext.Provider value={alert}>
            { children }
         </AlertContext.Provider>
    )
}