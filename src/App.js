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
      <Button buttonText={'Register'} buttonStyle={'primary'} />
      <Button buttonText={'Register'} buttonStyle={'secondary'} />
      <Button buttonText={'Register Using'} buttonStyle={'google-btn'} />
    </AppContainer>
  )
}

export default App;
