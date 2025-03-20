import { SearchResult } from "@/app/model/definitions";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";


// Define the context type
type SearchResultContextType = {
  searchResult: SearchResult;
  setSearchResult: (result: SearchResult) => void;
};

const LOCAL_STORAGE_KEY_SEARCH_RESULT= "searchResults";

// Create the context with default values
const SearchResultContext = createContext<SearchResultContextType | undefined>(undefined);

// Provider component
export const SearchResultProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const getInitialResults = (): SearchResult => {
    const savedResults = localStorage.getItem(LOCAL_STORAGE_KEY_SEARCH_RESULT);
    return savedResults ? JSON.parse(savedResults) : {} as SearchResult;
  };  

  const [searchResult, setSearchResult] = useState<SearchResult>(getInitialResults());

  // 🔹 Save `searchResults` to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SEARCH_RESULT, JSON.stringify(searchResult));
  }, [searchResult]);  
  
  return (
    <SearchResultContext.Provider value={{ searchResult, setSearchResult }}>
      {children}
    </SearchResultContext.Provider>
  );
};

// Custom hook to use the search result context
export const useSearchResult = () => {
  const context = useContext(SearchResultContext);
  if (!context) {
    throw new Error("useSearchResult must be used within a SearchResultProvider");
  }
  return context;
};