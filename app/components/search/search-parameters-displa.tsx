import Link from "next/link";
import { SearchParameters } from "../../model/definitions";
import SearchParameter from "./seach-parameter";
import { useSearchParameters } from "./search-parameters-provider";
import { useSearchResult } from "./search-results-provider";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Button } from "../basic/button";
import { BsSearch } from "react-icons/bs";
import { MdSavedSearch, MdSort } from "react-icons/md";
import SearchForm, { optionsToString } from "./search-form";
import Modal from "../basic/modal";
import { useState } from "react";
import MultiSelect from "../basic/multi-select";
import { getSortingOptions } from "@/app/backend/dataService";


export default function SearchParametersDisplay() {

    const { searchParams, setSearchParams } = useSearchParameters();
    const { searchResult, setSearchResult } = useSearchResult();
    const [ isModalOpen, setIsModalOpen ] = useState(false); 

    const searchResultSortingOptins = getSortingOptions();

    const handleParameterCancel = (property: string, index?: number) => {
        if (index) {
            setSearchParams({...searchParams, [[property][index]]: undefined});
        } else {
            setSearchParams({...searchParams, [property]: undefined});
        }
    }

    const handleSaveSearch = () => {

    }

    const handleSortingOrderChange = () => {

    }

    
    return (
        <div>
            {/* <div>{JSON.stringify(searchParams)}</div> */}
            <div className="flex flex-col w-full  bg-white rounded-md border-gray-400 mb-2">
                <div key="searchParametersDisplay" className="flex w-full p-2 space-x-1 text-sm">
                {Object.entries(searchParams).map(([key, value]) => {
                    if (!value) return null;
                    if (typeof value === 'string') {
                        return <SearchParameter key={key} property={key} value={value} handleParameterCancel={handleParameterCancel} />
                    } else if (typeof value === "object" && "label" in value && "value" in value) {
                        return <SearchParameter key={key} property={key} value={value.label} handleParameterCancel={handleParameterCancel}/>
                    }
                    if (Array.isArray(value)) {
                        return value.map((item, index) => {
                                return typeof item === "object"&& "label" in item && "value" in item ? 
                                    <SearchParameter key={key + index} value={item.label} property={key} idx={index} handleParameterCancel={handleParameterCancel}/>
                                    : <SearchParameter key={key + index} property={key} idx={index} value={item} handleParameterCancel={handleParameterCancel}/>;
                            }
                    )}

                }
                )}
                </div>
                <div className="mt-6 flex justify-between gap-4 p-2 w-full">
                    <div className="flex flex-row space-x-1">
                        <Button onClick={() => setIsModalOpen(true)}>
                            <HiOutlineAdjustmentsHorizontal className='text-xl' /> <span className='ml-2'>Refine search</span>
                        </Button>
                        <Button type="submit" onClick={handleSaveSearch}><MdSavedSearch className="text-xl"/><span className='ml-2'>Save Search</span></Button>
                    </div>
                    <div className="flex justify-end float-right">
                        <MultiSelect id='sortingOrder' multiselect={false} prefixIcon={MdSort} 
                                selected={searchParams?.sortingOrder ? [searchParams?.sortingOrder] : []} 
                                options={searchResultSortingOptins} prompt='Sorting order'  onChange={(value) => handleSortingOrderChange()}/>
                    </div>
                </div>
            </div>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Search Parameters">
                <SearchForm />
            </Modal>}
        </div>
    )
}