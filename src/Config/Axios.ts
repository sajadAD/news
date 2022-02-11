import axios from "axios";

export const Axios = axios.create({
    baseURL: 'https://newsapi.org',
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

