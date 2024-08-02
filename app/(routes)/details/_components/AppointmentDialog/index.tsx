import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "./index.css";
import AppointmentForm from "../AppointmentForm";

/*~~~~~~~~$ AppointmentDialog Component $~~~~~~~~*/
const AppointmentDialog = () => {
  return (
    <Dialog>
      <DialogTrigger
        className="appointment-dialog__trigger"
        style={{ borderRadius: "0.5rem" }}
      >
        Book Appointment
      </DialogTrigger>
      <DialogContent className="bg-white h-[80%] w-[92%] rounded-2xl overflow-x-hidden overflow-y-scroll scrollbar-none scroll-smooth lg:scrollbar-thin lg:scrollbar-thumb-blue-600 lg:scrollbar-track-blue-200">
        <DialogHeader className="mt-10">
          <DialogTitle className="text-primary font-bold tracking-wider text-3xl whitespace-nowrap">
            Book an Appointment
          </DialogTitle>
          <DialogDescription className="text-gray-500 font-semibold tracking-wide">
            Please fill out the form below to book an appointment.
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm />
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
