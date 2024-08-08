"use client";
import { IAppointment, IDoctorData } from "@/app/_interfaces";
import { useEffect, useState } from "react";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";
import { DoctorsData, DefultDoctorObj } from "@/app/_data";
import Image from "next/image";

interface IAppointmentComponent {
  appointment: IAppointment;
  deleteAppointmentsHandler?: (id: string) => void;
}

/*~~~~~~~~$ Appointment Component $~~~~~~~~*/
const Appointment: React.FC<IAppointmentComponent> = ({
  appointment,
  deleteAppointmentsHandler,
}) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [doctorData, setDoctorData] = useState<IDoctorData>(DefultDoctorObj);

  /*~~~~~~~~$ Effects $~~~~~~~~*/
  useEffect(() => {
    const doctor = DoctorsData.filter((d) => d.id === appointment.doctorId);
    if (doctor.length > 0) {
      setDoctorData(doctor[0]);
    }
    console.log("doctor data", doctorData.name);
  }, [appointment.doctorId]);

  return (
    <div className="appointment-card shadow-card-shadow w-full  md:max-w-md min-h-40 mx-auto p-2 flex items-center space-x-4 rounded-xl ring-blue-900 ring-2  relative">
      {/*~~~~~~~~$ Doctor Info $~~~~~~~~*/}
      {/* doctor image */}
      {doctorData?.image && (
        <div className="bg-white w-[6.5rem] h-[6.5rem] rounded-full ring-blue-900 ring-2 flex items-center justify-center overflow-hidden sm:w-32 sm:h-32">
          <div className=" bg-primary w-[5.5rem] h-[5.5rem] rounded-full overflow-hidden sm:w-28 sm:h-28">
            {doctorData?.image && (
              <Image
                src={doctorData.image}
                alt={`Dr. ${doctorData.name}`}
                className="w-full h-full object-cover"
                priority
              />
            )}
          </div>
        </div>
      )}

      {/* appointment info */}
      <article className="appointment-card__info">
        {/* doctor name and specialty */}

        <div className="appointment-card__doctor-info">
          <p className="appointment-card__doctor-specialty sm:text-lg capitalize">
            {appointment.doctorSpecialty}
          </p>
          <h3 className="appointment-card__doctor-name text-primary font-bold sm:text-xl">
            {`Dr. ${doctorData.name}`}
          </h3>
        </div>
        <p className="sm:text-lg">
          <strong>Date:</strong>{" "}
          {new Date(appointment.date).toLocaleDateString()}
        </p>
        <p className="sm:text-lg">
          <strong>Time Slot:</strong> {appointment.timeSlot}
        </p>
      </article>

      {/* delete appointment button */}
      <DeleteConfirmationDialog
        TriggerClassName="absolute top-2 right-2"
        appointmentId={appointment.id}
        deleteAppointmentsHandler={deleteAppointmentsHandler}
      />
    </div>
  );
};

export default Appointment;
