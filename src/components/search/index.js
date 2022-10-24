import * as React from "react"
import algoliasearch from 'algoliasearch/lite';
import PostPreview from "./postPreview";
import {
    InstantSearch,
    SearchBox,
    Hits,
    Highlight,
  } from "react-instantsearch-dom"

const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);

const SearchIndex = (props) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div class="grid grid-cols-1 gap-0 instant-search-outer">
            <InstantSearch searchClient={searchClient} indexName={process.env.ALGOLIA_INDEX_NAME}>
                <SearchBox/>
                <Hits hitComponent={PostPreview} />
            </InstantSearch>
            </div>             
        </div>
    )
}

export default SearchIndex