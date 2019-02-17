import axios from 'axios';

export const getAccount = async(req) => {
    return await axios.get('http://localhost:3000/').then(response => response.data);
}