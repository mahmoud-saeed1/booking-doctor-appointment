"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMenuFavoriteContext } from "@/app/_context/MenuFavoriteContext";
import FavoriteDoctor from "../FavoriteDoctor";
import EmptyState from "../EmptyState";
import IconContainer from "../IconContainer";
import { LockedHeard } from "@/app/_icons";

const FavoriteCart = () => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [openCart, setOpenCart] = useState(false);
  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const closeFavoriteCartHandler = () => setOpenCart(false);

  /*~~~~~~~~$ Callbacks $~~~~~~~~*/
  const { favoriteItems, favoriteQuantity, removeItem } =
    useMenuFavoriteContext();

  /*~~~~~~~~$ Renders $~~~~~~~~*/
  const favoriteDoctorsRender = favoriteItems.map((doctor) => (
    <FavoriteDoctor
      key={doctor.doctorID}
      doctorID={doctor.doctorID}
      closeFavoriteCartHandler={closeFavoriteCartHandler}
      removeItem={removeItem}
    />
  ));

  return (
    <Sheet onOpenChange={closeFavoriteCartHandler}>
      <SheetTrigger>
        <IconContainer className="w-8 h-8 md:w-10 md:h-10">
          <LockedHeard />
        </IconContainer>
      </SheetTrigger>
      <SheetContent className="bg-white w-full overflow-y-scroll overflow-x-hidden scrollbar-none scroll-smooth lg:scrollbar-thin lg:scrollbar-thumb-blue-600 lg:scrollbar-track-blue-200">
        <SheetHeader>
          <div className="pt-16">
            <SheetTitle className="text-center text-2xl">
              Your Favorite Doctors{" "}
              {favoriteItems.length > 0 ? (
                <span className="inline-block w-8 h-8 bg-primary rounded-full text-white text-[1.2rem] -translate-x-1 -translate-y-4">
                  {favoriteQuantity}
                </span>
              ) : (
                <EmptyState
                  message="sorry, you don't add any doctor to favorite list"
                  path="/search/dentist"
                  buttonLabel="explore doctors"
                />
              )}
            </SheetTitle>
            <div className="flex flex-col space-y-5 my-8">
              {favoriteDoctorsRender}
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default FavoriteCart;
