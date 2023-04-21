import { Box, Grid, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import CardProject from "../../components/CardProject";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReposContext } from "../../providers/RepositoriesContext";
import { animationDot, animationPage } from "../../styles/animations";
import { iResponseRepo } from "../../providers/RepositoriesContext/interfaces";

const Projects = () => {
  const { repos, getRepos, loading } = useContext(ReposContext);

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      <Header page="Projetos" />
      <Box
        w="80%"
        h={loading ? "80vh" : "100%"}
        margin="0 auto"
        display="flex"
        flexDirection="column"
        gap="20px"
        animation={animationPage}
      >
        <Text
          as="h1"
          color="white"
          textAlign="center"
          textTransform="uppercase"
          fontSize={{ sm: "28px", md: "40px" }}
          lineHeight="2.6819rem"
          mt={"20px"}
        >
          Projetos
        </Text>
        {loading ? (
          <Text
            display="flex"
            gap="20px"
            alignItems="center"
            justifyContent="center"
            as="h3"
            color="white"
            fontSize={{ sm: "24px", md: "32px" }}
            lineHeight="2.6819rem"
          >
            Carregando os projetos{"  "}
            <Box
              w="2px"
              h="2px"
              color="#56087F"
              borderRadius="50%"
              boxShadow="9.5px 0 0 3.5px, 19px 0 0 1.5px, 28.5px 0 0 0"
              transform="translateX(-19px)"
              animation={animationDot}
            />
          </Text>
        ) : (
          <Grid
            marginBottom="20px"
            templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }}
            gap="20px"
          >
            {repos
              .filter(
                (repo: iResponseRepo) =>
                  repo.id !== 492552526 &&
                  repo.id !== 590133324 &&
                  repo.id !== 590726604 &&
                  repo.id !== 588674297 &&
                  repo.id !== 600891933 &&
                  repo.id !== 589109032 &&
                  repo.id !== 588793309
              )
              .map(
                ({ id, name, language, homepage, description, html_url }) => {
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
                }
              )}
          </Grid>
        )}
      </Box>
      <Footer page="Projetos" />
    </>
  );
};

export default Projects;
