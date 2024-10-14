export const API_URL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:64000/api";

export const IMGS_URL =
  process.env.NODE_ENV === "production"
    ? "https://mskcars.pl/img_content"
    : "http://localhost:64000/img_content";
