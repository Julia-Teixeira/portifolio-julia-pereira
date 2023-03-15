import { Center, Flex, Image, Text } from "@chakra-ui/react";
import background2 from "../../assets/background2.png";
import Medias from "../Medias";

const Footer = () => {
  return (
    <Flex
      w="100%"
      h="7.3125rem"
      bgImage={`linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.9)),url(${background2})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      alignItems="center"
    >
      <Flex
        w="80%"
        h="6.5625rem"
        margin="0 auto"
        alignItems="center"
        justifyContent="center"
      >
        <Text as="h4" color="white" w="210px" fontSize="2xl">
          Julia Pereira | © 2023
        </Text>
        <Medias />
      </Flex>
    </Flex>
  );
};

export default Footer;
