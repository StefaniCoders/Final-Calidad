import { ajax } from "../../utils/ajax.js";

export const getDataUser = async ({ token }) => {
  const config = {
    method: "GET",
    url: "http://localhost:3000/get-data-user",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return await ajax(config);
};

export const getImgPerfil = async ({ token }) => {
  const config = {
    method: "GET",
    url: "http://localhost:3000/get-img-perfil",
    withCredentials: true,
    responseType: "arraybuffer",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await ajax(config);
};
