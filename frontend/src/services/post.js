import { ajax } from "../../utils/ajax";

const token = localStorage.getItem("token");

export const createPostWithMultimedia = async (data) => {
  const config = {
    method: "POST",
    url: "http://localhost:3000/crear-publicacion",
    withCredentials: true,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return await ajax(config);
};

export const createPostWithOutMultimedia = async (data) => {
  const config = {
    method: "POST",
    url: "http://localhost:3000/postear",
    withCredentials: true,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return await ajax(config);
};

export const getAllPosts = async () => {
  const config = {
    method: "GET",
    url: "http://localhost:3000/publicaciones",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return await ajax(config);
};
