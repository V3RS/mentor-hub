import React from 'react'
import styled from 'styled-components'
import { UserView } from './UserView'

const AppContainer = styled.div`
    box-sizing: border-box;
    height: 100vh;
    /* border: 2px dashed lightcoral; */
`

export default function FakeApp() {
    return (
        <AppContainer>
            <UserView />
        </AppContainer>
    )
}
