import React from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Button } from './components/Button/'
import { Inputs } from './components/Inputs'
import { Picked } from './components/Picked'


const AppContainer = styled.div`
  border: 2px solid lightcoral;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Button buttonText={'Register'} buttonStyle={'primary'} />
      <Button buttonText={'Register'} buttonStyle={'secondary'} />
      <Button buttonText={'Register Using'} buttonStyle={'google-btn'} />
      <br></br>
      <Picked messageText={"AWESOME! IF THIS MENTOR ALSO CHOOSES \"CONNECT\", WE WILL HAVE THE MENTOR FOLLOW UP."}/>
      <br></br>
      <Inputs type={"email"} placeholder={"Email"}/>
      <Inputs type={"password"} placeholder={"password"}/>
    </AppContainer>
  )
}

export default App;
