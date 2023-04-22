import { Box, Center, Text } from "@chakra-ui/react";
import CardTech from "../../components/CardTech";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { animationPage } from "../../styles/animations";
import skills from "./skills";

const Skills = () => {
  return (
    <>
      <Header page="Hard Skills" />
      <Box
        bgColor="rgba(0,0,0,.5)"
        color="white"
        padding="20px 0"
        animation={animationPage}
      >
        <Box
          w="80%"
          h={{ sm: "100%", "2xl": "80vh" }}
          margin="0 auto"
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap="16px"
        >
          <Text
            as="h1"
            textTransform="uppercase"
            fontSize={{ sm: "28px", md: "40px" }}
            lineHeight="2.6819rem"
            textAlign="center"
          >
            Hard Skills
          </Text>
          <Center display="flex" flexWrap="wrap" gap="30px">
            {skills.map(({ name, img }) => (
              <CardTech name={name} img={img} key={name} />
            ))}
          </Center>
        </Box>
      </Box>
      <Footer page="Hard Skills" />
    </>
  );
};

export default Skills;
