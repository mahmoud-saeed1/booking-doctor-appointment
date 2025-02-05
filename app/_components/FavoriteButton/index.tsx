"use client";
import { FC, useCallback } from "react";
import { useMenuFavoriteContext } from "@/app/_context/MenuFavoriteContext";
import { LockedHeard, OpenedHeart, OpenHeart, LockedHeart } from "@/app/_icons";
import IconContainer from "../IconContainer";

interface FavoriteButtonProps {
  className: string;
  doctorId: string;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ className, doctorId }) => {
  const { addToFavoriteCart, getFavoriteItemQuantity } = useMenuFavoriteContext();

  const isFavorited = getFavoriteItemQuantity(doctorId) > 0;

  // Memoized handler for adding/removing from favorites
  const handleAddToFavorite = useCallback(() => {
    addToFavoriteCart(doctorId);
  }, [addToFavoriteCart, doctorId]);

  return (
    <span
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
      className={`absolute -top-[15%] -right-[3%] cursor-pointer ${className}`}
      onClick={handleAddToFavorite}
    >
      <IconContainer className="w-10 h-10">
        {/*
         The issue here was that the svg icons you used is not working properly (i guess it's caching issue),
         I recommend using "@iconify/react" library which contains more than 200K svg icons 
         */}
        {isFavorited ? <LockedHeart /> : <OpenHeart />}
      </IconContainer>
    </span>
  );
};

export default FavoriteButton;
