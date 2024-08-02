import React, { ChangeEvent } from "react";
import ErrorMessage from "../_components/ErrorMessage";

interface FormRadioGroupProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  options: { value: string; label: string }[];
  error: string;
}

const FormRadioGroup: React.FC<FormRadioGroupProps> = ({ name, label, value, onChange, options, error }) => (
  <div className="space-y-1">
    <label className="block text-lg font-medium">{label}</label>
    <div className="mt-1 flex space-x-4">
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            className="form-radio text-indigo-600 focus:ring-indigo-500"
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
    <ErrorMessage message={error} />
  </div>
);

export default FormRadioGroup;
