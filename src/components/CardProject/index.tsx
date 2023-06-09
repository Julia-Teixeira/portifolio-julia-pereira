import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProjectsImg from "../../pages/Projects/projectsImg";
import vercel from "../../assets/vercel.png";
import gitHub from "../../assets/github.png";
import { animationCard } from "../../styles/animations";

interface iCardProject {
  link: string | undefined;
  name: string;
  id: number;
  language: string;
  desc: string | undefined;
  url: string;
}

const CardProject = ({ link, name, id, language, desc, url }: iCardProject) => {
  const img = ProjectsImg.find((project) => project.id === id);

  return (
    <GridItem
      id={id.toString()}
      color="white"
      border="1px solid"
      borderColor="purple.300"
      borderRadius="5px"
      width={{ sm: "100%", md: "fit-content" }}
      margin={{ sm: "0 auto" }}
      position="relative"
      _hover={{ ".infos": { display: "block" } }}
    >
      <Box
        w={{ sm: "100%", md: "300px" }}
        h={{ sm: "200px", md: "200px" }}
        objectFit="contain"
        position="relative"
        borderRadius="5px"
      >
        {img !== undefined ? (
          <Box
            bgImage={img.img}
            bgPosition="center"
            bgSize="cover"
            w="100%"
            h="100%"
            borderRadius="5px"
          />
        ) : (
          <Image
            borderRadius="5px"
            w="100%"
            h="100%"
            src="https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
          />
        )}
      </Box>
      <Flex
        width="100%"
        direction="column"
        gap={{ sm: "5px", md: "10px" }}
        display="none"
        className="infos"
        position="absolute"
        bottom="0"
        left="0"
        animation={animationCard}
        bgColor="#55087fd1"
        color="purple.100"
        borderRadius="0 0 5px 5px"
        padding="12px"
      >
        <Text>
          <strong>Nome:</strong> {name}
        </Text>
        <Text>
          <strong>Linguagem mais utilizada:</strong> {language}
        </Text>
        <Text>
          <strong>Descrição:</strong> {desc}
        </Text>

        <Flex gap="16px">
          <Text>
            <strong>Links:</strong>
          </Text>
          <Link to={url} target="_blank">
            <Box
              bgColor="white"
              borderRadius="full"
              w="50px"
              _hover={{ bgColor: "purple.300", transition: "ease-in 0.9s" }}
            >
              <Image src={gitHub} />
            </Box>
          </Link>

          {link === undefined ? (
            <Box
              bgColor="white"
              borderRadius="full"
              w="50px"
              cursor="not-allowed"
              _hover={{ bgColor: "purple.300", transition: "ease-in 0.9s" }}
            >
              <Image src={vercel} />
            </Box>
          ) : (
            <Link to={`${link}`} target="_blank">
              <Box
                bgColor="white"
                borderRadius="full"
                _hover={{ bgColor: "purple.300", transition: "ease-in 0.9s" }}
              >
                <Image src={vercel} w="50px" />
              </Box>
            </Link>
          )}
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default CardProject;
