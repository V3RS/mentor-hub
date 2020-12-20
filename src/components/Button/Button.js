import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
        & > #reg {
          position: absolute;
          width: 328px;
          height: 40px;
          left: calc(50% - 328px / 2 + 0.5px);
          top: 636px;

          /* Primary/White */

          background: #ffffff;
          /* Primary/Black */

          border: 2px solid #303030;
          box-sizing: border-box;
          /* 4px */

          box-shadow: 4px 4px 0px rgba(48, 48, 48, 0.25);
          border-radius: 2px;
        }

        & > div {
          /* Or */

          position: absolute;
          width: 328px;
          height: 16px;
          left: 24px;
          top: 692px;

          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 16px;
          /* identical to box height, or 100% */

          display: flex;
          align-items: center;
          text-align: center;
          letter-spacing: 0.02em;
          text-transform: uppercase;

          /* Primary/Black */

          color: #303030;
        }

        & > #sign-in {
          /* Button/Secondary/default */


          position: absolute;
          width: 328px;
          height: 40px;
          left: calc(50% - 328px/2 + 0.5px);
          top: 724px;

          /* Primary/White */

          background: #FFFFFF;
          /* Primary/Black */

          border: 2px solid #303030;
          box-sizing: border-box;
          /* 4px */

          box-shadow: 4px 4px 0px rgba(48, 48, 48, 0.25);
          border-radius: 2px;

    }
`;

//components should have a capital letter in the begining

export default function Button() {
  function regHandler() {
    return;
  }

  function signInHandler() {
    return;
  }
  return (
    <ButtonContainer>


        {/* <input type="text" id="email" placeholder="Email"> </input> */}
        <button id="reg" onClick={regHandler}>
        Register
      </button>
      <div>OR</div>
      <button id="sign-in" onClick={signInHandler}>
        Sign In
      </button>


    </ButtonContainer>
  );
}
