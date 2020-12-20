import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'

const LandingContainer = styled.div`
    border: 2px dotted red;
`

export default function Landing() {
    return (
        <LandingContainer>
            <p>Landing</p>
            <Button buttonText={'Button'} buttonStyle={'secondary'} />
        </LandingContainer>
    )
}
