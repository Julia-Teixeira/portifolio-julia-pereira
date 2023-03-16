import axios from "axios";

const gitHub = axios.create({
  baseURL: "https://api.github.com/users/Julia-Teixeira",
});

export default gitHub;
