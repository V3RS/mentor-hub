import React from 'react'
import ReactDOM from 'react-dom'
import { Playground } from './pages/Playground'
import './index.css'

function Index() {
  return (
      <Playground />
  )
}

ReactDOM.render(
   <Index />, document.getElementById('root')
)