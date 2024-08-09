import React, { ChangeEvent } from "react";
import ErrorMessage from "../_components/ErrorMessage";
import { FormRadioGroupProps } from "@/app/_interfaces";

const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
  name,
  label,
  value,
  onChange,
  options,
  error,
}) => (
  <div className="space-y-1">
    <label className="block text-lg font-medium">{label}</label>
    <div className="mt-1 flex space-x-4">
      {options.map((option) => (
        <div key={option.value} className="inline-flex items-center">
          <input
            id={`${name}-${option.value}`}
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            className="form-radio text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor={`${name}-${option.value}`}
            className="ml-2"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
    <ErrorMessage message={error} />
  </div>
);

export default FormRadioGroup;