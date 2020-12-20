import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FakeApp from './FakeApp'
// import App from './App';

function Index() {
  return (
      <FakeApp />
  )
}

ReactDOM.render(
   <Index />, document.getElementById('root')
)