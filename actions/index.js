import axios from 'axios';

const axiosInstance = axios.create({ 
    baseURL: 'http://localhost:3000/',
    timeout: 3000
})

export const createAccount = async (accountData) => {
    return await axiosInstance.post('/accounts', accountData).then(response => response.data)
}