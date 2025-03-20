import { IoCarSportOutline } from "react-icons/io5"
import { defaultFont } from '@/app/components/fonts';

export default function CarsalesLogo() {
  return (
    <div className={`${defaultFont.className} flex flex-row leading-none text-white`}>
      <IoCarSportOutline className="flex-col h-12 w-12" />
      <div className="flex items-center">
        <p className="text-[30px]">oglasi</p>
      </div>
    </div>
  );
}
