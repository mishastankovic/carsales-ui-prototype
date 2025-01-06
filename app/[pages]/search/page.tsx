import { search } from "@/app/backend/dataService";
import SearchForm from "@/app/components/search/searchform";
import SearchResultList from "@/app/components/search/searchresult";

export default async function Page() {
  let searchResult = await search();

  return <div className="flex flex-row w-full justify-center">
    {/* <SearchForm /> */}
    <div className="flex flex-col max-w-5xl ml-auto mr-auto">
      <SearchResultList searchResult = {searchResult} />
    </div>
  </div>;
}