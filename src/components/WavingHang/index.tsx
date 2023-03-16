import wavingHand from "../../assets/wavingHand.png";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";

const WavingHand = () => (
  <motion.div
    animate={{ rotate: 20 }}
    transition={{
      repeat: Infinity,
      type: "tween",
      duration: 0.8,
      from: 0,
    }}
  >
    <Image
      src={`${wavingHand}`}
      alt="Waving hand"
      boxSize={{ sm: "50px", md: "72px" }}
    />
  </motion.div>
);

export default WavingHand;
