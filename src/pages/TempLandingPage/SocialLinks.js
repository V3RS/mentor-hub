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

    & > .icon-container {
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
            <div className={'icon-container'}>
                <a href={linkedIn} target={`_blank`} rel={`noopener noreferrer`} >
                    <img src={linkedinIcon} alt={'hello'} />
                </a>
            </div>


            <div className={'icon-container'}>
                <a href={github} target={`_blank`} rel={`noopener noreferrer`}>
                    <img src={githubIcon} alt={'hello'} />
                </a>
            </div>

            <div>
                <a href={portfolio} target={`_blank`} rel={`noopener noreferrer`}>
                    <img src={portfolioIcon} alt={'hello'} />
                </a>
            </div>
        </LinksContainer>
    )
}
