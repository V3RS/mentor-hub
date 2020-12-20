import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import FakeApp from './FakeApp'
// import App from './App';

function Index() {
  return (
    <Router>
      <FakeApp />
    </Router>
  )
}

ReactDOM.render(
   <Index />, document.getElementById('root')
)