"use client"

import Image from "next/image";
import { CardData } from "../../model/definitions"
import LazyImage from "../lazy-loading-image";


const ListingCard = ({cardData}: {cardData: CardData}) => {

    return (
        <div className="flex flex-col md:flex-row w-full rounded-lg border-gray-200 border-solid border-1 shadow-md  bg-gray-100 text-black mb-2 overflow-hidden">
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
            <div className="block md:flex md:flex-col  p-2 md:space-y-8 md:ml-auto md:mr-auto pt-5">
                <div className="flex">
                    <div className="block">
                        <h1 className="text-xl font-bold">{cardData.title}</h1>
                        <p className="text-xs">{cardData.subtitle}</p>
                    </div>
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
            </div>
        </div>
    );
};

export default ListingCard;

