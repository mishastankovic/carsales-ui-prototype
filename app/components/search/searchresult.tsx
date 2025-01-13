"usse client"

import Image from 'next/image';
import { defaultFont } from '@/app/components/fonts';
import Search from '@/app/components/search';
import { CardData } from '@/app/model/definitions';
import ListingCard from './listing-card';

export default function SearchResultList({ searchResult, }: { searchResult: CardData[]; }) {
  return (
    <div className="w-full">
      <p className={`${defaultFont.className} mb-8 text-xl md:text-2xl`}>
        Search Result
      </p>
      
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="flex min-w-full align-middle justify-center">
            <div className = "flex flex-1 min-w-0" ></div>
            <div className="flex flex-2 flex-col overflow-hidden pt-0">
              { 
                searchResult?.map((listing) => (
                  <ListingCard cardData = {listing} key = {listing.id} />
                ))
              }                          
            </div>
            <div className="flex flex-1 min-w-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
