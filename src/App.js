import React from 'react'
import styled from 'styled-components'
import { Playground } from './pages/playground'

const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  /* border: 2px solid lightcoral; */
`

function App() {
  return (
    <AppContainer>
      <Playground />
    </AppContainer>
  )
}

export default App;
