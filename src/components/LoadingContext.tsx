"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface LoadingContextValue {
  isLoading: boolean;
  onLoaderDone: () => void;
}

const LoadingContext = createContext<LoadingContextValue>({
  isLoading: true,
  onLoaderDone: () => {},
});

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const onLoaderDone = useCallback(() => setIsLoading(false), []);

  return (
    <LoadingContext.Provider value={{ isLoading, onLoaderDone }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoadingContext() {
  return useContext(LoadingContext);
}
