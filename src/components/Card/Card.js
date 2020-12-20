import React from "react";
import styled from "styled-components";
import Location from "./Location/Location";
import CardUser from "./CardUser/CardUser";
import TradeExp from "./TradeExp/TradeExp";

const CardContainer = styled.div `
/* Card Container */

width: 328px;
height: 370px;

/* Primary/White */

background: #FFFFFF;
/* Primary/Black */

border: 2px solid #303030;
box-sizing: border-box;
box-shadow: 4px 4px 0px rgba(48, 48, 48, 0.25);
border-radius: 2px;
`

export default function Card() {



    return (
         <CardContainer>
             <CardUser />
             <TradeExp />
             <Location />
         </CardContainer>
    )

}
