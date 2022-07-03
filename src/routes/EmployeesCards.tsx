import { useState, useMemo } from 'react';

import EmployeeCard, { TEmployee } from '../components/EmployeeCard/EmployeeCard';
import getSortedEmployees from '../helpers/getSortedEmployees';

type TEmployeesCards = {
  employees: TEmployee[]
}

function EmployeesCards({ employees }: TEmployeesCards) {
  const [isClearSortSelected, setClearSortSelected] = useState(false);
  const [isNameSortSelected, setNameSortSelected] = useState(false);
  const [isOfficeSortSelected, setOfficeSortSelected] = useState(false);
  const [isAscOrderSelected, setAscOrderSelected] = useState(false);
  const [isDescOrderSelected, setDescOrderSelected] = useState(false);

  const employeesOutputMemoized = useMemo(
    () => getSortedEmployees(
      employees,
      isNameSortSelected,
      isOfficeSortSelected,
      isAscOrderSelected,
      isDescOrderSelected,
      isClearSortSelected,
    ),
    [
      employees,
      isNameSortSelected,
      isOfficeSortSelected,
      isAscOrderSelected,
      isDescOrderSelected,
      isClearSortSelected,
    ],
  );

  const handleClearSort = () => {
    setClearSortSelected(true);
    setNameSortSelected(false);
    setOfficeSortSelected(false);
    setAscOrderSelected(false);
    setDescOrderSelected(false);
  };

  const handleOnNameSort = () => {
    handleClearSort();
    setNameSortSelected(!isNameSortSelected);
  };

  const handleOnOfficeSort = () => {
    handleClearSort();
    setOfficeSortSelected(!isOfficeSortSelected);
  };

  const handleAscOrder = () => {
    setDescOrderSelected(false);
    setAscOrderSelected(!isAscOrderSelected);
  };

  const handleDescOrder = () => {
    setAscOrderSelected(false);
    setDescOrderSelected(!isDescOrderSelected);
  };

  return (
    <>
      <header className="l-container">
        <h1>The fellowship of the tretton37</h1>
        <section className="c-sort">
          <p className="c-sort__title">Sort by:</p>
          <button type="button" onClick={handleOnNameSort} className={`c-sort-button ${isNameSortSelected ? 'c-sort-button--selected' : ''}`}>Name</button>
          <button type="button" onClick={handleOnOfficeSort} className={`c-sort-button ${isOfficeSortSelected ? 'c-sort-button--selected' : ''}`}>Office</button>
          <button type="button" onClick={handleClearSort} className="c-sort-button">
            Clear
            {' '}
            <span aria-hidden="true">❌</span>
          </button>

          {(isNameSortSelected || isOfficeSortSelected) && (
            <>
              <p className="c-sort__order">Order:</p>
              <button type="button" onClick={handleAscOrder} className={`c-sort-button ${isAscOrderSelected ? 'c-sort-button--selected' : ''}`}>ASC</button>
              <button type="button" onClick={handleDescOrder} className={`c-sort-button ${isDescOrderSelected ? 'c-sort-button--selected' : ''}`}>DESC</button>
            </>
          )}
        </section>
      </header>

      <article className="l-container c-employees-cards">
        {employeesOutputMemoized?.map((employee: TEmployee) => (
          <EmployeeCard key={employee.name} employee={employee} />
        ))}
      </article>
    </>
  );
}

export default EmployeesCards;
