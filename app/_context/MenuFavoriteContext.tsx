import React, {
    useContext,
    createContext,
    useState,
    useEffect,
    ReactNode,
  } from "react";
  import { useLocalStorage } from "../_components/hooks/useLocalStorage";
  
  //? Define the shape of a favorite item
  interface FavoriteItem {
    doctorID: string;
    quantity: number;
  }
  
  //? Define the context type
  interface MenuFavoriteContextType {
    favoriteItems: FavoriteItem[];
    setFavoriteItems: React.Dispatch<React.SetStateAction<FavoriteItem[]>>;
    isMounted: boolean;
    getFavoriteItemQuantity: (id: string) => number;
    favoriteQuantity: number;
    addToFavoriteCart: (id: string) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
  }
  
  //? Create the context with a default value
  const MenuFavoriteContext = createContext<MenuFavoriteContextType | undefined>(
    undefined
  );
  
  //? Custom hook for accessing the context
  export function useMenuFavoriteContext(): MenuFavoriteContextType {
    const context = useContext(MenuFavoriteContext);
    if (!context) {
      throw new Error(
        "useMenuFavoriteContext must be used within a MenuFavoriteProvider"
      );
    }
    return context;
  }
  
  // Define the provider's props type
  interface MenuFavoriteProviderProps {
    children: ReactNode;
  }
  
  //? The provider component
  export function MenuFavoriteProvider({
    children,
  }: MenuFavoriteProviderProps): JSX.Element {
    const [favoriteItems, setFavoriteItems] = useLocalStorage<FavoriteItem[]>(
      "menu-favorite",
      []
    );
    const [isMounted, setIsMounted] = useState(false);
  
    const getFavoriteItemQuantity = (id: string): number => {
      return favoriteItems.find((item) => item.doctorID === id)?.quantity || 0;
    };
  
    const favoriteQuantity = favoriteItems.reduce(
      (quantity, item) => item.quantity + quantity,
      0
    );
  
    const addToFavoriteCart = (id: string) => {
      setFavoriteItems((currItems) => {
        const existingItem = currItems.find((item) => item.doctorID === id);
        if (existingItem) {
          //? If the item already exists, remove it from favorites
          return currItems.filter((item) => item.doctorID !== id);
        } else {
          //? If the item doesn't exist, add it to favorites with quantity 1
          return [...currItems, { doctorID: id, quantity: 1 }];
        }
      });
    };
  
    const removeItem = (id: string) => {
      setFavoriteItems((currItems) =>
        currItems.filter((item) => item.doctorID !== id)
      );
    };
  
    const clearCart = () => {
      setFavoriteItems([]);
    };
  
    useEffect(() => {
      setIsMounted(true);
      return () => setIsMounted(false);
    }, []);
  
    return (
      <MenuFavoriteContext.Provider
        value={{
          favoriteItems,
          setFavoriteItems,
          isMounted,
          getFavoriteItemQuantity,
          favoriteQuantity,
          addToFavoriteCart,
          removeItem,
          clearCart,
        }}
      >
        {children}
      </MenuFavoriteContext.Provider>
    );
  }
  