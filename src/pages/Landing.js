import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'

const LandingContainer = styled.div`
    border: 2px solid lightcoral;
`

export default function Landing() {

    return (
        <LandingContainer>
            <Button buttonText={'Register'} buttonStyle={'secondary'} />
            <Button buttonText={'Sign in'} buttonStyle={'secondary'} />
        </LandingContainer>
    )
}
