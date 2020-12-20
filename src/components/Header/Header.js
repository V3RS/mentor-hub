import React from 'react'
import styled from 'styled-components'
import mentorLogo from '../../assets/mentor-hub-logo.svg'

const HeaderContainer = styled.div`
    border: 2px solid lightcoral;

`

//components should have a capital letter in the begining

export default function Header() {
    return (
        <HeaderContainer>
            <img src={mentorLogo}/>
        </HeaderContainer>
    )
}
