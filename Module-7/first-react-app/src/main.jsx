import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {UserProvider} from './Module-7/context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { EmojiProvider } from './components/Exercise_3/EmojiContext.jsx'


// This code in main.jsx handles rendering the App component
// into the DOM element with an id of 'root' (in index.html)
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
{/* All other routing components need this to work */}
<EmojiProvider>
<UserProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</UserProvider>
</EmojiProvider>
</React.StrictMode>,
)