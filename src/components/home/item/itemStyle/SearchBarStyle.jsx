import styled from 'styled-components'



const SearchBarGlowColor1 = styled.div`top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    border-radius: 100%;animation: glow1 4s linear infinite;  @keyframes glow1 {
    0% {
      transform: translate(10%, 10%) scale(1);
    }
    25% {
      transform: translate(-10%, 10%) scale(1);
    }
    50% {
      transform: translate(-10%, -10%) scale(1);
    }
    75% {
      transform: translate(10%, -10%) scale(1);
    }
    100% {
      transform: translate(10%, 10%) scale(1);
    }
  }`
const SearchBarGlowColor2 = styled.div`top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    border-radius: 100%;    animation: glow2 4s linear infinite;
    animation-delay: 100ms;  @keyframes glow2 {
    0% {
      transform: translate(-10%, -10%) scale(1);
    }
    25% {
      transform: translate(10%, -10%) scale(1);
    }
    50% {
      transform: translate(10%, 10%) scale(1);
    }
    75% {
      transform: translate(-10%, 10%) scale(1);
    }
    100% {
      transform: translate(-10%, -10%) scale(1);
    }
  }`
const SearchBarGlowColor3 = styled.div`top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    border-radius: 100%;    animation: glow3 4s linear infinite;
    animation-delay: 200ms;@keyframes glow3 {
    0% {
      transform: translate(-10%, 10%) scale(1);
    }
    25% {
      transform: translate(-10%, -10%) scale(1);
    }
    50% {
      transform: translate(10%, -10%) scale(1);
    }
    75% {
      transform: translate(10%, 10%) scale(1);
    }
    100% {
      transform: translate(-10%, 10%) scale(1);
    }
  }`
const SearchBarGlowColor4 = styled.div`top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    border-radius: 100%;  animation: glow4 4s linear infinite;
    animation-delay: 300ms;  @keyframes glow4 {
    0% {
      transform: translate(10%, -10%) scale(1);
    }
    25% {
      transform: translate(10%, 10%) scale(1);
    }
    50% {
      transform: translate(-10%, 10%) scale(1);
    }
    75% {
      transform: translate(-10%, -10%) scale(1);
    }
    100% {
      transform: translate(10%, -10%) scale(1);
    }
  }`




const SearchBarShadow = styled.div`background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    transform: translate(32%, 170%);
    top: 0;
    left: 0;
    border-radius: 100px;
    

@media (max-width: 768px) {
    transform: translate(15%, 150%);
  };


 @media (max-width: 576px) {
    transform: translate(10%, 130%);
  };

      @media (max-width: 500px) {
    transform: translate(0%, 100%);
  };
    `
    
/* @apply border border-yellow-300; */
/* flex
justify-center */


const SearchBarShadow2 = styled.form`    width: 75%;
    position: absolute;
    top: 260px;
    
    right: 0;
    left: 0;
    margin: auto; 
    background-color: var(--darkColor);
    padding: 1px;`
/* @apply border border-yellow-300; */
/* flex
justify-center */


const Searchtext = styled.div`
    position: absolute;
    top: 50%;
    right: 15%;
    
     @media (max-width: 576px) {
    top: 55%;;
    right: 10%;
  };
    `
    








export { SearchBarGlowColor1, SearchBarGlowColor2, SearchBarGlowColor3, SearchBarGlowColor4, SearchBarShadow, SearchBarShadow2, Searchtext }