import { makes, searchResult, listingDetails } from "./placeholder-data";
import { CardData, ListingDetails, SearchParameters } from "../model/definitions";

const bodyTypes: Record<string, string> = {
  '1': 'Cabriolet/ Roadster',
  '2': 'Estate Car',
  '3': 'Off-road Vehicle/ Pickup Truck/SUV',
  '4': 'Saloon',
  '5': 'Small Car',
  '6': 'Sports Car/Coupe',
  '7': 'Van/Minibus',
  '8': 'Other'
};

const transmissionTypes: Record<string, string> = {
  '1': 'Manual',
  '2': 'Semi-Automatic',
  '3': 'Automatic'
};

const mileageList: Record<string, string> = {
  "1000":"1000",
  "5000":"5000",
  "10000":"10000",
  "20000":"20000",
  "30000":"30000",
  "40000":"40000",
  "50000":"50000",
  "60000":"60000",
  "70000":"70000",
  "80000":"80000",
  "90000":"90000",
  "100000":"100000",
  "125000":"125000",
  "150000":"150000",
  "200000":"200000"
};

const prices: Record<string, string> = {
  "500":"500",
  "1000":"1000",
  "1500":"1500",
  "2000":"2000",
  "2500":"2500",
  "3000":"3000",
  "3500":"3500",
  "4000":"4000",
  "4500":"4500",
  "5000":"5000",
  "6000":"6000",
  "7000":"7000",
  "8000":"8000",
  "9000":"9000",
  "10000":"10000",
  "11000":"11000",
  "12000":"12000",
  "13000":"13000",
  "14000":"14000",
  "15000":"15000",
  "17500":"17500",
  "20000":"20000",
  "22500":"22500",
  "25000":"25000",
  "27500":"27500",
  "30000":"30000",
  "35000":"35000",
  "40000":"40000",
  "45000":"45000",
  "50000":"50000",
  "55000":"55000",
  "60000":"60000",
  "70000":"70000",
  "80000":"80000",
  "90000":"90000"
};

const years: Record<string, string> = {
 "2025": "2025",
"2024": "2024",
"2023": "2023",
"2022": "2022",
"2021": "2021",
"2020": "2020",
"2019": "2019",
"2018": "2018",
"2017": "2017",
"2016": "2016",
"2015": "2015",
"2014": "2014",
"2013": "2013",
"2012": "2012",
"2011": "2011",
"2010": "2010",
"2009": "2009",
"2008": "2008",
"2007": "2007",
"2006": "2006",
"2005": "2005",
"2004": "2004",
"2003": "2003",
"2002": "2002",
"2001": "2001",
"2000": "2000",
"1999": "1999",
"1998": "1998",
"1997": "1997",
"1996": "1996",
"1995": "1995",
"1994": "1994",
"1993": "1993",
"1992": "1992",
"1991": "1991",
"1990": "1990",
"1985": "1985",
"1980": "1980",
"1975": "1975",
"1970": "1970",
"1965": "1965",
"1960": "1960",
"1900": "1900"
};


const fuelTypes: Record<string, string> = {
  "1": "Petrol",
  "2": "Diesel",
  "3": "Electric",
  "4": "Ethanol",
  "5": "Hybrid (diesel/electric)",
  "6": "Hybrid (petrol/electric)",
  "7": "Plug-in hybrid",
  "8": "Hydrogen",
  "9": "LPG",
  "10": "Natural Gas",
  "99": "Other"
};

const sortingOptions: Record<string, string> = {
  "price-asc": "Price lowest first",
  "price-desc": "Price highest first",
  "newest-first": "Date advertised newest first",
  "mileage-asc": "Mileage lowest first",
  "mileage-desc": "Mileage highest first",
  "registration-asc": "Year of registration lowest first",
  "registration-desc": "Year of registration highest first",
  "standard": "Standard"
};

export interface Option {
  value: string;
  label: string;
  icon?: string; // URL or class for an icon
}

export function recordToOptions (record: Record<string, string>): Option[] {
  return Object.entries(record).map(([value, label]) => ({ value, label }));
};

export function getCarMakes() : Record<string, string> {
  return makes;
}

export function search(searchParameters: SearchParameters) : CardData[] {
  return searchResult;
}

export function getListingDetails(id: string): ListingDetails {
  return listingDetails;
}

export function getBodyTypes() {
  return bodyTypes;
}


export function getTransmissionTypes() {
  return transmissionTypes;
}

export function getPrices() {
  return prices;
}

export function getYears() {
  return years;
}

export function getMileageList() {
  return mileageList;

}

export function getFuelTypes() {
  return fuelTypes;
}

// Option[] format
export function getCarMakeOptions() : Option[] {
  return recordToOptions(makes).sort((a, b) => a.label.localeCompare(b.label));
}


export function getBodyTypeOptions() {
  return recordToOptions(bodyTypes);
}


export function getTransmissionOptions() {
  return recordToOptions(transmissionTypes);
}

export function getPriceOptions() {
  return recordToOptions(prices);
}

export function getYearOptions() {
  return recordToOptions(years).sort((a, b) => b.label.localeCompare(a.label));
}

export function getMileageOptions() {
  return recordToOptions(mileageList);

}

export function getFuelTypeOptions() {
  return recordToOptions(fuelTypes);
}

export function getSortingOptions() {
  return recordToOptions(sortingOptions);
}
