import wavingHand from "../../assets/wavingHand.png";
import { Image } from "@chakra-ui/react";
import { animationWavingHand } from "../../styles/animations";

const WavingHand = () => (
  <Image
    src={`${wavingHand}`}
    alt="Waving hand"
    boxSize={{ sm: "50px", md: "72px" }}
    animation={animationWavingHand}
    transformOrigin="70% 70%"
  />
);

export default WavingHand;
