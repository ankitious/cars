import axios from 'axios';

const CAR_ENDPOINT = '/cars';

export function fetchCar(stockNumber) {
    return axios.get(`${CAR_ENDPOINT}/${stockNumber}`);
}
