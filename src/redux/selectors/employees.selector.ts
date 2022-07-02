/* eslint-disable import/prefer-default-export */
import { TApplicationState } from '../store';

export type TSelectEmployees = {
  employees: TApplicationState
}

export const selectEmployees = (state: TSelectEmployees) => state.employees.employees;
