import styled from 'styled-components'
import { indexBottomBg } from '../../images/search/SearchMange';



const DivContentZone = styled.div`
  // min-height: 95%;
  // width: 90%;
  // margin: 0 auto;

  min-height: 85vh;
  width: 100%;
  height: auto;
  background-image: url(${indexBottomBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;






const DivCoverStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;

  @media (max-width: 1535px) {
    width: 50%;
  }

  @media (max-width: 1279px) {
    width: 60%;
  }

  @media (max-width: 1023px) {
    width: 70%;
  }

  @media (max-width: 767px) {
    width: 90%;
  }

  @media (max-width: 639px) {
    width: 100vw;
  }
`;





/* 確保比其他元素的 z-index 高 */
/* 禁止滾動 */

const DivBlackCoverOutfit = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // min-width: 1366px;
  min-height: 768px;
  z-index: 10; 
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 84px 128px;
`;




export { DivContentZone, DivCoverStyled, DivBlackCoverOutfit }