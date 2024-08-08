"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "./index.css";
import { Trash } from "@/app/_icons";
import IconContainer from "@/app/_components/IconContainer";

/*~~~~~~~~$ IDeleteConfirmationDialog Interface $~~~~~~~~*/
interface IDeleteConfirmationDialog {
  className?: string;
  TriggerClassName?: string;
  appointmentId?: string;
  deleteAppointmentsHandler?: (id: string) => void;
  deleteAllAppointmentsHandler?: () => void;
  deleteAll?: boolean;
}

/*~~~~~~~~$ DeleteConfirmationDialog Component $~~~~~~~~*/
const DeleteConfirmationDialog: React.FC<IDeleteConfirmationDialog> = ({
  className,
  TriggerClassName,
  appointmentId = "",
  deleteAppointmentsHandler,
  deleteAllAppointmentsHandler,
  deleteAll = false,
}) => {
  const [open, setOpen] = useState(false);

  const handleConfirmClick = () => {
    if (deleteAll && deleteAllAppointmentsHandler) {
      deleteAllAppointmentsHandler();
    } else if (deleteAppointmentsHandler) {
      deleteAppointmentsHandler(appointmentId);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        {deleteAll ? (
          <p className={className}>Delete All Appointments</p>
        ) : (
          <IconContainer className={`${TriggerClassName} w-12 h-12`}>
            <Trash />
          </IconContainer>
        )}
      </DialogTrigger>
      <DialogContent
        className="pt-16 rounded-xl max-w-xs"
        style={{ backgroundColor: "white", borderRadius: ".8rem" }}
      >
        <DialogHeader>
          <DialogTitle className="text-center">Confirm Deletion</DialogTitle>
          <DialogDescription className="text-center">
            {deleteAll
              ? "Are you sure you want to delete all appointments?"
              : "Are you sure you want to delete this appointment?"}
          </DialogDescription>
        </DialogHeader>
        <button onClick={handleConfirmClick} className="bg-red-500 rounded-xl py-2 text-white font-bold tracking-wider">
          Confirm
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
