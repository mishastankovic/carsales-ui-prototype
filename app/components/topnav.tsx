import Link from 'next/link';
import NavLinks from './nav-links';
import CarsalesLogo from '@/app/components/icons/carsales-logo';
import { FaSignOutAlt } from "react-icons/fa"

export default function TopNav() {
  return (
    <div className="flex flex-row px-3 py-4 bg-blue-600 w-full">
      <Link className="flex-col flex rounded-md" href="/" >
        <div className="text-white">
          <CarsalesLogo />
        </div>
      </Link>
      <div className="flex justify-center items-center gap-5 w-full">
        <NavLinks />
      </div>
      <div className="flex flex-col space-x-2">
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md \
           bg-blue-600 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none \
           md:justify-start md:p-2 md:px-3">
            <FaSignOutAlt className="w-6" fontSize="1.5em" color="white"/>
          </button>
        </form>
      </div>
    </div>
  );
}
