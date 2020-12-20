import React from "react";
import styled from "styled-components";
import googleIcon from "../../assets/google-icon.png"

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

//components should have a capital letter in the begining

//font-family: 'Open Sans', sans-serif;

export default function Button(props) {
  const { buttonText, buttonStyle } = props
  const { background, border, color, display } = setButtonStyling(buttonStyle)


function setButtonStyling(status) {
  if (status === 'primary') {
    return {
        background: `#13A77B`,
        color: `white`,
        border: `border: 2px solid #303030`,
        display: `none`
    }
  } else if (status === 'secondary') {
    return {
      background: `#FFFFFF`,
      color: `#303030`,
      border: `border: 2px solid #303030`,
      display: `none`
    }
  }
  else if (status === 'google-btn') {
      return {
        background: `#FFFFFF`,
        color: `#303030`,
        border: `border: 2px solid #303030`,
        display: `inline-block`
      }
  }
}

  return <StyledButton background={background} border={border} color={color}>{buttonText} <StyledImg display={display} src={googleIcon}></StyledImg></StyledButton>

}
