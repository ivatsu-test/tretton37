import EmployeeCard, { TEmployee } from '../EmployeeCard/EmployeeCard';

type TEmployeesCards = {
  employees: TEmployee[]
}

function EmployeesCards({ employees }: TEmployeesCards) {
  return (
    <article className="c-employees-cards">
      {employees?.map((employee: TEmployee) => (
        <EmployeeCard key={employee.name} employee={employee} />
      ))}
    </article>
  );
}

export default EmployeesCards;
