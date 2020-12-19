import React from 'react'
import styled from 'styled-components'
import IG from '../assets/instagram.png'

const SocialMediaContainer = styled.div`
    & > a {
        & > img {
            width: 20px
        }
    }
 `

export default function SocialMedia() {


    return(
        <SocialMediaContainer>
            <a href="https://www.instagram.com">
                <img src={IG} alt="instagram logo"/>
            </a>
        </SocialMediaContainer>
    )
 }
//scrimba
