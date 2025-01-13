enum ListingType {
    premium,
    normal
}

export type CardData = {
    id: string;
    listingType: string;
    image: string;
    price: string;
    thumbnails: Array<string>;
    title: string;
    subtitle: string;
    year: string;
    bodyStyle: string;
    mileage: string;
    power: string;
    transmission: string;
    fuelType: string;
    engineVolume: string;
    location: string;
    dealerealerIcon: string;
};

export type Seller = {
    name: string;
    street: string;
    city: string;
    phone: string;
    email: string;
    workingHours: string;
    icon: string;   
}


export type ListingDetails = {
    id: string;
    listingNumber: string;    
    condition: string;
    gears: string;
    listingType: string;
    images: string[];
    price: string;
    previousPrice: string;
    fixedPrice: boolean;
    acceptsTradeIn: boolean;
    title: string;
    subtitle: string;
    year: string;
    bodyStyle: string;
    mileage: string;
    power: string;
    transmission: string;
    fuelType: string;
    engineVolume: string;
    location: string;
    emissionClass: string;
    seats: string;
    doors: string;
    driveSide: string;
    registedUntil: string;
    seatsMaterial: string;
    acType: string;
    cylinders: string;
    interiorColour: string;
    colour: string;
    features: string[];
    description: string;
    seller: Seller;
}
