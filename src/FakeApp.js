import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
    border: 2px dashed lightcoral;
`

export default function FakeApp() {
    return (
        <AppContainer>
            <p>App</p>
        </AppContainer>
    )
}
