import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7bf9368874e74bccb71b44e48fa6f8ab",
  },
});
