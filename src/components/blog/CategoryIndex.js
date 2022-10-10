import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import BlogFirstItem from "./BlogFirstItem"
import BlogItem from "./BlogItem"

const CategoryIndex = ({ category, data }) => {
    const firstData = data.edges.slice(0, 1);
    const fourData = data.edges.slice(1, 5);
    const allData = data.edges.slice(5, data.edges.length);
    console.log('first 5 records', firstData)
    console.log('all records', allData)
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