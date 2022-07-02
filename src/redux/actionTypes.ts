import { TEmployee } from '../components/EmployeeCard/EmployeeCard';

export enum ActionTypeKeys {
  SET_EMPLOYEES = 'SET_EMPLOYEES',
}

export type TSetEmployeesAction = {
  type: ActionTypeKeys.SET_EMPLOYEES,
  payload: TEmployee[]
}
