export const API_URL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:8000/api";

export const IMGS_URL =
  process.env.NODE_ENV === "production"
    ? "/public"
    : "http://localhost:8000/public";
