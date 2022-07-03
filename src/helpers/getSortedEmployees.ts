import { TEmployee } from '../components/EmployeeCard/EmployeeCard';
import { sortByEmployeeName, sortByEmployeeOffice, SortOrder } from '../util/arrays';

/**
 * Helper function:
 *  - sorts employees array according to the selected sort values
 *  - resets sort to the initial employees
 */
const getSortedEmployees = (
  currentEmployees: TEmployee[],
  isNameSort: boolean,
  isOfficeSort: boolean,
  isAscOrder: boolean,
  isDescOrder: boolean,
  isClearSort: boolean,
) => {
  if (isNameSort && isAscOrder) {
    return sortByEmployeeName(currentEmployees, SortOrder.ASC);
  }
  if (isNameSort && isDescOrder) {
    return sortByEmployeeName(currentEmployees, SortOrder.DESC);
  }
  if (isOfficeSort && isAscOrder) {
    return sortByEmployeeOffice(currentEmployees, SortOrder.ASC);
  }
  if (isOfficeSort && isDescOrder) {
    return sortByEmployeeOffice(currentEmployees, SortOrder.DESC);
  }
  if (isClearSort) {
    return currentEmployees;
  }
  return currentEmployees;
};

export default getSortedEmployees;
