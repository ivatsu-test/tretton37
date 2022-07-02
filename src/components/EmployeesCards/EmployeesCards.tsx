import EmployeeCard, { TEmployee } from '../EmployeeCard/EmployeeCard';

type TEmployeesCards = {
  employees: TEmployee[]
}

function EmployeesCards({ employees }: TEmployeesCards) {
  return (
    <article className="c-employees-cards">
      {employees
        .filter((employee: TEmployee, idx: number) => idx < 8)
        .map((employee: TEmployee) => (
          <EmployeeCard key={employee.name} employee={employee} />
        ))}
    </article>
  );
}

export default EmployeesCards;
