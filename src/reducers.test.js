import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
    it('should return initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
    })

    it('should handle CHANGE_SEARCHFIELD event', () => {
        expect(reducers.searchRobots(undefined, {type: CHANGE_SEARCHFIELD, payload: 'a'})).toEqual({searchField: 'a'})
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
      }

    it('should return initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots )
    })

    it('should handle REQUEST_ROBOTS_PENDING event', () => {
        expect(reducers.requestRobots(initialStateRobots, {type: REQUEST_ROBOTS_PENDING})).toEqual({
            robots: [],
            isPending: true
          })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS event', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [] 
        })).toEqual({
            robots: [],
            isPending: false
          })
    })

    it('should handle  REQUEST_ROBOTS_FAILED event', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type:  REQUEST_ROBOTS_FAILED,
            payload: "Some error" 
        })).toEqual({
            robots: [],
            isPending: false,
            error: "Some error"
          })
    })
})