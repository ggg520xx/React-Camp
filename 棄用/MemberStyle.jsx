import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { campEmpty } from '../src/images/member/MemberMange';


const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
//   height: 100vh; /* 調整高度以適應你的需求 */
`;

// Define keyframes using the css helper
const flipCardAnimation = keyframes`
  0% { transform: rotateY(0deg); }
  25% { transform: rotateY(90deg); }
  50% { transform: rotateY(180deg); }
  75% { transform: rotateY(270deg); }
  100% { transform: rotateY(360deg); }
`;

// Define styled components
const FlipCard = styled.div`
//   float: left;
//   margin: 6px;
  width: 132px;
  height: 160px;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;

  /* Apply the animation using the css helper */
  ${({ animation }) =>
        animation &&
        css`
      animation: ${flipCardAnimation} 2s linear infinite;
    `}
`;

const FlipCardFront = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const FlipCardBack = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;


const MemberEmptyStyle = () => {
    return (
        <CenteredContainer>
            <FlipCard className="animation">
                <FlipCardInner animation>
                    <FlipCardFront src={campEmpty} />
                    <FlipCardBack src={campEmpty} />
                </FlipCardInner>
            </FlipCard>
        </CenteredContainer>
    );
};

export default MemberEmptyStyle;

