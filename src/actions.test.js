import * as actions from './actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { apiCall } from './api/api'

import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

const mockStore = configureStore([thunk]);

it('should create an action for search robots', () => {
    const text = 'woo';
    const expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction) 
})

it('handle requesting robots Api', async () => {
    const store = mockStore();
    
    await store.dispatch(actions.requestRobots());

    const data = await apiCall('https://jsonplaceholder.typicode.com/users');
    
    const action = store.getActions();

    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
    }

    const expectedActionSuccess = {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data
    }
    
    expect(action[0]).toEqual(expectedAction)
    expect(action[1]).toEqual(expectedActionSuccess) 
})
