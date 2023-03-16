import { Box, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReposContext } from "../../providers/RepositoriesContext";

const Projects = () => {
  const { repos, getRepos } = useContext(ReposContext);

  useEffect(() => {
    getRepos();
  }, []);

  console.log(repos);
  return (
    <>
      <Header page="Projetos" />
      <h1>Página Projects</h1>
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
        .map(({ id, name, language, homepage }) => {
          return (
            <Box key={id} color="white">
              <Text as="h2">{name}</Text>
              <p>Linguagem mais utilizada: {language}</p>
              {homepage !== null ? (
                <Link to={`${homepage}`}>Vercel</Link>
              ) : (
                <Text>Sem link</Text>
              )}
            </Box>
          );
        })}
      <Footer page="Projetos" />
    </>
  );
};

export default Projects;
