import axios from 'axios';
import {fetchCars} from "./fetchCars";

jest.mock('axios');

describe('fetchCars', () => {
    it('should fetch cars', () => {
        const cars = { cars: [ { name: 'Toyota' } , { name : "Honda"}] };
        const resp = {data: cars};
        const params = "color=red";
        axios.get.mockResolvedValue(resp);
        return fetchCars(params).then(resp => expect(resp.data).toEqual(cars));
    });
});
