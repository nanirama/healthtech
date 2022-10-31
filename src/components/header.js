import React, { Fragment } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Configure
} from "react-instantsearch-dom"
import { Popover, Transition } from '@headlessui/react'
import CustomAutocomplete from './elements/AutoComplete';
import Logo from "../assets/images/logo.png"

const searchClient = algoliasearch('V3K6PZSFJ6', '1352dccf4a285e79389dbaddac5e536c');



const Header = ({ siteTitle }) => {

  const solutions = [
    {
      name: 'Analytics',
      href: '#',
    },

  ]
  const resources = [
    {
      name: 'Help Center',
      href: '#',
    },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (

    <header>

      <Popover className="w-100 absolute top-0 left-0 right-0 z-50 border-b border-gray-200 z-30">
        <div className="max-w-7xl mx-auto flex flex-row justify-between	items-center px-4 py-10">
          <div className="flex justify-start ">
            <div className=''>
              <img src={Logo} alt="" width={176} height={48} className="pt-1" />
            </div>
          </div>
          <div>
        

          <div class="flex items-center md:w-72 md:flex hidden">   
                <InstantSearch searchClient={searchClient} indexName="LevelsBlog">
                    <Configure clickAnalytics />
                    <CustomAutocomplete />
                </InstantSearch>
            {/* <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="voice-search" class="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Articles, Authors ..." required/>
              
            </div> */}
          </div>




        </div>
          <div className="-my-2 -mr-2 md:hidden z-60">
            <Popover.Button className="inline-flex items-center justify-end rounded-md p-2 rounded-full text-gray-400 bg-gray-100 w-12 h-12 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <svg fill="#000" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" /></svg>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-8 md:flex">
            <a href="#" className="capitalize text-black text-sm ttfont-bold border-b-4 pb-1 border-transparent hover:border-teal-200">
              levels blog
            </a>
            <a href="#" className="capitalize text-black text-sm ttfont-bold border-b-4 pb-1 border-transparent hover:border-teal-200">
              request access
            </a>
          </Popover.Group>
        </div>
        
        {/* Mobile menu */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img src={Logo} alt="" width={176} height={48} className="pt-1" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-full w-12 h-12 bg-white p-2 bg-gray-100">
                      <span className="sr-only">Close menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill='#000'><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
                    </Popover.Button>
                  </div>
                </div>

              </div>
              <div className="py-6 px-5">
                <div className="flex flex-col gap-4">
                  <a href="#" className="capitalize text-black text-sm ttfont-bold">
                    levels blog
                  </a>

                  <a href="#" className="capitalize text-black text-sm ttfont-bold">
                    request access
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
