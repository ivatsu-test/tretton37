import {
  combineReducers, createStore, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import { TEmployee } from '../components/EmployeeCard/EmployeeCard';
import employeesReducer from './reducers/employees.reducer';

export type TApplicationState = {
  employees: TEmployee[]
}

export const rootReducer = combineReducers({
  employees: employeesReducer,
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk),
);
