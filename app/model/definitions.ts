import { Option } from "../backend/dataService";

enum ListingType {
    premium,
    normal
}

export type CardData = {
    id?: string;
    listingType?: string;
    image?: string;
    price?: string;
    thumbnails?: Array<string>;
    title?: string;
    subtitle?: string;
    year?: string;
    bodyStyle?: string;
    mileage?: string;
    power?: string;
    transmission?: string;
    fuelType?: string;
    engineVolume?: string;
    location?: string;
    dealerealerIcon?: string;
    driveType?: string; // FWD, RWD, AWD
    cruiseControl?: string;
};

export type Seller = {
    name?: string;
    street?: string;
    city?: string;
    phone?: string;
    email?: string;
    workingHours?: string;
    icon?: string;   
}


export type ListingDetails = {
    id?: string;
    listingNumber?: string;    
    condition?: string;
    gears?: string;
    listingType?: string;
    images?: string[];
    price?: string;
    previousPrice?: string;
    fixedPrice?: boolean;
    acceptsTradeIn?: boolean;
    title?: string;
    subtitle?: string;
    year?: string;
    bodyStyle?: string;
    mileage?: string;
    power?: string;
    transmission?: string;
    fuelType?: string;
    engineVolume?: string;
    location?: string;
    emissionClass?: string;
    seats?: string;
    doors?: string;
    driveSide?: string;
    registedUntil?: string;
    seatsMaterial?: string;
    acType?: string;
    cylinders?: string;
    interiorColour?: string;
    colour?: string;
    features?: string[];
    description?: string;
    seller?: Seller;
}


export type SearchParameters = {
    // car data
    make?: Option;
    model?: Option
    yearFrom?: string;
    yearTo?: string;
    bodyStyle?: Option[];
    mileageFrom?: string;
    mileageTo?: string;
    powerFrom?: string;
    powerTo?: string;
    transmission?: Option; // AT, MT, SAT
    gears?: string;
    fuelType?: string[];
    engineVolumeFrom?: string;
    engineVolumeTo?: string;
    driveType?: string; // FWD, RWD, AWD
    cruiseControl?: string;
    emissionClass?: string;
    seatsFrom?: string;
    seatsTo?: string;
    doorsFrom?: string;
    doorsTo?: string;
    driveSide?: string;
    cylinders?: string;
    interiorColour?: string;
    colour?: string;

    // listing data
    listingNumber?: string;    
    location?: string;
    condition?: string;
    priceFrom?: string;
    priceTo?: string;
    fixedPrice?: boolean;
    acceptsTradeIn?: boolean;
    registedUntil?: string;
    seatsMaterial?: string;
    acType?: string;

    // seller
    sellerType?: string; // Private, Dealer, Organisation
    sellerRating?: string;

    searchOptions: string[];

    sortingOrder: string;

}

export const searchOptions: string[] = [
    "ABS",
    "Adaptive cornering lights",
    "Adaptive lighting",
    "Air suspension",
    "All season tyres",
    "Alloy wheels",
    "Bi-xenon headlights",
    "Blind spot assist",
    "Central locking",
    "Daytime running lights",
    "Distance warning system",
    "Dynamic chassis control",
    "Electric tailgate",
    "Emergency brake assist",
    "Emergency tyre",
    "Emergency tyre repair kit",
    "ESP",
    "Fog lamps",
    "Folding roof",
    "Four wheel drive",
    "Glare-free high beam headlights",
    "Headlight washer system",
    "Heated windshield",
    "High beam assist",
    "Hill-start assist",
    "Immobilizer",
    "Keyless central locking",
    "Lane change assist",
    "Laser headlights",
    "LED headlights",
    "LED running lights",
    "Light sensor",
    "Night vision assist",
    "Panoramic roof",
    "Power Assisted Steering",
    "Rain sensor",
    "Roof rack",
    "Spare tyre",
    "Speed limit control system",
    "Sports package",
    "Sports suspension",
    "Start-stop system",
    "Steel wheels",
    "Summer tyres",
    "Sunroof",
    "Tinted windows",
    "Traction control",
    "Traffic sign recognition",
    "Tyre pressure monitoring",
    "Winter tyres",
    "Xenon headlights",
    "Parking sensors front",
    "Parking sensors rear",
    "Camera front",
    "Camera rear",
    "Camera 360",
    "Driver Airbag",
    "Front Airbags",
    "Side Airbags",
];


export type SearchResult = {
    listings: CardData[];
}
