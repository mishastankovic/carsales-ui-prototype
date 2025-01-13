import { makes, searchResult, listingDetails } from "./placeholder-data";
import { CardData, ListingDetails } from "../model/definitions";


export async function fetchMakes() : Promise<{ [key: string]: string }[]> {
  return makes;
}

export function search() : CardData[] {
  return searchResult;
}

export function getListingDetails(id: string): ListingDetails {
  return listingDetails;
}