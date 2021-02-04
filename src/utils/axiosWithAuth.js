import axios from 'axios';

const BASE_URL = "https://anywherefitness2.herokuapp.com/";

export default function axiosWithAuth() {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        },
        baseURL: BASE_URL
    });
};




