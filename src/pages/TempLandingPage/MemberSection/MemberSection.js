import React from 'react'
import styled from 'styled-components'
import danHeadshotSmall from '../../../assets/images/dan-headshot.png'

const SectionContainer = styled.div`
    border: 2px dashed gray;

    & > h3 {
        margin: 0px 0px 0px 0px;
        width: 344px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #303030;
        border: 1px dotted blue;
    }

    & > .headshot-container {
        width: 104px;
        height: 104px;
        border-radius: 100%;
        background: url(${danHeadshotSmall});
        border: 1px dotted blue;

    }

    & > .body-one {
        margin: 0px 0px 0px 0px;
        width: 344px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #303030;
        border: 1px dotted blue;

    }

    & > .body-two {
        margin: 0px 0px 0px 0px;
        width: 344px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #000000;
        border: 1px dotted blue;
    }
`

export default function MemberSection() {
    return (
        <SectionContainer>
            <h3>{'Name'}</h3>
            <div className={'headshot-container'}></div>
            <p className={'body-one'}>{'Developer'}</p>
            <p className={'body-two'}>{'USMC'}</p>
        </SectionContainer>
    )
}
