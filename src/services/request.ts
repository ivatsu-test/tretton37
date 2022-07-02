import axios from 'axios';

import { API_URL } from '../constants/api';

const client = axios.create({
  baseURL: API_URL,
});

const request = async (options: {}) => {
  const onSuccess = (response: {}) => {
    console.debug('Request successfull:', response);
    return response;
  };

  const onError = (error: {
    config: {};
    response: { status: string; data: {}; headers: {} };
    message: string;
  }) => {
    console.debug('Request failed:', error.config);

    if (error.response) {
      console.debug('Status:', error.response.status);
      console.debug('Data:', error.response.data);
      console.debug('Headers:', error.response.headers);
    } else {
      // log message if it wasn't based on the response
      console.debug('Error Message:', error.message);
    }

    return error.response || error.message;
  };

  const response = await client(options)
    .then(onSuccess)
    .catch(onError);

  return response;
};

export default request;
