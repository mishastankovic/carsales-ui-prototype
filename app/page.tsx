import CarsalesLogo from '@/app/components/icons/carsales-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/components/home.module.css';
import { defaultFont } from '@/app/components/fonts';
import Image from 'next/image';
import TopNav from './components/topnav';

export default function Page() {
  return (
    <main className="flex flex-col p-[0.1rem]">
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none w-220">
          <TopNav />
        </div>
      </div>
    </main>
  );
}
