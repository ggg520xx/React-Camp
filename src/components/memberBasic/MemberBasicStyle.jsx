import styled from 'styled-components'


const DivContentZone = styled.div`
  min-height: 95%;
  width: 90%;
  margin: 0 auto;
`;






const DivCoverStyled = styled.div`
 position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 60vh;
`;





/* 確保比其他元素的 z-index 高 */
/* 禁止滾動 */

const DivBlackCoverOutfit = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 1366px;
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