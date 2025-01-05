import { makes, searchResult } from "./placeholder-data";
import { CardData } from "../model/definitions";

export async function fetchMakes() : Promise<{ [key: string]: string }[]> {
  return makes;
}

export async function search() : Promise<CardData[]> {
  return searchResult;
}