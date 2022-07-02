/* eslint-disable import/prefer-default-export */
import { API_URL } from '../constants/api';
import request from './request';

// TODO: properly Type the Promise
export const getEmployees = async (route: string, token: string | undefined): Promise<any> => {
  const response = request({
    url: `${API_URL}/${route}`,
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });
  return response;
};
