"use client"
import { IAppointment } from "@/app/_interfaces";
import { useEffect, useState } from "react";
import "./index.css";

const AppointmentList: React.FC = () => {
    const [appointments, setAppointments] = useState<IAppointment[]>([]);
  
    useEffect(() => {
      const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      setAppointments(storedAppointments);
    }, []);
  
    if (appointments.length === 0) {
      return <p>No appointments found.</p>;
    }
  
    return (
      <div className="appointment-list">
        <h2 className="appointment-list__title">Appointments</h2>
        <div className="appointment-list__table-container">
          <table className="appointment-list__table">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Specialty</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Phone</th>
                <th>WhatsApp</th>
                <th>Date</th>
                <th>Time Slot</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index} className="appointment-list__row">
                  <td>{appointment.doctorName}</td>
                  <td>{appointment.doctorSpecialty}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.address}</td>
                  <td>{appointment.phone}</td>
                  <td>{appointment.whatsapp}</td>
                  <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  <td>{appointment.timeSlot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default AppointmentList;
  