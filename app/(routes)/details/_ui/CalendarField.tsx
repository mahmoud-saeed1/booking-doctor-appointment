import React from "react";
import { Calendar } from "@/components/ui/calendar";
import ErrorMessage from "../_components/ErrorMessage";

interface CalendarFieldProps {
  id: string;
  name: string;
  label: string;
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  error: string;
}

const CalendarField: React.FC<CalendarFieldProps> = ({
  id,
  name,
  label,
  selectedDate,
  onDateChange,
  error
}) => (
  <div className="space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={(date) => onDateChange(date as Date | undefined)}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
    <ErrorMessage message={error} />
  </div>
);

export default CalendarField;
