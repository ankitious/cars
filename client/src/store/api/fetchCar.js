import axios from 'axios';

const CAR_ENDPOINT = '/cars';

export const fetchCar = stockNumber => axios.get(`${CAR_ENDPOINT}/${stockNumber}`);
