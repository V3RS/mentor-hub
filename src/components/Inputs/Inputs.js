import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
width: 328px;
height: 40px;
background: #FFFFFF;
border: 2px solid #303030;
box-sizing: border-box;
border-radius: 2px;
color: #303030;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
padding-left: 16px;
padding-right: 16px;

&:focus {
    border: 2px solid #1389A7;
}


`
//3 states default focus active
export default function Inputs(props) {
    const {type, placeholder} = props;


    return <StyledInput type={type} placeholder={placeholder}></StyledInput>
}
