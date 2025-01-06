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
    dealerName: string;
};