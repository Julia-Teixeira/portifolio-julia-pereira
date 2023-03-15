import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface iMenu {
  name: string;
  route: string;
  page: string;
  size: string;
}

const MenuText = ({ name, route, page, size }: iMenu) => {
  const navigate = useNavigate();
  return page === name ? (
    <Text
      color="white"
      fontSize={size}
      as="p"
      cursor="pointer"
      onClick={() => navigate(`${route}`)}
      borderBottom="2px"
    >
      {name}
    </Text>
  ) : (
    <Text
      color="white"
      fontSize={size}
      as="p"
      cursor="pointer"
      onClick={() => navigate(`${route}`)}
    >
      {name}
    </Text>
  );
};

export default MenuText;
