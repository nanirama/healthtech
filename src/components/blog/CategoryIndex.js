import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';

import BlogFirstItem from "./BlogFirstItem"
import BlogItem from "./BlogItem"

const searchClient = algoliasearch('V3K6PZSFJ6', '1352dccf4a285e79389dbaddac5e536c');

const CategoryIndex = ({ category, data }) => {
    const firstData = data.edges.slice(0, 1);
    const fourData = data.edges.slice(1, 5);
    const allData = data.edges.slice(5, data.edges.length);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-5xl font-normal tracking-tight text-gray-900 mb-8">{category && category.name && category.name}</h1>
            <div class="grid md:grid-flow-row-dense lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-6 mb-6">
                {firstData && firstData.map((item,index)=>{
                    return(
                        <BlogFirstItem data={item.node} />   
                    )
                })}
                <div class="grid md:grid-flow-row-dense lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-6">
                    {fourData && fourData.map((item, index)=>{
                        return(
                            <BlogItem data={item.node} key={index} />
                        )
                    })}
                </div>

            </div>
            <div class="grid md:grid-flow-row-dense lg:grid-cols-4 grid-cols-1 grid-rows-1 gap-6">
                {allData && allData.map((item,index)=> <BlogItem data={item.node} key={index} />   )}
            </div>

        </div>
    )
}

export default CategoryIndex