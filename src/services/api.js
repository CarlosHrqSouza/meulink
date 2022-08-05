import axios from 'axios';

export const key = "e7334baa66670b2a0359a6fb1faf213e56d10a3b";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;
