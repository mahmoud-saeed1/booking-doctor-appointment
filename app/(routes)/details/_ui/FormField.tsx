import React, { ChangeEvent } from "react";
import ErrorMessage from "../_components/ErrorMessage";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const FormField: React.FC<FormFieldProps> = ({ id, name, label, type, value, onChange, error }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-lg font-medium">{label}</label>
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="border-gray-300 w-full border-2 focus:outline-none focus:border-blue-600 rounded-[0.4rem] px-3 py-2"
    />
    <ErrorMessage message={error} />
  </div>
);

export default FormField;
