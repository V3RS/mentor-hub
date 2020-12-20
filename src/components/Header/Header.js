import React from 'react'
import styled from 'styled-components'
import CurrentUser from './CurrentUser'
import mentorLogo from '../../assets/mentor-hub-logo.svg'

import mentorImg from '../../assets/mentor-user.jpg'

const HeaderContainer = styled.div`
    border: 2px solid lightcoral;

`

export default function Header() {

    return (
        <HeaderContainer>
            <img src={mentorLogo}/>
            <CurrentUser userImage={mentorImg} type={'mentor'} />
        </HeaderContainer>
    )
}
