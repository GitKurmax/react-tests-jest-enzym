import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps}/>)
});

it("Renders MainPage without crashes", () => {
    expect(wrapper).toMatchSnapshot();
})

it("Filters robots correctly", () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: "John",
            email: "john@gmail.com"
        }],
        searchField: 'a',
        isPending: false
    }

    let wrapper2 = shallow(<MainPage {...mockProps2}/>)

    expect(wrapper.instance().filteredRobots()).toEqual([]);
    expect(wrapper2.instance().filteredRobots()).toEqual([]);
})

it("Filters robots correctly 2", () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: "John",
            email: "john@gmail.com"
        }],
        searchField: 'a',
        isPending: false
    }

    const filteredRobots = [];
    let wrapper3 = shallow(<MainPage {...mockProps3}/>)

    expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
})

it("Is panding true", () => {
    const mockProps4 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: "John",
            email: "john@gmail.com"
        }],
        searchField: 'a',
        isPending: true
    }

    let wrapper4 = shallow(<MainPage {...mockProps4}/>)

    expect(wrapper4.render().find('.loading').length).toEqual(1);
})


