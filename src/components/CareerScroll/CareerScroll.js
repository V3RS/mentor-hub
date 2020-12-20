import React from "react";
import styled from "styled-components";
// import check from "../../assets/check-mark.svg"
import cop from "../../assets/cop-icon.png"
import developer from "../../assets/developer-icon.png"
import electriican from "../../assets/electrician-icon.png"
import fire from "../../assets/fire-icon.png"
import mechanic from "../../assets/mechanic-icon.png"
import retail from "../../assets/retail-icon.png"
import service from "../../assets/service-icon.png"
import transportation from "../../assets/transportation-icon.png"

const StyledDiv = styled.div`
    border: 2px solid black;
    padding: 8px;


& > div {
    border: 2px solid green;
    display: inline-block;
    }

const StyledImg = styled.img
    border: 2px solid red;
    margin: 0 200px;
    width: 80px;


const StyledSpan = styled.span
    display: inline-block;
    width: 3rem;
`



export default function CareerScroll(props) {
    
    
    return <StyledDiv>
   <div>
      <span><img src={cop}></img></span> 
       <span><img src={developer}></img></span>
       <span><img src={electriican}></img></span>
       <span><img src={fire}></img></span>
       <span><img src={mechanic}></img></span>
       <span><img src={retail}></img></span>
       <span><img src={service}></img></span>
       <span><img src={transportation}></img></span>
   </div> 
    
    </StyledDiv>
  
  }
  

//   <StyledImg display={display} src={googleIcon}></StyledImg>