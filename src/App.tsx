import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { Box } from "@chakra-ui/react";

const App = () => (
  <Box
    as="main"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    backgroundImage="linear-gradient(rgba(0,0,0,1),rgba(0,0,0,.8)), url('src/assets/background.png')"
    w="100%"
    overflowY="auto"
    sx={{
      "::-webkit-scrollbar": {
        width: "10px",
      },
      "::-webkit-scrollbar-track": {
        width: "6px",
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        background: `rgba(0,0,0,.5)`,
      },
    }}
    scrollBehavior="smooth"
  >
    <RouterProvider router={router} />
  </Box>
);
export default App;
