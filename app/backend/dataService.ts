import { makes } from "./placeholder-data";

export async function fetchMakes() : Promise<{ [key: string]: string }[]> {
  return makes;
}