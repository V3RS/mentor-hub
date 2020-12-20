import React from "react";
import styled from "styled-components";
import googleIcon from "../../assets/google-icon.png"
import { setButtonStyling } from "./utils"

const StyledButton = styled.button`
background: ${props => props.background};
border: ${props => props.border};
box-sizing: border-box;
width: 328px;
height: 40px;
color: ${props => props.color};
box-shadow: 4px 4px 0px rgba(48, 48, 48, 0.25);
border-radius: 2px;
font-family: 'Open Sans', sans-serif;
font-size: 16px;
`

const StyledImg = styled.img`
width: 16px;
display: ${props => props.display};
`

export default function Button(props) {
  const { buttonText, buttonStyle } = props
  const { background, border, color, display } = setButtonStyling(buttonStyle)

  return <StyledButton background={background} border={border} color={color}>{buttonText} <StyledImg display={display} src={googleIcon}></StyledImg></StyledButton>

}
