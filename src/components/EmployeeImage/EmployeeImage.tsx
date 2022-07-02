type TEmployeeImage = {
  src: string
  name: string
}

function EmployeeImage({ src, name }: TEmployeeImage) {
  return src && name ? (
    <figure>
      <img src={src} alt={name} className="c-employee-card--img" />
    </figure>
  ) : null;
}

export default EmployeeImage;
