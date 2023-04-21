import { keyframes } from "@chakra-ui/react";
const animationCardKF = keyframes`
 0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`;

const animationPageKF = keyframes`
0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

const animationDot = keyframes`
  50%  {
    box-shadow: 9.5px 0 0 1.5px, 19px 0 0 3.5px, 28.5px 0 0 1.5px
  }
  100% {
    box-shadow: 9.5px 0 0 0  , 19px 0 0 1.5px, 28.5px 0 0 3.5px
    }
`;

const animationCard = `${animationCardKF} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;
const animationPage = `${animationPageKF} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;
const animationDots = `${animationDot} .5s infinite alternate linear`;

export { animationCard, animationPage, animationDots };
