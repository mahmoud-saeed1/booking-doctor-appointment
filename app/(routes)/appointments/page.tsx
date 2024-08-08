"use client";
import { IAppointment, IDoctorData } from "@/app/_interfaces";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Appointment from "./_components/Appointment";
import { Button } from "@/components/ui/button";
import DeleteConfirmationDialog from "./_components/DeleteConfirmationDialog";

/*~~~~~~~~$ AppointmentList Component $~~~~~~~~*/
const AppointmentList: React.FC = () => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  /*~~~~~~~~$ Effects $~~~~~~~~*/
  useEffect(() => {
    const storedAppointments = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );
    setAppointments(storedAppointments);
  }, []);

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const deleteAppointmentsHandler = (id: string) => {
    localStorage.setItem(
      "appointments",
      JSON.stringify(
        appointments.filter((appointment) => appointment.id !== id)
      )
    );
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  const deleteAllAppointmentsHanlder = () => {
    localStorage.setItem("appointments", "[]");
    setAppointments([]);
  };

  if (appointments.length === 0) {
    return <p className="no-appointments">No appointments found.</p>;
  }

  return (
    <section className="appointment-list container flex flex-col space-y-10">
      {/*~~~~~~~~$ Page Tilte $~~~~~~~~*/}
      <h1 className="text-primary text-2xl font-bold capitalize">
        your appointments:
      </h1>

      {/*~~~~~~~~$ Page content $~~~~~~~~*/}
      {appointments.map((appointment, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Appointment
            appointment={appointment}
            deleteAppointmentsHandler={deleteAppointmentsHandler}
          />
        </motion.div>
      ))}

      {/*~~~~~~~~$ Delete All Button $~~~~~~~~*/}
      <DeleteConfirmationDialog
        className="w-fit mx-auto px-4 py-2 bg-red-500 hover:bg-red-600 hover:tracking-widest hover:scale-105 divide-purple-300 transition-all ease-in-out tracking-wide text-white font-bold rounded-xl"
        TriggerClassName="absolute top-2 right-2"
        deleteAllAppointmentsHandler={deleteAllAppointmentsHanlder}
        deleteAll
      />
    </section>
  );
};

export default AppointmentList;
