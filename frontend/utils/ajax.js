import axios from "axios";

export const ajax = async (config) =>
  await axios
    .request(config)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => error);
