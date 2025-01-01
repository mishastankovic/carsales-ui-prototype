'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { IoSearch } from "react-icons/io5";
import { MdOutlineSell } from "react-icons/md";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Search', href: '/search', icon: IoSearch },
  { name: 'Advertise', href: '/advertise', icon: MdOutlineSell },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex gap-1 md:gap-10">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'h-[48px] grow items-center gap-2 rounded-md  bg-blue-600 p-3 font-medium \
               hover:bg-sky-200 hover:text-blue-600 py-5 w-32 inline-block text-sm',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}        
              >
                <LinkIcon className="w-6 inline" color="white" />
                <p className=" text-white inline">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
