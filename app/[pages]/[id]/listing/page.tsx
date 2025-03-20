"use client"

import React, { useState } from 'react';
import Carousel from '@/app/components/basic/carousel';
import { getListingDetails } from '@/app/backend/dataService';
import LazyImage from '@/app/components/basic/lazy-loading-image';
import { Button } from '@/app/components/basic/button';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { BsFuelPump } from "react-icons/bs"; // fuel
import { BsCalendar2Date } from "react-icons/bs"; // year
import { PiSpeedometerLight } from "react-icons/pi"; // power
import { TbAutomaticGearbox } from "react-icons/tb"; // transmission
import { IoMdSpeedometer } from "react-icons/io"; // mileage
import { PiEngine } from "react-icons/pi";

export default function Page(params: { id: string } ) {

    const id = params.id;
    const listingDetails = getListingDetails(id);
    const [liked, setLiked] = useState(false);
    const [phoneVisible, setPhoneVisible] = useState(false);

    return (
        <div className='flex justify-center mb-4'>
            <div className='flex flex-col md:w-auto md:max-w-[42rem]'>

                {/* Images */}
                <div className="flex flex-row justify-left items-start bg-gray-100 rounded-lg">
                    <Carousel images={listingDetails.images} gallerySize={8} height={'h-[17rem] md:h-[32rem]'}/>
                </div>

                {/* Sticky card - mobile */}
                <div className="md:hidden sticky top-2 mt-4 space-y-2 p-3 bg-gray-100 border-1 border-gray-400 shadow-lg rounded-lg mb-auto">
                    <div className="flex justify-between">
                        <div className="flex-block">
                            <h1 className="text-lg font-bold">{listingDetails.title}</h1>
                            <p className="text-2xl font-bold">{listingDetails.price}</p>                            
                        </div>
                        <span className="ml-2 mb-5 pt-1 float-right text-blue-500" onClick={() => setLiked(!liked)}>
                            {liked ? <FaHeart /> : <FaRegHeart />}
                        </span>
                    </div>
                    <div className="space-y-4">
                        {
                        listingDetails?.seller?.name ? 
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <p className="text-lg">{listingDetails.seller.name}</p>
                                <p className="text-sm">{listingDetails.seller.city}</p>
                            </div>
                            <div className="flex flex-col">
                                <LazyImage src={listingDetails.seller.icon} alt={'Ikona prodavca'} style="w-30 h-auto"/>
                            </div>
                        </div>
                        : 
                        <div>
                            <p>{listingDetails?.seller?.city}</p>
                            <p>Tel: {listingDetails?.seller?.phone}</p>
                        </div>
                        }
                        <div className="flex justify-between">
                            <Button className='bg-sky-600'>Pošalji poruku</Button>
                            <span className="flex space-x-2" onClick={() => setPhoneVisible(!phoneVisible)}>
                                <p className="text-sm mt-1">
                                    Tel: {phoneVisible ? listingDetails?.seller?.phone 
                                    : listingDetails?.seller?.phone?.replace(listingDetails?.seller?.phone.slice(5, 
                                        listingDetails.seller.phone.length), '....')}</p>
                                {phoneVisible ? <IoMdEyeOff className="mt-[0.4rem]"/> : <IoMdEye className="mt-[0.4rem]"/>}
                            </span>
                        </div>
                    </div> 
                </div>

                {/* Highlight */}                
                <div className="flex flex-row p-3 mt-4 bg-gray-100 border-1 border-gray-400 shadow-lg rounded-lg">  
                    <div className="flex flex-col w-full">
                        {/* <div className='flex flex-row mb-2'>                  
                            <h1 className="text-xl font-bold">Osnovni podaci</h1>
                        </div> */}
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-0 text-sm w-full">
                            <div className="flex flex-row p-[5px] space-x-2">
                                <BsCalendar2Date className='text-3xl text-blue-600'/>
                                <span className="pt-1">{listingDetails.year}</span>
                            </div>
                            <div className="flex flex-row p-[5px] space-x-2">
                            
                                <IoMdSpeedometer  className="text-4xl text-blue-600 font-extrabold" />
                                <div className="pt-1">{listingDetails.mileage}</div>
                            </div>
                            <div className="flex flex-rowp-[5px] space-x-2">
                                <PiSpeedometerLight className="text-4xl text-blue-600 font-extrabold" />
                                <div className="pt-1">{listingDetails.power}</div>
                            </div>
                            <div className="flex flex-row p-[5px] space-x-2 justify--ce">
                                <TbAutomaticGearbox className="text-3xl text-blue-600" />
                                <div className="pt-1">{listingDetails.transmission}</div>
                            </div>
                            <div className="flex flex-row p-[5px] space-x-2">
                                <BsFuelPump className="text-3xl text-blue-600" />
                                <div className="pt-1">{listingDetails.fuelType}</div>
                            </div>
                            <div className="flex flex-row p-[5px]  space-x-2">
                                <PiEngine className="text-3xl text-blue-600" />
                                <div className="pt-1">{listingDetails.engineVolume}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other details */}                
                <div className="flex flex-row p-3 mt-4 bg-gray-100 border-1 border-gray-400 shadow-lg rounded-lg">  
                    <div className="flex flex-col w-full">
                        <div className='flex flex-row mb-2'>                  
                            <h1 className="text-xl font-bold">Ostali podaci</h1>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-0 text-xs w-full">
                            <div className="flex flex-row bg-gray-200 p-[5px]">
                                <div className="w-1/2 font-bold">Stanje</div>
                                <div>{listingDetails.condition}</div>
                            </div>
                            <div className="flex flex-row  md:bg-gray-200 p-[5px]">
                                <div className="w-1/2 font-bold">Broj oglasa</div>
                    			<div>{listingDetails.listingNumber}</div>
                            </div>
                            <div className="flex flex-row  bg-gray-200 md:bg-transparent p-[5px]">
                                <div className="w-1/2 font-bold">Broj brzina</div>
                                <div>{listingDetails.gears}</div>
                            </div>
                            <div className="flex flex-row p-[5px]">
                            <div className="w-1/2 font-bold">Fiksna cena</div>
                                <div>{listingDetails.fixedPrice ? 'DA' : 'NE'}</div>
                            </div>
                            <div className="flex flex-row  bg-gray-200 p-[5px]">
                                <div className="w-1/2 font-bold">Tip vozila</div>
                                <div>{listingDetails.bodyStyle}</div>
                            </div>
                            <div className="flex flex-row p-[5px] md:bg-gray-200 ">
                                <div className="w-1/2 font-bold">Zamena</div>
                                <div>{listingDetails.acceptsTradeIn ? 'DA' : 'NE'}</div>
                            </div>
                            <div className="flex flex-row bg-gray-200 p-[5px] md:bg-transparent">
                                <div className="w-1/2 font-bold">Sedišta</div>
                                <div>{listingDetails.seats}</div>
                            </div>
                            <div className="flex flex-row p-[5px]">
                                <div className="w-1/2 font-bold">Vrata</div>
                                <div>{listingDetails.doors}</div>
                            </div>
                            <div className="flex flex-row bg-gray-200 p-[5px]">
                                <div className="w-1/2 font-bold">Volan</div>
                                <div>{listingDetails.driveSide}</div>
                            </div>
                            <div className="flex flex-row p-[5px] md:bg-gray-200">
                                <div className="w-1/2 font-bold">Registrovan do</div>
                                <div>{listingDetails.registedUntil}</div>
                            </div>
                            <div className="flex flex-row bg-gray-200 p-[5px] md:bg-transparent">
                                <div className="w-1/2 font-bold">Materijal sedišta</div>
                                <div>{listingDetails.seatsMaterial}</div>
                            </div>
                            <div className="flex flex-row p-[5px]">
                                <div className="w-1/2 font-bold">Klima</div>
                                <div>{listingDetails.acType}</div>
                            </div>
                            <div className="flex flex-row bg-gray-200 p-[5px]">
                                <div className="w-1/2 font-bold">Cilindara</div>
                                <div>{listingDetails.cylinders}</div>
                            </div>
                            <div className="flex flex-row p-[5px] md:bg-gray-200">
                                <div className="w-1/2 font-bold">Boja unutrašnjosti</div>
                                <div>{listingDetails.interiorColour}</div>
                            </div>
                            <div className="flex flex-row bg-gray-200 p-[5px] md:bg-transparent">
                                <div className="w-1/2 font-bold">Boja auta</div>
                                <div>{listingDetails.colour}</div>
                            </div>
                            <div className="flex flex-row p-[5px]">
                                <div className="w-1/2 font-bold">Emisiona klasa</div>
                                <div>{listingDetails.emissionClass}</div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Features */}                
                <div className="flex p-3 mt-4 space-x-4 bg-gray-100 border-1 border-gray-400 shadow-lg rounded-lg text-sm">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row mb-2">
                            <h1 className="text-xl font-bold">Oprema</h1>                            
                        </div>
                        <div className="flex flex-row w-full">
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-2 text-xs w-full">
                            {
                                listingDetails.features?.map((feature) => (
                                    <p key={feature}>{feature}</p>
                                ))
                            }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Sticky card - large screen */}
            <div className="hidden md:sticky md:top-2 md:flex flex-row md:flex-col space-y-2 p-3 ml-5 bg-gray-100 border-1 border-gray-400 shadow-lg rounded-lg mb-auto w-1/3">
                <div className="flex justify-between">
                    <div className="flex-block">
                        <h1 className="text-lg font-bold">{listingDetails.title}</h1>
                        <p className="text-2xl font-bold">{listingDetails.price}</p>
                    </div>
                    <span className="ml-2 mb-5 pt-1 float-right text-blue-500" onClick={() => setLiked(!liked)}>
                        {liked ? <FaHeart /> : <FaRegHeart />}
                    </span>
                </div>
                <div className="space-y-4">
                    {
                        listingDetails?.seller?.name ? 
                        <div className="flex flex-row justify-between space-x-4">
                            <div className="flex flex-col">
                                <p className="text-lg">{listingDetails?.seller?.name}</p>
                                <p className="text-sm">{listingDetails?.seller?.city}</p>
                            </div>
                            <div className="flex flex-col">
                                <LazyImage src={listingDetails.seller.icon} alt={'Ikona prodavca'} style="w-30 h-auto"/>
                            </div>
                        </div>
                        : 
                        <div>
                            <p>{listingDetails?.seller?.city}</p>
                            <p>Tel: {listingDetails?.seller?.phone}</p>
                        </div>
                    }
                    <div className="flex justify-between">
                        <Button className='bg-sky-600'>Pošalji poruku</Button>
                        <span className="flex space-x-2" onClick={() => setPhoneVisible(!phoneVisible)}>
                            <p className="text-sm mt-1">
                                Tel: {phoneVisible ? listingDetails?.seller?.phone 
                                : listingDetails?.seller?.phone?.replace(listingDetails?.seller?.phone.slice(5, 
                                    listingDetails?.seller?.phone?.length), '....')}</p>
                                    {phoneVisible ? <IoMdEyeOff className="mt-[0.4rem]"/> : <IoMdEye className="mt-[0.4rem]"/>}
                        </span>
                    </div>
                </div> 
            </div>
        </div>
    );
};
