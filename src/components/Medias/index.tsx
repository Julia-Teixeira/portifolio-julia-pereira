import { Center, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import gitHub from "../../assets/github.png";
import whatsApp from "../../assets/whatsApp.png";
import telegram from "../../assets/telegram.png";
import linkedIn from "../../assets/linkedIn.png";

const Medias = () => (
  <Center display="flex" gap={{ sm: "5px", md: "10px" }}>
    <Link to="https://github.com/Julia-Teixeira" target="_blank">
      <Image
        src={`${gitHub}`}
        bgColor="white"
        borderRadius="full"
        alt="Link para página no gitHub"
      />
    </Link>
    <Link to="https://wa.me/5521990565179" target="_blank">
      <Image
        src={`${whatsApp}`}
        bgColor="white"
        borderRadius="full"
        alt="Link para enviar mensagem no WhatsApp"
      />
    </Link>
    <Link to="https://t.me/juliapereirat" target="_blank">
      <Image
        src={`${telegram}`}
        bgColor="white"
        borderRadius="full"
        alt="Link para enviar mensagem no Telegram"
      />
    </Link>
    <Link
      to="https://www.linkedin.com/in/julia-pereira-teixeira/"
      target="_blank"
    >
      <Image
        src={`${linkedIn}`}
        bgColor="white"
        borderRadius="full"
        alt="Link para página no LinkedIn"
      />
    </Link>
  </Center>
);

export default Medias;
