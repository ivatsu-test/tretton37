export type TEmployee = {
  name: string
}

export type TCard = {
  employee : TEmployee
}

function EmployeeCard({ employee }: TCard) {
  return (
    <section className="c-employee-card">
      <h2>{employee.name}</h2>
    </section>
  );
}

export default EmployeeCard;
