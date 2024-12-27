import axios from "axios";

const API = axios.create({
    // baseURL: "http://localhost:8000/api/v1",
    baseURL: "https://init-website-backend.vercel.app/api/",
});

export default API;