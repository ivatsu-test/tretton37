import { TEmployee } from '../components/EmployeeCard/EmployeeCard';

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export const sortByEmployeeName = (employees: TEmployee[], order: SortOrder) => {
  switch (order) {
    case SortOrder.ASC:
      return [...employees]?.sort(
        (employeePrevious, employeeNext) => (employeePrevious.name < employeeNext.name ? -1 : 1),
      );
    case SortOrder.DESC:
      return [...employees]?.sort(
        (employeePrevious, employeeNext) => (employeePrevious.name > employeeNext.name ? -1 : 1),
      );
    default:
      return employees;
  }
};

export const sortByEmployeeOffice = (employees: TEmployee[], order: SortOrder) => {
  switch (order) {
    case SortOrder.ASC:
      return [...employees]?.sort(
        (employeePrevious, employeeNext) => (
          employeePrevious.office < employeeNext.office ? -1 : 1
        ),
      );
    case SortOrder.DESC:
      return [...employees]?.sort(
        (employeePrevious, employeeNext) => (
          employeePrevious.office > employeeNext.office ? -1 : 1
        ),
      );
    default:
      return employees;
  }
};
