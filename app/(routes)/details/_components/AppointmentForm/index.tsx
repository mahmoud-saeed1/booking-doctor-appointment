import { DoctorsData } from "@/app/_data";
import { validateForm } from "@/app/_validations";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import FormSelect from "../../_ui/FormSelect";
import FormField from "../../_ui/FormField";
import FormRadioGroup from "../../_ui/FormRadioGroup";
import CalendarField from "../../_ui/CalendarField";
import FormButton from "../../_ui/FormButton";
import { IErrors, IFormData } from "@/app/_interfaces";
import { v4 as uuid } from "uuid";

const AppointmentForm = ({
  doctorID,
  closeFormHandler,
}: {
  doctorID: string;
  closeFormHandler: () => void;
}) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [formData, setFormData] = useState<IFormData>({
    id: uuid(),
    doctorId: doctorID,
    name: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    whatsapp: "",
    date: new Date(),
    timeSlot: "",
  });

  const [errors, setErrors] = useState<IErrors>({
    name: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    whatsapp: "",
    date: "",
    timeSlot: "",
  });

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    //? Clear the specific error when input changes
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prevData) => ({ ...prevData, date: date as Date }));
    setErrors((prevErrors) => ({ ...prevErrors, date: "" }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.values(validationErrors).some((error) => error !== "")) {
      return;
    }

    //? Save appointment data to local storage
    const doctor = DoctorsData.find((d) => d.id === formData.doctorId);
    const appointmentData = {
      ...formData,
      doctorName: doctor?.name || "",
      doctorSpecialty: doctor?.specialty || "",
    };

    const storedAppointments = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );
    localStorage.setItem(
      "appointments",
      JSON.stringify([...storedAppointments, appointmentData])
    );

    //? Clear form data
    setFormData({
      id: "",
      doctorId: "",
      name: "",
      age: "",
      gender: "",
      address: "",
      phone: "",
      whatsapp: "",
      date: new Date(),
      timeSlot: "",
    });

    setErrors({
      name: "",
      age: "",
      gender: "",
      address: "",
      phone: "",
      whatsapp: "",
      date: "",
      timeSlot: "",
    });

    closeFormHandler();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-white shadow-lg rounded-lg flex flex-col space-y-4"
    >
      <FormField
        id="name"
        name="name"
        label="Name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormField
        id="age"
        name="age"
        label="Age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        error={errors.age}
      />
      <FormRadioGroup
        name="gender"
        label="Gender"
        value={formData.gender}
        onChange={handleChange}
        options={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
        error={errors.gender}
      />
      <FormField
        id="address"
        name="address"
        label="Address"
        type="text"
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
      />
      <FormField
        id="phone"
        name="phone"
        label="Phone"
        type="text"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <FormField
        id="whatsapp"
        name="whatsapp"
        label="WhatsApp"
        type="text"
        value={formData.whatsapp}
        onChange={handleChange}
        error={errors.whatsapp}
      />
      <CalendarField
        id="date"
        name="date"
        label="Date"
        selectedDate={formData.date}
        onDateChange={handleDateChange}
        error={errors.date}
      />
      <FormSelect
        id="timeSlot"
        name="timeSlot"
        label="Time Slot"
        value={formData.timeSlot}
        onChange={handleChange}
        options={[
          { value: "09:00 - 10:00", label: "09:00 - 10:00" },
          { value: "10:00 - 11:00", label: "10:00 - 11:00" },
        ]}
        error={errors.timeSlot}
      />
      <FormButton type="submit" label="Submit" />
    </form>
  );
};

export default AppointmentForm;
