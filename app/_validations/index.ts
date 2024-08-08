import { IFormData, IErrors } from "@/app/_interfaces";

const nameRegex =
  /^\s*([\u0600-\u06FF\u0750-\u077F\uFB50-\uFBC1a-zA-Z]+(\s+[\u0600-\u06FF\u0750-\u077F\uFB50-\uFBC1a-zA-Z]+)*)?$/;
const phoneRegex = /^(012|015|010)\d{8}$/;
const addressRegex = /^[#.0-9a-zA-Z\u0600-\u06FF\s,-]+$/;
const ageRegex = /^\d{1,2}$/;

export const validateForm = (formData: IFormData): IErrors => {
  const errors: IErrors = {
    name: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    whatsapp: "",
    date: "",
    timeSlot: "",
  };

  // Name validation
  if (!formData.name) {
    errors.name = "Name is required";
  } else if (!nameRegex.test(formData.name)) {
    errors.name = "Name must be valid in Arabic or English";
  }

  // Age validation
  if (!formData.age) {
    errors.age = "Age is required";
  } else if (
    !ageRegex.test(formData.age) ||
    parseInt(formData.age, 10) < 0 ||
    parseInt(formData.age, 10) > 99
  ) {
    errors.age = "Age must be a number between 0 and 99";
  }

  // Address validation
  if (!formData.address) {
    errors.address = "Address is required";
  } else if (!addressRegex.test(formData.address)) {
    errors.address = "Address must be valid";
  }

  // Phone validation
  if (!formData.phone) {
    errors.phone = "Phone is required";
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = "Phone number must be a valid Egyptian number";
  }

  // WhatsApp validation
  if (!formData.whatsapp) {
    errors.whatsapp = "WhatsApp is required";
  } else if (!phoneRegex.test(formData.whatsapp)) {
    errors.whatsapp = "WhatsApp number must be a valid Egyptian number";
  }

  if (!formData.gender) errors.gender = "Gender is required";
  if (!formData.date) errors.date = "Date is required";
  if (!formData.timeSlot) errors.timeSlot = "Time slot is required";

  return errors;
};
