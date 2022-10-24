import * as React from "react"
import Layout from "../components/layout"
import SearchIndex from "../components/search"
const SearchPage = (props) => {
  return (
    <Layout>
      <div className="relative pt-28 md:pb-28 pb-20">
        <SearchIndex />
      </div>
    </Layout>
  )
}

export default SearchPage


