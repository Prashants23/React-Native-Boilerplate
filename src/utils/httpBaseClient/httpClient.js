// import React from 'react';
import axios from 'axios';
import {BASE_URL} from './url';


export const instance0auth = axios.create({
  baseUrl: BASE_URL,
});

export const instanceWithAuth = axios.create({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    offset: new Date().getTimezoneOffset(),
  },
});

export const instanceWithoutAuth = axios.create({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default class HttpBaseClient {
  // get method are used to access the get request Api Call
  // *@param {*} url only end point
  // *@param {*} params
  // *@param {*} auth 0 =without WebAuthentication, 1=with authentication

  static get(url, auth = 0, params = {}) {
    return new Promise((resolve, reject) => {
      const config = {params};
      let instance = instanceWithoutAuth;
      if (auth === 1) {
        instance = instanceWithAuth;
      }
      console.log('::::::::::::::::GET::::::::::input--: ', url, params);
      instance
        .get(url, config)
        .then(response => {
          console.log(
            '::::::::::::::GET::::::::::::Response--: ',
            url,
            response,
          );
          return resolve(response.data);
        })
        .catch(error => {
          console.log(
            '::::::::::::GET::::::::::::error???---: ',
            url,
            error.message,
            error.response,
          );
          return reject(this.catchErrorHandler(error.message));
        });
    });
  }

  // Post method are used to access the get request Api Call
  // *@param {*} url only end point
  // *@param {*} data
  // *@param {*} auth 0 =without WebAuthentication, 1=with authentication

  static post(url, data = {}, auth = 0, params = {}) {
    return new Promise((resolve, reject) => {
      const config = {params};
      let instance = instanceWithoutAuth;
      if (auth === 1) {
        instance = instanceWithAuth;
      }
      console.log('::::::::::::::::Post::::::::::input--: ', url, data);
      instance
        .post(url, data, config)
        .then(response => {
          console.log(
            '::::::::::::::POST::::::::::::Response--: ',
            url,
            response,
          );
          if (response.data.responseCode === 401) {
            return reject(this.catchErrorHandler(response.data.responseCode));
          } else {
            return resolve(response.data);
          }
        })
        .catch(error => {
          console.log(
            '::::::::::::POST::::::::::::error???---: ',
            url,
            error,
            error.message,
            error.response,
          );
          return reject(this.catchErrorHandler(error.message));
        });
    });
  }

  // PUT method are used to put request Api Call
  

  static put(url, data = {}, auth = 0, params = {}) {
    return new Promise((resolve, reject) => {
      const config = {params};
      let instance = instanceWithoutAuth;
      if (auth === 1) {
        instance = instanceWithAuth;
      }
      console.log('::::::::::::::::PUT::::::::::input--: ', url, data);
      instance
        .put(url, data, config)
        .then(response => {
          console.log(
            '::::::::::::::PUT::::::::::::Response--: ',
            url,
            response,
          );
          if (response.data.responseCode === 401) {
            return reject(this.catchErrorHandler(response.data.responseCode));
          } else {
            return resolve(response.data);
          }
        })
        .catch(error => {
          console.log(
            '::::::::::::PUT::::::::::::error???---: ',
            url,
            error,
            error.message,
            error.response,
          );
          return reject(this.catchErrorHandler(error.message));
        });
    });
  }

  // delete method is used to delete Api Call
  // *@param {*} url only end point
  // *@param {*} data
  // *@param {*} auth 0 =without WebAuthentication, 1=with authentication


  static delete(url, data = {}, auth = 0, params = {}) {
    return new Promise((resolve, reject) => {
      const config = {params, data};
      let instance = instanceWithoutAuth;
      if (auth === 1) {
        instance = instanceWithAuth;
      }
      console.log('::::::::::::::::DELETE::::::::::input--: ', url, data);
      instance
        .delete(url, config)
        .then(response => {
          if (
            response.data.responseCode === 401 ||
            response.data.responseCode === 404
          ) {
            reject(this.catchErrorHandler(response.data.responseCode));
          } else {
            console.log(
              '::::::::::::::DELETE::::::::::::Response--: ',
              url,
              response,
            );
            resolve(response.data);
          }
        })
        .catch(error => {
          console.log(
            '::::::::::::DELETE::::::::::::error???---: ',
            url,
            error,
            error.message,
            error.response,
          );
          return reject(this.catchErrorHandler(error.message));
        });
    });
  }

  static catchErrorHandler(error) {
    let errorMessage = error;
    if (error === undefined || error === 400 || error === 401) {
      error = '401';
    }
    if (error === 404) {
      error = '404';
    }
    console.log(
      '::::::::::::::::CatchErrorHandler::::::::::::::::Error:',
      error,
    );
    if (
      error.includes('Error:Network Error') ||
      error.includes('Error: Request failed with status code:500')
    ) {
      console.log('----if----', error);
      console.log('Sorry we have some temporary server issue');
    } else if (error.includes('401')) {
      console.log('else if 401');
    } else {
      console.log('sorry we have some temporary issue');
    }
    console.log('-----errorMessage----', errorMessage);
    return errorMessage;
  }
}
