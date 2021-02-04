import axios from 'axios';
import fetchToken from './fetchToken';

const BASE_URL = "https://anywherefitness2.herokuapp.com/";

export default function axiosWithAuth() {
    const token = fetchToken();
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: token
        }
    });
};




