import React from 'react'
import styled from 'styled-components'
import stedmanHeadshot from '../../../assets/images/Stedman-headshot.png'

const SectionContainer = styled.div`
    /* box-sizing: border-box; */
    width: 100%;
    height: 288px;
    position: relative;
    /* border: 2px dashed gray; */

    & > h3 {
        margin: 0px 0px 0px 0px;
        width: 328px;
        position: absolute;
        top: 0px;
        left: calc(50% - 328px/2);
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #303030;
        /* border: 1px dotted blue; */
    }

    & > .headshot-container {
        position: absolute;
        top: 56px;
        left: calc(50% - 104px/2);
        width: 104px;
        height: 104px;
        border-radius: 100%;
        background: url(${stedmanHeadshot});
        overflow: hidden;
        /* border: 1px dotted blue; */

        & > img {
            width: 100%;
            height: 100%;
        }
    }

    & > .body-one {
        margin: 0px 0px 0px 0px;
        width: 328px;
        position: absolute;
        top: 176px;
        left: calc(50% - 328px/2);
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #303030;
        /* border: 1px dotted blue; */

    }

    & > .body-two {
        margin: 0px 0px 0px 0px;
        width: 328px;
        position: absolute;
        top: 208px;
        left: calc(50% - 328px/2);
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #000000;
        /* border: 1px dotted blue; */
    }
`

export default function MemberSection(props) {
    const { name, branch, role, objName } = props

    function setImage(name) {
        if (name === 'stedman') {
            return stedmanHeadshot
        }
    }
    let image = setImage(objName)
    console.log(image)

    return (
        <SectionContainer>
            <h3>{name}</h3>
            <div className={'headshot-container'}><img src={image} alt={'dont know'} /></div>
            <p className={'body-one'}>{role}</p>
            <p className={'body-two'}>{branch}</p>
        </SectionContainer>
    )
}
