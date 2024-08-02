import React, { ChangeEvent } from "react";
import ErrorMessage from "../_components/ErrorMessage";

interface FormSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: number | string; label: number | string }[];
  error: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  options,
  error,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-lg font-medium">
      {label}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="border-gray-300 w-full border-2 focus:outline-none focus:border-blue-600 rounded-[0.4rem] px-3 py-2"
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <ErrorMessage message={error} />
  </div>
);

export default FormSelect;
