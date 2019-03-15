import axios from 'axios';

const CARS_ENDPOINT = '/cars';

export const fetchCars = params => axios.get(`${CARS_ENDPOINT}?${params}`);
