import React from 'react'
import styled from 'styled-components'
import { Header }  from "./components/Header/"
import SocialMedia from "./components/SocialMedia"
import { Button } from './components/Button/'

const AppContainer = styled.div`
  border: 2px solid lightcoral;
`

function App() {
  return (
    <AppContainer>
      <Button/>
    </AppContainer>
  )
}

export default App;
