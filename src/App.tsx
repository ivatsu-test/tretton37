import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EmployeesCards } from './components';

import { selectEmployees, TSelectEmployees } from './redux/selectors/employees.selector';
import { getEmployeesThunk } from './redux/thunks/employees.thunk';
import { TDispatch } from './redux/reduxTypes';
import './App.css';

function App() {
  const dispatch = useDispatch<TDispatch>();

  const employees = useSelector((state: TSelectEmployees) => selectEmployees(state));

  useEffect(() => {
    dispatch(getEmployeesThunk());
  }, [dispatch]);

  return employees
    ? <EmployeesCards employees={employees} /> : null;
}

export default App;
