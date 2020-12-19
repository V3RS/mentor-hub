import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    border: 2px solid lightcoral;

    & > p {
        color: blue;
    }
`

//components should have a capital letter in the begining

export default function Header() {
    return (
        <HeaderContainer>
            <p>Mentor Hub</p>
        </HeaderContainer>
    )
}
