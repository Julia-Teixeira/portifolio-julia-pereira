import { Box, Image, Text } from "@chakra-ui/react";

interface iCardTech {
  name: string;
  img: string;
}
const CardTech = ({ name, img }: iCardTech) => (
  <Box
    borderRadius="15px"
    padding="10px"
    _hover={{
      bgColor: "purple.800",
      transition: "ease-in 0.9s",
      transform: "scale(1.1)",
    }}
  >
    <Image src={`${img}`} alt={name} h="140px" w="140px" title={name} />
    <Text textAlign="center" fontSize={{ sm: "24px", md: "27px" }}>
      {name}
    </Text>
  </Box>
);

export default CardTech;
