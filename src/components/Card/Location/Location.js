import React from "react";
import styled from "styled-components";
import locationLogo from "../../../assets/location-logo.png"

const LocationContainer = styled.div `
/* Location text */

font-family: Open Sans;
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 16px;
/* identical to box height, or 107% */

display: flex;
align-item: center;
/* Primary/Black */

color: #303030;

& > img {
    border: 2px black;
}
& > p {
    margin: 0px 0px 0px 8px;

}
`

export default function Location() {

    return (
        <LocationContainer>
            <img src={locationLogo} />
            <p>Location</p>
        </LocationContainer>
    )
}
