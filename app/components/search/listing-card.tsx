"use client"

import Image from "next/image";
import { CardData } from "../../model/definitions"
import LazyImage from "../basic/lazy-loading-image";
import { Button } from "../basic/button";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation"


const ListingCard = ({cardData}: {cardData: CardData}) => {

    const [liked, setLiked] = useState(false);
    const router = useRouter();

    return (
        <div className="flex flex-col w-full rounded-lg mb-3 border-gray-400 border-solid border-1 shadow-lg bg-gray-200 text-black overflow-hidden md:flex-row ">
            <div className="flex flex-col overflow-hidden w-full md:w-3/5 md:min-w-72" onClick={() => router.push(`/pages/${cardData.id}/listing`)}>
                <LazyImage src={cardData.image} alt={`cardData.title`} style="w-full h-auto md:min-w-72"/>
                {cardData.thumbnails && cardData.thumbnails.length > 0 && (
                <div className="flex flex-row w-full h-auto">
                    <LazyImage src={cardData?.thumbnails[0]} alt={`Small image 1 for ${cardData.title}`}
                        style={`object-cover h-auto w-full border-r-[1px] border-t-[1px] border-gray-200`} />
                    <LazyImage src={cardData?.thumbnails[1]} alt={`Small image 1 for ${cardData.title}`} 
                        style={` object-cover h-auto  w-full border-r-[1px]  border-t-[1px] border-gray-200`} />
                    <LazyImage src={cardData?.thumbnails[2]} alt={`Small image 1 for ${cardData.title}`} 
                        style={`object-cover h-auto h-auto w-full border-t-[1px] border-gray-200`} />
                </div>
                )}
            </div>
            <div className="block md:flex md:flex-col p-3 md:ml-5 md:mr-auto w-full">
                <div className="flex w-full">
                    <div className="w-full">
                        <span className="inline-block text-xl font-bold"><h1>{cardData.title}</h1></span>
                        <p className="text-sm">{cardData.subtitle}</p>
                    </div>
                    <div >
                        <span className="ml-2 mb-5 float-right text-red-700" onClick={() => setLiked(!liked)}>
                            {liked ? <FaHeart /> : <FaRegHeart />}
                        </span>
                        {cardData.dealerealerIcon &&
                            <LazyImage src={cardData.dealerealerIcon} alt='Dealer icon' style="w-30 h-auto" />
                        }
                    </div>
                </div>
                <div className="flex font-bold text-2xl mt-1 md:mt-5">
                    <p>{cardData.price}</p>
                </div>
                <div className="flex flex-wrap mt-1 text-xs md:mt-5  md:text-sm">
                    <p className="border-solid border-black border-r-[1px] pr-[8px]">{`${cardData.year}`}</p>
                    <p className="border-solid border-black border-r-[1px] pl-[8px] pr-[8px]">{`${cardData.mileage}`}</p>
                    <p className="border-solid border-black border-r-[1px] pl-[8px] pr-[8px]">{`${cardData.power}`}</p>
                    <p className="border-solid border-black border-r-[1px] pl-[8px] pr-[8px]">{`${cardData.fuelType}`}</p>
                    <p className="border-solid border-black border-r-[1px] pl-[8px] pr-[8px]">{`${cardData.transmission}`}</p>
                    <p className="pl-[8px]">{`${cardData.engineVolume}`}</p>
                </div>
                <div className="flex mt-3 md:mt-auto justify-between text-sm w-full">
                    <Button className='bg-sky-600'>Contact</Button>
                    <span className="block">
                        <p className="align-middle pt-2">{cardData.location}</p>
                    </span>    
                </div>
            </div>
        </div>
    );
};

export default ListingCard;

