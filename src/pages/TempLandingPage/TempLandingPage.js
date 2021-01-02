import React from 'react'
import styled from 'styled-components'

import smallLogo from '../../assets/images/logo-small.png'

const PageContainer = styled.div`
    border: 1px dotted lightcoral;

    & > .img-container {
        width: 344px;
        height: 80px;
        background: url(${smallLogo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border: 1px dotted blue;
    }

    & > p {
        margin: 0px;
        width: 344px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: #303030;
        border: 1px dotted blue;
    }

    & > h2 {
        margin: 0px;
        width: 344px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #303030;
        border: 1px dotted blue;
    }
`

export default function TempLandingPage() {
    return (
        <PageContainer>
            <div className={'img-container'}></div>
            <p>{'Check back soon...'}</p>
            <h2>{'The team'}</h2>
        </PageContainer>
    )
}
