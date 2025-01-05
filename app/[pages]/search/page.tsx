import { search } from "@/app/backend/dataService";
import SearchForm from "@/app/components/search/searchform";
import SearchResultList from "@/app/components/search/searchresult";

export default async function Page() {
  let searchResult = await search();

  return <div className="flex flex-col w-full">
    {/* <SearchForm /> */}
    <SearchResultList searchResult = {searchResult} />
  </div>;
}