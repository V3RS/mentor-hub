import React from 'react'
import styled from 'styled-components'
import { setBorder } from './utils'

const CurrentUserContainer = styled.div`
    border: ${props => props.border};
    width: 40px;
    height: 40px;
    border-radius: 50%;

    & > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`

export default function CurrentUser(props) {
    const { userImage, type } = props

    return (
        <CurrentUserContainer border={() => setBorder(type)}>
            <img src={userImage} alt={'Current user image.'}  />
        </CurrentUserContainer>
    )
}
