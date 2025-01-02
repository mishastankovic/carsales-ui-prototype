import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,   
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/components/button';
import { fetchMakes } from '@/app/backend/dataService';

export default async function SearchForm() {
  const makes = fetchMakes();

  return (
    <form className="bg-gray-300 p-5 border-gray-400 border-2rounded-md ">
      
      <div className="rounded-md p-4 md:p-6">
        {/* Make */}
        <div className="mb-4">
          {<label htmlFor="make" className="mb-2 block text-sm font-medium">
            Make
          </label>}
          <div className="relative">
            <select
              id="make"
              name="name"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select car make
              </option>
              {(await makes).map((make) => (
                <option key={make.key} value={make.value}>
                  {make.value}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/search/result"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">SerCH</Button>
      </div>
    </form>
  );
}
