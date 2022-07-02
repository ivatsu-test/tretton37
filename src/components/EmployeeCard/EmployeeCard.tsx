export type TEmployee = {
  name: string
}

export type TEmployeeCard = {
  employee : TEmployee
}

function EmployeeCard({ employee }: TEmployeeCard) {
  return (
    <section className="c-employee-card">
      <h2>{employee.name}</h2>
    </section>
  );
}

export default EmployeeCard;
