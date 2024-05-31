import React from "react";

type IDateINput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: IDateINput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="date" {...props} />
    </div>
  );
};

export default DateInput;
