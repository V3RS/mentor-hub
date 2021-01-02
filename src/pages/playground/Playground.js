import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Inputs } from '../../components/Inputs'
import { Picked } from '../../components/Picked'
import { CareerScroll } from '../../components/CareerScroll'

const PlaygroundContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 24px;

    & > h1 {
        margin: 0px 0px 0px 0px;
        height: 64px;
        font-family: 'Open Sans';
        font-size: 32px;
        line-height: 32px;
        text-transform: uppercase;

        @media (min-width: 768px) {
            height: 96px;
            font-size: 48px;
            line-height: 48px;
        }

    }

    & > h3 {
        margin: 56px 0px 0px 0px;
        height: 48px;
        font-family: 'Open Sans';
        font-size: 24px;
        line-height: 24px;

        @media (min-width: 768px) {
            margin: 64px 0px 0px 0px;
            height: 64px;
            font-size: 32px;
            line-height: 32px;
        }
    }

    @media (min-width: 768px) {
        padding: 48px;
    }
`

export default function Playground() {
    return (
        <PlaygroundContainer>
            <h1>Component Playground</h1>

            <h3>Header Component</h3>
            <Header />

            <h3>Button Component</h3>
            <Button buttonStyle={'primary'} buttonText={'Primary Button'}  />

            <h3>Inputs Component</h3>
            <Inputs type={'email'} placeholder={'email@email.com'} />

            <h3>Picked Component</h3>
            <Picked />

            <h3>Career Scroll Component</h3>
            <CareerScroll />
        </PlaygroundContainer>
    )
}
