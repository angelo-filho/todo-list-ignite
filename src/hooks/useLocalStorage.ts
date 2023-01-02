import { useState, useEffect } from "react";

interface UseLocalStorageParams {
  itemName: string;
  onLoad: (data: any) => void;
}

export function useLocalStorage({ itemName, onLoad }: UseLocalStorageParams) {
  const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);

  useEffect(() => {
    const tasksAsString = localStorage.getItem(itemName) || "[]";
    const loadTasks = JSON.parse(tasksAsString);

    onLoad(loadTasks);
    setIsLocalStorageLoaded(true);
  }, []);

  function saveInLocalStorage(data: any) {
    const tasksAsString = JSON.stringify(data);

    localStorage.setItem(itemName, tasksAsString);
  }

  return { isLocalStorageLoaded, saveInLocalStorage };
}
