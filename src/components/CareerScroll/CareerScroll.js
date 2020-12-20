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
    display: flex;
    justify-content: center;
& > div {
    overflow: scroll;
    white-space: nowrap;
    display: inline-block;
    max-width: 600px;
    border: 2px solid #13A77B;
    border-radius: 10px;
    box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);

    }
`

const StyledSpan = styled.span`
text-align: center;
display: inline-block;
& > img {
    display: inline-block;
    margin: 16px 32px 0px;
} & > p {
    font-family: 'Open Sans', sans-serif;
    margin: 4px 4px 8px;
}

`



export default function CareerScroll(props) {
    
    return <StyledDiv>

   <div>
       <StyledSpan><img src={cop}></img><p>police</p></StyledSpan> 
       <StyledSpan><img src={developer}></img><p>software</p></StyledSpan>
       <StyledSpan><img src={electriican}></img><p>electrical</p></StyledSpan>
       <StyledSpan><img src={fire}></img><p>fire safety</p></StyledSpan>
       <StyledSpan><img src={mechanic}></img><p>mechanic</p></StyledSpan>
       <StyledSpan><img src={retail}></img><p>retail</p></StyledSpan>
       <StyledSpan><img src={service}></img><p>service</p></StyledSpan>
       <StyledSpan><img src={transportation}></img><p>transport</p></StyledSpan>
   </div> 
    
    </StyledDiv>
  
  }
  

//   <StyledImg display={display} src={googleIcon}></StyledImg>