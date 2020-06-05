import React from 'react';
import {Action_True} from '../actions/Types';

export const initialState = {
  newsList: {},
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action_True:
      return {
        newsList: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
