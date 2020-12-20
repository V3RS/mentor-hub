import React from 'react'
import styled from 'styled-components'
import { Landing } from './Landing'
// import { CreateAccount } from './CreateAccount'
// import { Signin } from './Signin'


const ViewContainer = styled.div`
    border: 1px solid dodgerblue;
`

export default function UserView() {
    return (
        <ViewContainer>
            <Landing />
            {/* <CreateAccount /> */}
            {/* <Signin /> */}
        </ViewContainer>
    )
}
