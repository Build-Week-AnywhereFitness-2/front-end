import axios from 'axios';
import fetchToken from './fetchToken';

const BASE_URL = "https://anywherefitness2.herokuapp.com/";

export async function fetchWhoAmI() {
    try {
        const token = fetchToken();
        const res = await axios.get(`${BASE_URL}api/auth/whoami`, { headers: { Authorization: token } });
        return res.data;
    } catch(err) {
        console.log(`An error occured in axiosWithAuth/fetchWhoAmI`);
    }
}

export default function axiosWithAuth() {
    const user = fetchWhoAmI();

    const token = fetchToken();
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: token,
            user: user
        }
    });
};




