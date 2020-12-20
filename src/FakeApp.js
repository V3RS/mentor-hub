import React from 'react'
import styled from 'styled-components'
import { Landing } from './pages/index'
import { Register } from './pages/index'
import { Signin } from './pages/index'


const AppContainer = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    /* border: 2px solid darkgreen; */
`

export default function FakeApp() {

    return (
        <AppContainer>
            <Landing />
            <Register />
            <Signin />
        </AppContainer>
    )
}
