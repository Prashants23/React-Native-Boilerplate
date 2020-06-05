import React from 'react';
import {combineReducers} from 'redux';
import AppReducer from './ActionReducer';

const appReducer = combineReducers({dataState: AppReducer});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
