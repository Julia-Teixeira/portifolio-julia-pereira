import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import MenuText from "../MenuText";
interface iMenuProps {
  isOpen: boolean;
  onClose: () => void;
  page: string;
}
const MenuHeader = ({ isOpen, onClose, page }: iMenuProps) => {
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt="9vh" display={{ sm: "block", md: "none" }} />
      <DrawerContent
        w="130px"
        h="200px"
        borderRadius="8px"
        ml="auto"
        mt="63px"
        bgColor="rgba(0,0,0,.5)"
      >
        <DrawerBody>
          <Flex
            gap="15px"
            align="center"
            direction="column"
            _hover={{ cursor: "pointer" }}
          >
            <MenuText name="Home" route="/" page={page} size="xl" />
            <MenuText
              name="Hard Skills"
              route="/hardSkills"
              page={page}
              size="xl"
            />
            <MenuText name="Projetos" route="/projects" page={page} size="xl" />
            <MenuText name="Currículo" route="/resume" page={page} size="xl" />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuHeader;
