import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LatestPost from "../elements/LatestPost"

import Authorimg from "../../assets/images/author.png"
import Signuplogo from "../../assets/images/favicon.png"


const HomeHeroSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:mt-8 mt-4">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                <div className="col-span-3 grid lg:grid-cols-3 gap-4 flex flex-row justify-start justify-items-stretch">
                    <LatestPost />
                </div>
                <div className="bg-green-500 p-8 rounded ">
                    <div className="flex justify-start justify-items-start gap-10">
                        <h3 className="w-2/3 xl:text-3xl lg:text-2xl text-2xl text-white tracking-tight pb-1">Sign up for the Levels Newsletter</h3>
                        <div className="pt-2"><img src={Signuplogo} width={40} height={50} /></div>
                    </div>
                    <div className="border-y border-green-50 py-5 w-full mt-5">
                        <div className="w-full">
                            <input type="text" className="bg-white rounded-full text-left w-full py-3 text-center" placeholder="Type your email" />
                        </div>
                        <div className="w-full mt-4">
                            <button className="bg-green-400 rounded-full w-full py-3 text-center">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeHeroSection
