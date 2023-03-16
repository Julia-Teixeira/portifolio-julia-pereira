import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../styles/theme";
import { ReposProvider } from "./RepositoriesContext";

interface iAppProviderProps {
  children: ReactNode;
}
export const AppProvider = ({ children }: iAppProviderProps) => (
  <ChakraProvider theme={theme}>
    <ReposProvider>{children}</ReposProvider>
  </ChakraProvider>
);
