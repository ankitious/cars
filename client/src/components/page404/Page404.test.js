import React from 'react';
import { shallow } from 'enzyme';
import Page404 from './Page404';

describe('Footer Component', () => {
    it('renders Page404 without crashing', () => {
        expect(shallow(<Page404/>)).toBeDefined();
    });
});
