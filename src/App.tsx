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
    h="100%"
  >
    <RouterProvider router={router} />
  </Box>
);
export default App;
