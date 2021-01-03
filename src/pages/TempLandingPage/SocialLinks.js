import React from 'react'
import styled from 'styled-components'
import linkedinIcon from '../../assets/icons/linkedin-icon.svg'
import githubIcon from '../../assets/icons/github-icon.svg'
import portfolioIcon from '../../assets/icons/portfolio-icon.svg'

const LinksContainer = styled.div`
    width: 160px;
    position: absolute;
    top: 254px;
    left: calc(50% - 160px/2);
    display: flex;
    justify-content: space-between;
    /* border: 1px solid green; */

    & > div {
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 1px dotted blue; */
    }

`

export default function SocialLinks(props) {
    const { linkedIn, github, portfolio } = props

    console.log(linkedIn, github, portfolio)
    return (
        <LinksContainer>
            <div><img src={linkedinIcon} alt={'hello'} /></div>
            <div><img src={githubIcon} alt={'hello'} /></div>
            <div><img src={portfolioIcon} alt={'hello'} /></div>
        </LinksContainer>
    )
}
