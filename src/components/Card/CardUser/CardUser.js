import React from "react";
import styled from "styled-components";

const CardUserContainer = styled.div `


    height: 50px;
    width: 50px;

    /* Primary/White */

        background: #FFFFFF;
    /* Primary/Black */

    border: 1px solid #303030;
    box-sizing: border-box;
    box-shadow: 2px 2px 0px #A7133A;
    border-radius: 2px;
`

export default function CardUser() {
    return(
        <CardUserContainer />
    )

}
