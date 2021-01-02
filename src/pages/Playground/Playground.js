import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Inputs } from '../../components/Inputs'
import { Picked } from '../../components/Picked'

const PlaygroundContainer = styled.div`
    border: 2p dashed blue;
    padding: 24px; 

    & > h1 {
        margin: 0px 0px 24px 0px;
        height: 64px;
        font-family: 'Open Sans';
        font-size: 32px;
        line-height: 32px;
        text-transform: uppercase;
        color: #303030;
    }

    & > h3 {
        margin: 40px 0px 16px 0px;
        font-family: 'Open Sans';
        font-family: 'Open Sans';
        font-size: 24px;
        line-height: 24px;
        color: #303030;
    }
`

export default function Playground() {
    return (
        <PlaygroundContainer>
            <h1>Component Playground</h1>

            <h3>Header</h3>
            <Header />

            <h3>Button</h3>
            <Button buttonText={'Primary Button'} buttonStyle={'primary'} />

            <h3>Inputs</h3>
            <Inputs type={'email'} placeholder={'email@email.com'} />

            <h3>Picked</h3>
            <Picked messageText={'messagetext here'} />

        </PlaygroundContainer>
    )
}
