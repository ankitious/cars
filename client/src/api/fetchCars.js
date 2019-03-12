import axios from 'axios';

const CARS_ENDPOINT = '/cars';

export function fetchCars(params) {
    return axios.get(`${CARS_ENDPOINT}?${params}`);
}
