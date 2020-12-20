import React from "react";
import styled from "styled-components";
import check from "../../assets/check-mark.svg"


const MessageContainer = styled.div`
display: flex;
width: 344px;
height: 80px;
background: #FFFFFF;
border: 2px solid #13A77B;
box-sizing: border-box;
box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.04em;
text-transform: uppercase;
padding-left: 4px;
color: #13A77B;
border-radius: 10px;

& > div {
background: #FFFFFF;
border: 1px solid #13A77B;
box-sizing: border-box;
width: 4px;
height: 60px;
margin: 8px;
box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
}

& > p {
  margin-right: 4px;
}
`

export default function () {
  return (
      <MessageContainer>
          <img src={check}/>
          <div></div>
          <p>{"AWESOME! IF THIS MENTOR ALSO CHOOSES \"CONNECT\", WE WILL HAVE THE MENTOR FOLLOW UP."}</p>
      </MessageContainer>
  )
}
