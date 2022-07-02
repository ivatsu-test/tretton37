/* eslint-disable react/no-danger */
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EmployeeImage from '../components/EmployeeImage/EmployeeImage';

import { TSelectEmployees, selectEmployees } from '../redux/selectors/employees.selector';
import { hyphenate } from '../util/strings';

function EmployeeSummary() {
  const params = useParams();
  const employees = useSelector((state: TSelectEmployees) => selectEmployees(state));
  const employee = useMemo(
    () => employees?.filter((item) => hyphenate(item.name) === params.name)[0],
    [employees, params.name],
  );

  return (
    <section className="c-employee-card">
      {employee.imageWallOfLeetUrl && (
        <EmployeeImage src={employee.imageWallOfLeetUrl} name={employee.name} />
      )}
      <h1>{employee.name}</h1>
      {employee.mainText && (
        <p dangerouslySetInnerHTML={{ __html: employee.mainText }} />
      )}
    </section>
  );
}

export default EmployeeSummary;
