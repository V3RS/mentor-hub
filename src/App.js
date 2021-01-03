import React from 'react'
import styled from 'styled-components'
import { TempLandingPage } from './pages/TempLandingPage'
// import { Playground } from './pages/playsground'

const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  border: 2px solid green;
`

function App() {
  return (
    <AppContainer>
      <TempLandingPage />
      {/* <Playground /> */}
    </AppContainer>
  )
}

export default App;
