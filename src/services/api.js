import axios from 'axios';

export default axios.create({
    baseURL: 'https://thankful-robe.cyclic.app',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});