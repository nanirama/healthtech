import React, { createElement, Fragment, useEffect, useRef } from 'react';
import { connectAutoComplete, connectHitInsights } from 'react-instantsearch-dom';
import { Link } from 'gatsby'

const Autocomplete = ({ hits, currentRefinement, refine }) => {
    return (
        <div class="">
            <div class="inline-flex flex-col justify-center relative text-gray-500">
                <div class="relative">
                    <input type="search"
                         className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="search..."
                         value={currentRefinement}
                        onChange={event => refine(event.currentTarget.value)}
                    />
                    <svg class="w-4 h-4 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <ul class="bg-white w-96 border border-gray-100 w-full mt-2 absolute top-10">
                {currentRefinement!=='' && hits.map((hit, insights) => (
                <li key={hit.objectID} className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                    <svg className="absolute w-4 h-4 left-2 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    <Link to={`/blog/${hit.slug}/${hit.objectID}`}>
                        {hit.title}
                    </Link>
                </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

const CustomAutocomplete = connectAutoComplete(Autocomplete);

export default CustomAutocomplete