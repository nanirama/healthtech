import React, { createElement } from 'react';
import Layout from "../components/layout"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from "react-instantsearch-dom"
import CustomAutocomplete from '../components/elements/AutoComplete';

const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);

function SearchTest() {
    return (
        <Layout>
            <div className="relative pt-28 md:pb-28 pb-20 mt-25">
                <InstantSearch searchClient={searchClient} indexName="LevelsBlog">
                    <CustomAutocomplete />
                </InstantSearch>
            </div>
        </Layout>
    );
}
export default SearchTest;