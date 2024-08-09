import React from "react";
import { DoctorsData } from "@/app/_data";
import { IDoctorData } from "@/app/_interfaces";
import { DefultDoctorObj } from "@/app/_data"; // Adjust the import path as needed
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AppointmentDialog from "@/app/(routes)/details/_components/AppointmentDialog";
import IconContainer from "../IconContainer";
import { Trash } from "@/app/_icons";

interface IFavoriteDoctor {
  doctorID: string;
  closeFavoriteCartHandler?: () => void;
  removeItem?: (id: string) => void;
}

const FavoriteDoctor: React.FC<IFavoriteDoctor> = ({
  doctorID,
  closeFavoriteCartHandler,
  removeItem,
}) => {
  const doctorData: IDoctorData =
    DoctorsData.find((doctor) => doctor.id === doctorID) || DefultDoctorObj;

  return (
    <div className="min-h-32 ring-2 px-2 ring-primary rounded-xl flex items-center space-x-4 relative">
      {/* Doctor image */}
      {doctorData?.image && (
        <div className="bg-white w-28 h-28 rounded-full ring-blue-900 ring-2 flex items-center justify-center overflow-hidden">
          <div className="bg-primary w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={doctorData.image}
              alt={`Dr. ${doctorData.name}`}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      )}

      <div className="flex flex-col items-start">
        <h4 className="text-gray-700 font-semibold capitalize">
          {doctorData.specialty}
        </h4>
        <p className="text-primary text-lg font-bold tracking-wider">
          {`Dr. ${doctorData.name}`}
        </p>

        <AppointmentDialog
          className="text-sm text-nowrap mt-1"
          doctorID={doctorData.id}
        />

        <Button
          onClick={() => removeItem && removeItem(doctorID)}
          className="bg-transparent absolute top-1 -right-2 hover:bg-transparent"
        >
          <IconContainer className="w-8 h-8">
            <Trash />
          </IconContainer>
        </Button>
      </div>
    </div>
  );
};

export default FavoriteDoctor;
