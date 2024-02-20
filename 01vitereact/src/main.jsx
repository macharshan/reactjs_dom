import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Harsha from './harsha.jsx'


// function App() {

//     return (
//       <Harsha />
//     )
//   }


// const reactElement{
//     type: `a`,
//     props: {
//         href: `https://www.google.com`,
//         target: `_blank`
//     },
//     insideText: `click me`
    
// }

const addText = `vaishnavi`

const anotherElement = React.createElement(
    `a`,
    {
        href: `https://www.google.com`,
        target: `_blank`
    },
    `clickMe (i'll be on google)`,
    addText
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    anotherElement
    
)
