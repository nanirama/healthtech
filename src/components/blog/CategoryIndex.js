import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import BlogFirstItem from "./BlogFirstItem"
import BlogItem from "./BlogItem"

const CategoryIndex = ({ category, data }) => {    
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 pagecontainer">
            <h1 className="text-5xl font-normal tracking-tight text-gray-900 mb-8">{category && category.name && category.name}</h1>
            <div class="grid md:grid-flow-row-dense lg:grid-cols-4 grid-cols-1 grid-rows-1 gap-6">
                {data && data.edges && data.edges.map((item,index)=>{
                    if(index==0 || index==1){
                        return(
                            <div class="lg:col-span-2 col-span-1" key={index}>
                                <BlogItem data={item.node} />
                            </div>  
                        ) 
                    }
                    return(
                        <BlogItem data={item.node} key={index} />   
                    )
                })}
                {/* <div class="lg:col-span-2 col-span-1">
                    <BlogFirstItem />
                </div> */}
                {/* <div className="gap-6 flex flex-col">
                    <BlogItem />
                    <BlogItem />
                </div>
                <div className="gap-6 flex flex-col">
                    <BlogItem />
                    <BlogItem />
                </div>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem /> */}
            </div>

       </div>
    )
}

export default CategoryIndex