import { Center, Flex, Text, useDisclosure } from "@chakra-ui/react";
import MenuText from "../MenuText";
import MenuHeader from "./menuHeader";
import { AiOutlineMenu } from "react-icons/ai";
import background2 from "../../assets/background2.png";

interface iHome {
  page: string;
}

const Header = ({ page }: iHome) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w="100%"
      h="6.3125rem"
      bgImage={`linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.9)),url(${background2})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w="80%"
        h="6.5625rem"
        margin="0 auto"
        alignItems="center"
        justifyContent="space-between"
        bgImage={`linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.9)),url(${background2})`}
      >
        <Text
          as="h1"
          textTransform="uppercase"
          color="white"
          w="120px"
          h="58px"
          fontSize="4xl"
          lineHeight="1.6819rem"
        >
          Julia Pereira
        </Text>

        <Flex gap="2.8125rem" display={{ sm: "none", md: "flex" }}>
          <MenuText name="Home" route="/" page={page} size="2xl" />
          <MenuText
            name="Hard Skills"
            route="/hardSkills"
            page={page}
            size="2xl"
          />
          <MenuText name="Projetos" route="/projects" page={page} size="2xl" />
          <MenuText name="Currículo" route="/resume" page={page} size="2xl" />
        </Flex>

        <Center
          ml="auto"
          onClick={() => onOpen()}
          as="button"
          fontSize="2rem"
          display={{ sm: "block", md: "none" }}
        >
          <AiOutlineMenu color="white" />
        </Center>
        <MenuHeader isOpen={isOpen} onClose={onClose} page={page} />
      </Flex>
    </Flex>
  );
};

export default Header;
