import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>react !!!!!</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'click me to visit google'
// };


const AnotherElemet=(
  <a href="https://google.com" target='_blank'> visit google</a>
)


const username= "chai aur code with hanzala arshad"

const  = React.createElement(
  'a',
  { href:'https://google.com' ,target : '_blank'},
  'click me to visit google',
  username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   
  
  reactElement
)


// clomsy code 