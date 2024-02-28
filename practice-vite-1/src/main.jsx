import React from 'react'
import ReactDOM from 'react-dom/client'
 import App from './App.jsx'


// const reactElement = {
//     type:'a',
//     props:{
//         href: 'http://google.com',
//         target: '__blank'
//     },
//     children: 'click me to visit google'
// }
const anotherElement = (
    <a href="http://google.com" target='__blank'>google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'http://codepen.com' ,target: '__blank'},
    'click me to go google page'

)

ReactDOM.createRoot(document.getElementById('root')).render(
  
anotherElement
   
  

  
)
