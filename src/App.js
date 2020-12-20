import React from 'react'
import styled from 'styled-components'
import { Header }  from "./components/Header/"
import SocialMedia from "./components/SocialMedia"

const AppContainer = styled.div`
  border: 2px solid lightcoral;
`

function App() {
  return (
    <AppContainer>
      <p>App Comppne</p>
    </AppContainer>
  )
}

export default App;
