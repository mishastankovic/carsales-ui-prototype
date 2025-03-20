import { SearchParameters } from "@/app/model/definitions";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";


// Define the context type
type SearchParametersContextType = {
  searchParams: SearchParameters;
  setSearchParams: (params: SearchParameters) => void;
};

const SEARCH_PARAMS_LOCAL_STORAGE_KEY = "searchParams";

// Create the context with default values
const SearchParametersContext = createContext<SearchParametersContextType | undefined>(undefined);

// Provider component
export const SearchParametersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  // Load initial state from localStorage
  const getInitialParams = (): SearchParameters => {
    const savedParams = localStorage.getItem(SEARCH_PARAMS_LOCAL_STORAGE_KEY);
    return savedParams ? JSON.parse(savedParams) : {} as SearchParameters;
  };  

  const [searchParams, setSearchParams] = useState<SearchParameters>(getInitialParams());

  // 🔹 Save `searchParams` to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(SEARCH_PARAMS_LOCAL_STORAGE_KEY, JSON.stringify(searchParams));
  }, [searchParams]);

  return (
    <SearchParametersContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </SearchParametersContext.Provider>
  );
};

// Custom hook to use the search parameters context
export const useSearchParameters = () => {
  const context = useContext(SearchParametersContext);
  if (!context) {
    throw new Error("useSearchParameters must be used within a SearchParametersProvider");
  }
  return context;
};