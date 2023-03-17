import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import WavingHand from "../../components/WavingHang";
import background1 from "../../assets/background1.png";
import Footer from "../../components/Footer";
import SocialMedia from "../../components/SocialMedias";
import gatinhoFeliz from "../../assets/gatinhoFeliz.png";
import joyStick from "../../assets/joystick.png";
import programacao from "../../assets/programacao.png";
import { animationPage } from "../../styles/animations";

const Home = () => {
  return (
    <>
      <Header page="Home" />
      <Box
        bgImage={`${background1}`}
        bgSize="cover"
        bgPosition="center"
        h="625px"
        animation={animationPage}
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

      <Box w="100%" h="fit-content" bgColor="rgba(0,0,0,.5)" color="white">
        <Flex
          w="80%"
          margin="0 auto"
          padding={"20px 0"}
          justifyContent={{ sm: "center" }}
          direction="column"
          alignItems="center"
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
            w="80%"
          >
            <Text>
              Olá! Eu sou a Julia Pereira e moro em Rio de Janeiro, Brasil.
              Desenvolvedora Web FrontEnd, estudando o BackEnd.
            </Text>
            <Text>
              Minha paixão pela programação começou quando eu tinha 17 anos,
              nessa época fiz um curso técnico de Tecnologia da Informação pelo
              SENAI onde aprendi as linguagens Java e C#. Tive que adiar meus
              sonho por causa de alguns problemas familiares,daí no ano de 2019
              decidi retomar os estudos sobre a programação. Em 2022, concluí
              minha faculdade de Análise e desenvolvimento de sistemas, e
              comecei um curso na Kenzie Academy Brasil de Desenvolvedor
              FullStack, estou atualmente no quinto módulo (BackEnd).
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
      <Footer page="home" />
    </>
  );
};

export default Home;
