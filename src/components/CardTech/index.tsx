import { Box, Image, Text } from "@chakra-ui/react";

interface iCardTech {
  name: string;
  img: string;
}
const CardTech = ({ name, img }: iCardTech) => (
  <Box>
    <Image src={`${img}`} alt={name} h="140px" w="140px" />
    <Text textAlign="center" fontSize={{ sm: "24px", md: "27px" }}>
      {name}
    </Text>
  </Box>
);

export default CardTech;
