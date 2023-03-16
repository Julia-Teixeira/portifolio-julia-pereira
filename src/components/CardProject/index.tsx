import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProjectsImg from "../../pages/Projects/projectsImg";

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
    <Flex id={id.toString()} color="white" gap="16px">
      <Link to={`${link}`} target="_blank">
        <Box
          cursor="pointer"
          w="300px"
          h="200px"
          objectFit="contain"
          position="relative"
        >
          {img !== undefined ? (
            <Box
              bgImage={img.img}
              bgPosition="center"
              bgSize="cover"
              w="100%"
              h="100%"
            />
          ) : (
            <Image src="https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=" />
          )}
        </Box>
      </Link>
      <Flex direction="column" gap="16px">
        <Text>Nome: {name}</Text>
        <Text>Linguagem mais utilizada: {language}</Text>
        <Text>Descrição: {desc}</Text>
        <Link to={url} target="_blank">
          Link do repositório
        </Link>
        <Link to={`${link}`} target="_blank">
          Link do deploy
        </Link>
      </Flex>
    </Flex>
  );
};

export default CardProject;
