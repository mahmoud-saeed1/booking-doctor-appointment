"use client";
import { useMenuFavoriteContext } from "@/app/_context/MenuFavoriteContext";
import { LockedHeard, OpenedHeart } from "@/app/_icons";
import { FC, useCallback } from "react";
import IconContainer from "../IconContainer";

interface FavoriteButtonProps {
  className: string;
  doctorId: string;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ className, doctorId }) => {
  const { addToFavoriteCart, getFavoriteItemQuantity } =
    useMenuFavoriteContext();

  const favoriteItemsQuantity = getFavoriteItemQuantity(doctorId);

  // Memoized handler for adding/removing from favorites
  const handleAddToFavorite = useCallback(() => {
    addToFavoriteCart(doctorId);
  }, [addToFavoriteCart, doctorId]);

  return (
    <button
      type="button"
      aria-label={
        favoriteItemsQuantity > 0 ? "Remove from favorites" : "Add to favorites"
      }
      className={`absolute -top-[15%] -right-[3%] cursor-pointer ${className}`}
      onClick={handleAddToFavorite}
    >
      <IconContainer className="w-10 h-10">
        {favoriteItemsQuantity > 0 ? <LockedHeard /> : <OpenedHeart />}
      </IconContainer>
    </button>
  );
};

export default FavoriteButton;
