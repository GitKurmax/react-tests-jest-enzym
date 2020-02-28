import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('Expect to render Card component', () => {
    expect(shallow(<Card/>)).toMatchSnapshot();
})

it('Loocking for divs', () => {
    const wrapper = shallow(<Card/>);
    
    expect(wrapper.find('div').length).toEqual(2);
})

