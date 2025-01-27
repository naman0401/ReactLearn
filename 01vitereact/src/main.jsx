import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement =  {
//     type: 'a',
//     props: {
//         href:'google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } //This wont work if you call it directly

const anotherElement= (
    <a href="http://google.com" target="_blank"> visit Google </a>
)

const anotherUser = "Naman!!"

const reactElement = React.createElement(
    'a', {
        href: 'http://google.com',
        target:'_blank'
    },
    "Continue to Google",
    anotherUser
)

createRoot(document.getElementById('root')).render(
    // <App />
    reactElement
    // anotherElement
)
