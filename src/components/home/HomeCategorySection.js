import * as React from "react"
import { Link } from "gatsby"

import PostCard3 from "../elements/postcards/PostCard3"
import PostCard4 from "../elements/postcards/PostCard4"
import PostCard5 from "../elements/postcards/PostCard5"
import PostCard6 from "../elements/postcards/PostCard6"



const HomeCategorySection = ({
    NutritionData,
    PersonalStoriesData,
    MetabolicHealthData,
    UltimateGuideData
}) => {
    return (
        <>
            <div className="w-100 py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                        <div className="col-span-3 border-r-2 border-gray-200 pr-4">
                            <div className="grid grid-cols-1 gap-4">
                                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                                    <div className="col-span-2 border-r-2 border-gray-200 pr-4">
                                        <PostCard3 data={NutritionData[0].node}/>  
                                    </div>
                                    <div className="">
                                        <PostCard4 data={NutritionData[1].node}/>    
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 flex-row justify-items-stretch justify-start">
                                    <div className="col-span-2 border-r-2 border-gray-200 pr-4 pt-4">
                                        <PostCard3 data={PersonalStoriesData[0].node}/>  
                                    </div>
                                    <div className="flex flex-row justify-items-stretch justify-start grid lg:grid-cols-2 grid-cols-1 gap-2">
                                        {MetabolicHealthData && MetabolicHealthData.map((item,index)=>{
                                            return(
                                                <div className={`pt-4 flex flex-row justify-items-stretch justify-between ${index===0 ? 'pr-2 border-r-2 border-gray-200' : 'pl-2'}`} key={index}>
                                                    <PostCard5 data={item.node}/>    
                                                </div>
                                            )
                                        })}                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="bg-gray-700 text-white text-3xl h-16 w-100 pl-5 items-center flex">Ultimate guides</h3>
                            {UltimateGuideData && UltimateGuideData.map((item, index)=> <PostCard6 key={index} data={item.node}/>)}
                            <div className="w-100 mt-4">
                                <Link to={`/blog/category/ultimate-guides`} className="bg-green-400 capitalize rounded-full block py-3 px-5 w-100 text-center">more ultimate guides</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default HomeCategorySection