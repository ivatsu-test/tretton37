import { createSelector } from 'reselect';
import { TApplicationState } from '../store';

export type TSelectEmployees = {
  employees: TApplicationState
}

export const selectEmployees = (state: TSelectEmployees) => state.employees.employees;
export const selectEmployeesOffices = createSelector(
  selectEmployees,
  (employees) => [
    ...new Set(
      employees
        ?.filter((employee) => employee.office)
        .map((employee) => employee.office),
    ),
  ],
);
