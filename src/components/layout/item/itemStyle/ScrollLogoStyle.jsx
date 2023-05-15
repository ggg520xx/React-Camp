import styled, { keyframes } from 'styled-components';
import { jumpBall } from '../../../../images/layout/LayoutMange';


const jumpAnimation = keyframes`
  0% {
    bottom: 90px;
  }

  50% {
    bottom: 160px;
  }

  100% {
    bottom: 90px;
  }
`;

const ScrollLogoStyle = styled.div`
  right: 26px;
  z-index: 20;
  position: fixed;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.4s ease-in-out;
  animation: ${jumpAnimation} 2s infinite;

  > img {
    width: 90px;
    height: 90px;
    content: url(${jumpBall});
  }

  &:hover {
    transform: rotate(360deg);
  }
`;


export { ScrollLogoStyle }