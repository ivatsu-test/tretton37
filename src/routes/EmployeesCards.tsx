import React, { useCallback, useState, useMemo } from 'react';
import Select from 'react-select';
import debounce from 'lodash.debounce';

import { useSelector } from 'react-redux';
import EmployeeCard, { TEmployee } from '../components/EmployeeCard/EmployeeCard';
import getSortedEmployees from '../helpers/getSortedEmployees';
import { filterByEmployeeName } from '../util/arrays';
import { selectEmployeesOffices, TSelectEmployees } from '../redux/selectors/employees.selector';

type TEmployeesCards = {
  employees: TEmployee[]
}

type TSelectedOffice = {
  value: string,
  label: string
}

function EmployeesCards({ employees }: TEmployeesCards) {
  const employeesOffices = useSelector((state: TSelectEmployees) => selectEmployeesOffices(state));

  const [isSort, setSort] = useState(false);
  const [isFilter, setFilter] = useState(false);

  const [isClearSortSelected, setClearSortSelected] = useState(false);
  const [isNameSortSelected, setNameSortSelected] = useState(false);
  const [isOfficeSortSelected, setOfficeSortSelected] = useState(false);
  const [isAscOrderSelected, setAscOrderSelected] = useState(false);
  const [isDescOrderSelected, setDescOrderSelected] = useState(false);

  const [isNameFilterSelected, setNameFilterSelected] = useState(false);
  const [isOfficeFilterSelected, setOfficeFilterSelected] = useState(false);
  const [employeesFilteredByName, setEmployeesFilteredByName] = useState<TEmployee[]>();

  const [officeFilterSelectedValue, setOfficeFilterSelectedValue] = useState();
  const [employeesFilteredByOffice, setEmployeesFilteredByOffice] = useState<TEmployee[]>();

  const employeesSortOutputMemoized = useMemo(
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedEmployeesByNameFilter = useCallback(
    debounce((query) => {
      setEmployeesFilteredByName(filterByEmployeeName(employees, query));
    }, 500),
    [],
  );

  const handleClearSort = () => {
    setClearSortSelected(true);
    setNameSortSelected(false);
    setOfficeSortSelected(false);
    setAscOrderSelected(false);
    setDescOrderSelected(false);
    setSort(false);
  };

  const handleClearFilter = () => {
    setNameFilterSelected(false);
    setOfficeFilterSelected(false);
    setFilter(false);
    debouncedEmployeesByNameFilter('');
  };

  const handleOnNameSort = () => {
    handleClearSort();
    handleClearFilter();
    setSort(true);
    setNameSortSelected(!isNameSortSelected);
  };

  const handleOnOfficeSort = () => {
    handleClearSort();
    handleClearFilter();
    setSort(true);
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

  const handleOnNameFilter = () => {
    handleClearSort();
    handleClearFilter();
    setFilter(true);
    setNameFilterSelected(!isNameFilterSelected);
  };

  const handleOnOfficeFilter = () => {
    handleClearSort();
    handleClearFilter();
    setFilter(true);
    setOfficeFilterSelected(!isOfficeFilterSelected);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedEmployeesByNameFilter(event.target.value);
  };

  const handleOfficeSelect = (selected: TSelectedOffice | any) => {
    setOfficeFilterSelectedValue(selected);
    setEmployeesFilteredByOffice(
      employees.filter((employee) => employee.office === selected?.label),
    );
  };

  const getEmployees = () => {
    if (isSort) {
      return employeesSortOutputMemoized;
    }
    if (isFilter && isNameFilterSelected) {
      return employeesFilteredByName;
    }
    if (isFilter && isOfficeFilterSelected) {
      return employeesFilteredByOffice;
    }
    return employees;
  };

  const createOfficesOptions = (): TSelectedOffice[] | any => employeesOffices.map((office) => ({
    value: office.toLowerCase(),
    label: office,
  }));

  return (
    <>
      <header className="l-container">
        <h1>The fellowship of the tretton37</h1>
        <section className="c-sort">
          <p className="c-sort__title">Sort by:</p>
          <button type="button" onClick={handleOnNameSort} className={`c-sort-button ${isNameSortSelected ? 'c-sort-button--selected' : ''}`}>Name</button>
          <button type="button" onClick={handleOnOfficeSort} className={`c-sort-button ${isOfficeSortSelected ? 'c-sort-button--selected' : ''}`}>Office</button>
          <button
            type="button"
            onClick={() => {
              handleClearSort();
              handleClearFilter();
            }}
            className="c-sort-button"
          >
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

        <section className="c-filter">
          <p className="c-filter__title">Filter by:</p>
          <button type="button" onClick={handleOnNameFilter} className={`c-filter-button ${isNameFilterSelected ? 'c-filter-button--selected' : ''}`}>Name</button>
          <button type="button" onClick={handleOnOfficeFilter} className={`c-filter-button ${isOfficeFilterSelected ? 'c-filter-button--selected' : ''}`}>Office</button>

          {isNameFilterSelected && (
            <div>
              <input type="search" placeholder="Search by name..." onChange={handleNameChange} />
            </div>
          )}

          {isOfficeFilterSelected && (
            <Select
              value={officeFilterSelectedValue}
              onChange={handleOfficeSelect}
              options={createOfficesOptions()}
            />
          )}
        </section>
      </header>

      <article className="l-container c-employees-cards">
        {getEmployees()?.map((employee: TEmployee) => (
          <EmployeeCard key={employee.name} employee={employee} />
        ))}
      </article>
    </>
  );
}

export default EmployeesCards;
