"use client"

import { search } from "@/app/backend/dataService";
import SearchParametersDisplay from "@/app/components/search/search-parameters-displa";
import SearchForm from "@/app/components/search/search-form";
import SearchResultDisplay from "@/app/components/search/search-result-display";
import { CardData, SearchParameters } from "@/app/model/definitions";
import { useState } from "react";
import { SearchResultProvider, useSearchResult } from "@/app/components/search/search-results-provider";
import { SearchParametersProvider, useSearchParameters } from "@/app/components/search/search-parameters-provider";

export default function Page() {



    /** 
     * Auxiliary component that allows searchParams and searchResult to be used for conditional rendering.
    */
    const Pageontent: React.FC = () => {

      const { searchResult, setSearchResult } = useSearchResult();
      
      return (
        <div>
          {!searchResult?.listings && <SearchForm />}
          {searchResult?.listings && <SearchParametersDisplay /> }
          {searchResult?.listings && <SearchResultDisplay />}
        </div>
      );
    };

  return (
    <div className="flex flex-col w-full justify-center">
      <div className="m-auto w-[70%]">

        <SearchParametersProvider>
          <SearchResultProvider>
            <Pageontent />
          </SearchResultProvider>
        </SearchParametersProvider>
  </div>
    </div>
  )
}