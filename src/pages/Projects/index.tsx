import { Box, Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import CardProject from "../../components/CardProject";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReposContext } from "../../providers/RepositoriesContext";

const style = {
  width: "300px",
  height: "200px",
};

const Projects = () => {
  const { repos, getRepos } = useContext(ReposContext);

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      <Header page="Projetos" />
      <Box
        w="80%"
        h="100%"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        gap="20px"
      >
        <Text
          as="h1"
          color="white"
          textAlign="center"
          textTransform="uppercase"
          fontSize={{ sm: "28px", md: "40px" }}
          lineHeight="2.6819rem"
        >
          Projetos
        </Text>
        <Flex wrap="wrap" gap="20px" marginBottom="20px">
          {repos
            .filter(
              (repo) =>
                repo.id !== 492552526 &&
                repo.id !== 590133324 &&
                repo.id !== 590726604 &&
                repo.id !== 588674297 &&
                repo.id !== 600891933 &&
                repo.id !== 589109032 &&
                repo.id !== 588793309
            )
            .map(({ id, name, language, homepage, description, html_url }) => {
              return (
                <CardProject
                  id={id}
                  language={language!}
                  link={homepage ? homepage : undefined}
                  name={name}
                  key={id}
                  desc={description}
                  url={html_url}
                />
              );
            })}
        </Flex>
      </Box>
      <Footer page="Projetos" />
    </>
  );
};

export default Projects;
