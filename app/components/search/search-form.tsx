import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,   
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/components/basic/button';
import { getBodyTypeOptions, getBodyTypes, getCarMakeOptions, getCarMakes, getFuelTypeOptions, getFuelTypes, getMileageList, getMileageOptions, getPriceOptions, getPrices, getTransmissionOptions, getTransmissionTypes, getYearOptions, getYears, Option, search } from '@/app/backend/dataService';
import Select from '../basic/select';
import MultiSelect from '../basic/multi-select';
import { BsCalendar2Date, BsFuelPump, BsSearch } from 'react-icons/bs';
import { LiaCarSideSolid, Lia500Px } from "react-icons/lia";
import { SiFiat } from "react-icons/si";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { SearchParameters } from '@/app/model/definitions';
import { useSearchParameters } from './search-parameters-provider';
import { useSearchResult } from './search-results-provider';
import { TbManualGearbox } from 'react-icons/tb';

/**
 * 
 * @param searchParameters
 * @returns 
 */
export default function SearchForm() {
  const makes = getCarMakeOptions();
  const bodyTypes = getBodyTypeOptions();
  const transmissionTypes = getTransmissionOptions();
  const prices = getPriceOptions();
  const years = getYearOptions();
  const mileageList = getMileageOptions();
  const fuelTypes = getFuelTypeOptions();
  const BsPumpFuelIcon = BsFuelPump

  const { searchParams, setSearchParams } = useSearchParameters();
  const { searchResult, setSearchResult } = useSearchResult();

  const handleSearchClick = () => {
    setSearchResult({listings: search(searchParams)});
  }

  //----------------------------
  // Data binding handlers
  //----------------------------



 const handleChangeOptions = (name: keyof SearchParameters, selectedOptions: Option[]) => {
    console.log("In handleChangeOptions, selectedOptions = " + JSON.stringify(selectedOptions));
    setSearchParams({...searchParams, [name]: selectedOptions});
  }

  const handleChangeStrings = (name: keyof SearchParameters, selectedOptions: Option[]) => {
    setSearchParams({...searchParams, [name]: optionsToString(selectedOptions)});
  }

  const handleChangeSingleString = (name: keyof SearchParameters, selectedOptions: Option[]) => {
    setSearchParams({...searchParams, [name]: selectedOptions[0]?.value});
  }
  const handleChangeSingleOption = (name: keyof SearchParameters, selectedOptions: Option[]) => {
    setSearchParams({...searchParams, [name]: selectedOptions[0]});
  }

  //-------------------------------
  //  Renderer
  //-------------------------------

  return (
    <form className="bg-white border-gray-400 border-2rounded-md rounded-md">
      
      <div className="p-4 md:p-6">
        {/* <div>{JSON.stringify(searchParams)}</div> */}
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Make */}
{/*           {<label htmlFor='make' className='mb-2 block text-sm font-medium'>
            Make
          </label>}
 */}          <MultiSelect id='make' selected={searchParams?.make?.value ? [searchParams?.make?.value] : []} multiselect={false} prefixIcon={SiFiat} 
                prefixStylesOverride='text-2xl' options={makes} prompt='Make' onChange={(values) => handleChangeSingleOption('make', values)} />

          {/* Model */}
{/*           {<label htmlFor='model' className='mb-2 block text-sm font-medium'>
            Model
          </label>} */}
          <MultiSelect id='model' multiselect={true} selected={searchParams?.model?.value ? [searchParams?.model?.value] : []} prefixIcon={Lia500Px} 
            prefixStylesOverride='text-2xl' prompt='Model' options={[]} onChange={(values) => handleChangeStrings('model', values)}/>

          {/* Price to */}
{/*           {<label htmlFor='priceTo' className='mb-2 block text-sm font-medium'>
            Price To
          </label>} */}
          <MultiSelect id='priceTo' multiselect={false} selected={searchParams?.priceTo? [searchParams?.priceTo] : []} prefix="€" 
            prefixStylesOverride='text-lg pl-3' prompt='Price to' options={prices} onChange={(values) => handleChangeSingleString('priceTo', values)} />

{/* Year from */}
{/*           {<label htmlFor='yearFrom' className='mb-2 block text-sm font-medium'>
            Year From
          </label>} */}
          <MultiSelect id='yearFrom' multiselect={false} selected={searchParams?.yearFrom? [searchParams?.yearFrom] : []} prefixIcon={BsCalendar2Date} 
            prefixStylesOverride='text-xl pl-2' prompt='Year from' options={years} onChange={(values) => handleChangeSingleString('yearFrom', values)}/>

          {/* Mileage to */}
{/*           {<label htmlFor='mileageTo' className='mb-2 block text-sm font-medium'>
            Mileage To
          </label>} */}
          <MultiSelect id='mileageTo'  multiselect={false} selected={searchParams?.mileageTo ? [searchParams?.mileageTo] : []} 
            prefix='km' prefixStylesOverride='text-sm italic' prompt='Mileage to' options={mileageList} 
            onChange={(values) => handleChangeSingleString('mileageTo', values)} />

          {/* Transmission */}
{/*           {<label htmlFor='priceTo' className='mb-2 block text-sm font-medium'>
            Transmission
          </label>} */}
          <MultiSelect id='transmission' multiselect={false} selected={searchParams?.transmission?.value ? [searchParams?.transmission.value] : []} 
            prefixIcon={TbManualGearbox} prefixStylesOverride='text-xl' prompt='Transmission' options={transmissionTypes} 
            onChange={(values) => handleChangeSingleOption('transmission', values)} />

          {/* Fuel type */}
{/*           {<label htmlFor='fuelType' className='mb-2 block text-sm font-medium'>
            Fuel Type
          </label>} */}
          <MultiSelect id='fuelType' multiselect={true} selected={searchParams?.fuelType ? searchParams?.fuelType : []} 
            prefixIcon={BsFuelPump} prefixStylesOverride='text-xl pl-3 pb-1' options={fuelTypes} prompt='Fuel Type' 
            onChange={(values) => handleChangeOptions('fuelType', values)} />

          {/* Body type */}
{/*           {<label htmlFor='bodyType' className='mb-2 block text-sm font-medium'>
            Body Type
          </label>} */}
          <MultiSelect id='bodyStyle' multiselect={true} prefixIcon={LiaCarSideSolid} 
            selected={searchParams?.bodyStyle ? optionsToString(searchParams?.bodyStyle) : []} 
            options={bodyTypes} prompt='Body style'  onChange={(values) => handleChangeOptions('bodyStyle', values)}/>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/search/result"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            <HiOutlineAdjustmentsHorizontal className='text-xl' /> <span className='ml-2'>More filters</span>
          </Link>
          <Button type="submit" onClick={handleSearchClick}><BsSearch /><span className='ml-2'>Search</span></Button>
        </div>

      </div>
    </form>
  );
}

export const optionsToString = (options: Option[]) => {
  const values: string[] = [];
  options?.forEach((option) => values.push(option.value));
  return values;
}
