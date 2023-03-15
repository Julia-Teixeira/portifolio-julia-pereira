import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import WavingHand from "../../components/WavingHang";
import background1 from "../../assets/background1.png";
import Footer from "../../components/Footer";
import SocialMedia from "../../components/SocialMedias";
import gatinhoFeliz from "../../assets/gatinhoFeliz.png";
import joyStick from "../../assets/joystick.png";
import programacao from "../../assets/programacao.png";

const Home = () => {
  return (
    <>
      <Header page="Home" />
      <Box
        bgImage={`${background1}`}
        bgSize="cover"
        bgPosition="center"
        h="625px"
      >
        <Box
          w="80%"
          h="100%"
          margin="0 auto"
          display="flex"
          alignItems="center"
        >
          <Flex w="fit-content" direction="column" margin="0 auto">
            <Text
              color="white"
              fontSize={{ sm: "40px", md: "70px" }}
              display="flex"
              gap="1rem"
              alignItems="center"
              lineHeight="4.6819rem"
            >
              Olá! <WavingHand />
            </Text>
            <Text
              color="white"
              fontSize={{ sm: "40px", md: "70px" }}
              lineHeight="2.6819rem"
            >
              Me chamo Julia Pereira
            </Text>
            <Text
              color="white"
              fontSize={{ sm: "20px", md: "30px" }}
              lineHeight="2.6819rem"
            >
              Sou desenvolvedora Front End
            </Text>
          </Flex>
        </Box>
      </Box>

      <Box
        w="100%"
        h={{ sm: "40rem", md: "625px" }}
        bgColor="rgba(0,0,0,.5)"
        color="white"
      >
        <Flex
          w="80%"
          h={{ sm: "40rem", md: "25rem" }}
          margin="0 auto"
          justifyContent={{ sm: "center" }}
          direction="column"
        >
          <Text
            textTransform="uppercase"
            fontSize={{ sm: "28px", md: "40px" }}
            lineHeight="2.6819rem"
            textAlign="center"
          >
            Um pouco sobre mim
          </Text>

          <Flex
            mt="16px"
            direction="column"
            gap="16px"
            textAlign="justify"
            fontSize={{ sm: "24px", md: "32px" }}
            lineHeight="1.6819rem"
          >
            <Text>
              Olá! Eu sou a Julia Pereira e moro em Rio de Janeiro, Brasil.
              Desenvolvedora Web, especializada no desenvolvimento FrontEnd.
              Atualmente faço um curso na Kenzie de Desenvolvedor Web FullStack
              com previsão de conclusão em Julho/23.
            </Text>
            <Text>
              Uma desenvolvedora de software Front end apaixonada e amando o
              Back end. 🚀
            </Text>
            <Text>
              Tenho experiência em construir aplicações Web e Mobile com
              JavaScript, Reactjs, Nodejs, React Native e algumas outras
              bibliotecas legais.
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            mt="20px"
            fontSize={{ sm: "24px", md: "27px" }}
            direction="column"
          >
            <Flex as="div" w="250px" alignItems="center" gap="5px">
              <Image src={`${gatinhoFeliz}`} />
              <Text>Amante de gatos!</Text>
            </Flex>
            <Flex as="div" w="250px" alignItems="center" gap="5px">
              <Image src={`${joyStick}`} />
              <Text>Amante de jogos!</Text>
            </Flex>
            <Flex as="div" w="320px" alignItems="center" gap="5px">
              <Image src={`${programacao}`} />
              <Text>Amante da programação!</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <SocialMedia />
      <Footer />
    </>
  );
};

export default Home;
