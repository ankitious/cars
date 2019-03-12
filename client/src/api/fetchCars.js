import axios from 'axios';

const CARS_ENDPOINT = '/cars';

export function fetchCars() {
    return axios.get(CARS_ENDPOINT);
}
