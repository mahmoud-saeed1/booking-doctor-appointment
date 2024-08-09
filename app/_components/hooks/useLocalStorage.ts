"use client";

import { useEffect, useState } from "react";
export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  //? Initialize the state with the value from localStorage (if it exists), or the provided initial value.
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const jsonValue = localStorage.getItem(key);
      if (jsonValue != null) {
        return JSON.parse(jsonValue) as T;
      }
    }
    //? Handle if the initialValue is a function (lazy initialization)
    return initialValue instanceof Function ? initialValue() : initialValue;
  });

  //? Sync the state to localStorage whenever the value changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
