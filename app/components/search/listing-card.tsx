"use client"

import Image from "next/image";
import { CardData } from "../../model/definitions"
import LazyImage from "../lazy-loading-image";
import { Button } from "../button";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";


const ListingCard = ({cardData}: {cardData: CardData}) => {

    const [liked, setLiked] = useState(false);

    return (
        <div className="flex flex-col md:flex-row w-full rounded-lg border-gray-400 border-solid border-1 shadow-lg bg-gray-200 text-black mb-2 overflow-hidden">
            <div className="flex flex-col overflow-hidden w-full md:w-2/5 md:min-w-72">
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
            <div className="block md:flex md:flex-col p-5 md:space-y-8 md:ml-5 md:mr-auto w-full">
                <div className="flex-row w-full">
                    <div className="w-full">
                        <span className="inline-block text-xl font-bold"><h1>{cardData.title}</h1></span>
                        <span className="ml-2 float-right text-red-700" onClick={() => setLiked(!liked)}>
                            {liked ? <FaHeart /> : <FaRegHeart />}
                        </span>
                    </div>
                    <p className="text-xs">{cardData.subtitle}</p>
                </div>
                <div className="flex font-bold text-2xl md: mt-5">
                    <p>{cardData.price}</p>
                </div>
                <div className="flex text-xs">
                    <p>{cardData.bodyStyle}</p>
                    <p>{cardData.power}</p>
                    <p>{cardData.mileage}</p>
                    <p>{cardData.engineVolume}</p>
                    <p>{cardData.fuelType}</p>
                </div>
                <div className="flex items-end justify-between text-sm w-full">
                    <Button className='bg-sky-600'>Contact</Button>
                    <span className="block">
                        {cardData.dealerealerIcon &&
                            <LazyImage src={cardData.dealerealerIcon} alt='Dealer icon' style="w-30 h-auto" />
                        }
                        <p className="align-middle pt-2">{cardData.location}</p>
                    </span>    
                </div>
            </div>
        </div>
    );
};

export default ListingCard;

