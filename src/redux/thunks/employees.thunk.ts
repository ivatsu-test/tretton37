/* eslint-disable import/prefer-default-export */
import { API_TOKEN } from '../../constants/api';
import { EMPLOYEES_ROUTE } from '../../constants/apiRoutes';
import { getEmployees } from '../../services/api';
import { ActionTypeKeys } from '../actionTypes';
import { TAppDispatch } from '../reduxTypes';

export const getEmployeesThunk = () => async (dispatch: TAppDispatch) => {
  getEmployees(EMPLOYEES_ROUTE, API_TOKEN)
    .then((response) => {
      dispatch({
        type: ActionTypeKeys.SET_EMPLOYEES,
        payload: response.data,
      });
    });
};
