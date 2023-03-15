import { Center, Flex, Text } from "@chakra-ui/react";
import Medias from "../Medias";

const SocialMedia = () => (
  <Flex
    direction="column"
    color="white"
    alignItems="center"
    gap="25px"
    margin="30px 0"
  >
    <Text as="h2" fontSize={{ sm: "28px", md: "40px" }}>
      Minhas Redes
    </Text>
    <Text as="p" fontSize={{ sm: "24px", md: "32px" }}>
      Sinta-se a vontade para entrar em contato!
    </Text>
    <Medias />
  </Flex>
);

export default SocialMedia;
