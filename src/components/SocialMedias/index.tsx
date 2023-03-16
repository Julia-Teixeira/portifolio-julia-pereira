import { Center, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Medias from "../Medias";
import gitHub from "../../assets/github.png";
import whatsApp from "../../assets/whatsApp.png";
import linkedIn from "../../assets/linkedIn.png";
import { color } from "framer-motion";

const SocialMedia = () => (
  <Flex
    direction="column"
    color="white"
    alignItems="center"
    gap="16px"
    margin="30px 0"
  >
    <Text as="h2" fontSize={{ sm: "28px", md: "40px" }}>
      Minhas Redes
    </Text>
    <Flex direction="column" fontSize={{ sm: "24px", md: "32px" }}>
      <Link to="https://github.com/Julia-Teixeira" target="_blank">
        <Center
          display="flex"
          flexDirection="column"
          _hover={{ color: "purple.300" }}
        >
          <Image
            src={`${gitHub}`}
            bgColor="white"
            borderRadius="full"
            alt="Link para página no gitHub"
          />
          <Text as="p" _hover={{ color: "purple.300" }}>
            Julia-Teixeira
          </Text>
        </Center>
      </Link>
      <Link to="https://wa.me/5521990565179" target="_blank">
        <Center
          display="flex"
          flexDirection="column"
          _hover={{ color: "purple.300" }}
        >
          <Image
            src={`${whatsApp}`}
            bgColor="white"
            borderRadius="full"
            alt="Link para enviar mensagem no WhatsApp"
          />
          <Text as="p">(21) 9 9056-5179</Text>
        </Center>
      </Link>
      <Link
        to="https://www.linkedin.com/in/julia-pereira-teixeira/"
        target="_blank"
      >
        <Center
          display="flex"
          flexDirection="column"
          _hover={{ color: "purple.300" }}
        >
          <Image
            src={`${linkedIn}`}
            bgColor="white"
            borderRadius="full"
            alt="Link para página no LinkedIn"
          />
          <Text as="p">julia-pereira-teixeira</Text>
        </Center>
      </Link>
    </Flex>
    <Text as="p" fontSize={{ sm: "24px", md: "32px" }}>
      Sinta-se a vontade para entrar em contato!
    </Text>
  </Flex>
);

export default SocialMedia;
