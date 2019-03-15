import axios from 'axios';
import {fetchCar} from "./fetchCar";

jest.mock('axios');

describe('fetchCar', () => {
    it('should fetch car details', () => {
        const car = { car: [ { name: 'Toyota' } ] };
        const resp = {data: car};
        const stockNumber = '12345';
        axios.get.mockResolvedValue(resp);
        return fetchCar(stockNumber).then(resp => expect(resp.data).toEqual(car));
    });
});
