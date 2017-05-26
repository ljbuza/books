import React from 'react';
import MainNav from 'MainNav';
import { mount } from 'enzyme';

describe('MainNav', () => {
    it('renders without crashing', () => {
        mount(<MainNav/>);
    });
});
