import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Register from './components/Register'
import Signin from './components/Signin'

const AppContainer = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    /* border: 2px solid darkgreen; */
`

export default function FakeApp() {
    return (
        <AppContainer>
            <Switch>
                <Route exact path='/'><Landing /></Route>
                <Route path='/register'><Register /></Route>
                <Route path='/signin'><Signin /></Route>
            </Switch>
        </AppContainer>
    )
}
