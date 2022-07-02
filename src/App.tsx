import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { EmployeesCards } from './components';
import EmployeeSummary from './routes/EmployeeSummary';

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

  return (
    <Routes>
      <Route path="/" element={<EmployeesCards employees={employees} />} />
      <Route path="/employee/:name" element={<EmployeeSummary />} />
    </Routes>
  );
}

export default App;
