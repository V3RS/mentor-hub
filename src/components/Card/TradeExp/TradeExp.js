import React from "react";
import styled from "styled-components";

const TradeExpContainer = styled.div `

width: 50px;
height: 50px;


/* Primary/White */

background: #FFFFFF;
/* Primary/Black */

border: 1px solid #303030;
box-sizing: border-box;
box-shadow: 2px 2px 0px #A7133A;
border-radius: 2px;

& > p {

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    /* identical to box height, or 100% */

    text-align: center;

    /* Primary/Black */

    color: #303030;
}
`

export default function TradeExp() {
    return(
        <TradeExpContainer>
            <p>1 Yr</p>
        </TradeExpContainer>
    )

}
