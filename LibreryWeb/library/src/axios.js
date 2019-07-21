import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:51826/'
});

export default instance;