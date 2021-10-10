import axios from "axios";

export const api = axios.create({
    baseURL: '/api/',
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
    }
});