import { Box, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Resume = () => {
  return (
    <>
      <Header page="Currículo" />
      <Box bgColor="rgba(0,0,0,.5)" color="white" padding="20px 0">
        <Box
          w="80%"
          h="100%"
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
            Currículo
          </Text>

          <Center display="flex" flexDirection="column">
            <Link to="https://drive.google.com/uc?export=download&id=1dPti0uQmCIBv3RZ9On2ZVfwZmx51QNCO">
              <Box
                as="button"
                w="200px"
                h="50px"
                bgColor="purple.800"
                fontSize={{ sm: "28px", md: "28px" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <AiOutlineCloudDownload />
                Download.pdf
              </Box>
            </Link>

            <iframe
              title="Currículo de Julia Pereira"
              width="800px"
              height="1500px"
              src="https://docs.google.com/document/d/e/2PACX-1vRVmXRMwoME60gOXbXrHb18ugFfLMIyr4-sy7B_l4DR6GG-mtu172lg3SnTF325wBWGN-LcQVa3lx7N/pub?embedded=true"
            ></iframe>
          </Center>
        </Box>
      </Box>
      <Footer page="Currículo" />
    </>
  );
};

export default Resume;
