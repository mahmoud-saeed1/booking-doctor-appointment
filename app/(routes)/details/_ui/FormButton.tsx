import React from "react";

interface FormButtonProps {
  type: "button" | "submit" | "reset";
  label: string;
}

const FormButton: React.FC<FormButtonProps> = ({ type, label }) => (
  <button type={type} className="inline-flex w-full justify-center border border-transparent bg-primary py-2 px-4 font-medium rounded-lg tracking-widest uppercase text-lg text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 ease-in-out hover:scale-105" style={{borderRadius:"10px"}}>
    {label}
  </button>
);

export default FormButton;
