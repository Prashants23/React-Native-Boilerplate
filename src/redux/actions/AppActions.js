import HttpBaseClient from '../../utils/httpBaseClient/httpClient';
import {Action_True} from './Types';

import {BASE_URL} from '../../utils/httpBaseClient/url';

export const getNewsList = (callback = () => {}) => {
  console.log('URL IN getNewsList: ', BASE_URL);
  return dispatch => {
    return HttpBaseClient.get(BASE_URL)
      .then(response => {
        console.log('response', response);
        console.log('responseStatus:', response.status);
        // if (response.status === 'ok') {
        console.log('inside Ok');
        callback(true, response);
        let originalResponse = response;
        dispatch({type: Action_True, payload: originalResponse});
        console.log('array response', originalResponse);
        // } else {
        //   callback(false, 'somethingWrong');
      })
      .catch(error => {
        console.log('++++News List++++');
      });
  };
};
