import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const BlogFirstItem = () => (
    <>
        <div className="flex flex-col justify-between h-full border border-gray-300 p-3">
            <StaticImage src="https://www.levelshealth.com/wp-content/uploads/2022/10/Woman-on-bike-800x533.jpg" alt="" className="mb-4" />
            <h4 className="uppercase text-xs text-slate-400 pb-1">topic</h4>
            <h3 className="text-black sm:text-4xl text-3xl pb-2">The ultimate guide to metabolic fitness</h3>
            <p className="sm:pb-0 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut odo consequat.</p>
            <div className="author flex justify-between sm:items-center items-start sm:flex-row gap-4 flex-col mb-2">
                <div className="flex items-center gap-2">
                    <StaticImage src="../../assets/images/author.png" alt="" width={40} height={40} />
                    <h6 className="tracking-tight mb-0">Casey Means, MD</h6>
                </div>
                <p className="flex gap-1 items-center text-sm text-gray-500 tracking-tight mb-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#5D6465" stroke-width="1.5" stroke-miterlimit="10" />
                        <path d="M10 5.625V10H14.375" stroke="#5D6465" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> 11 min read</p>
            </div>
        </div>
    </>

)

export default BlogFirstItem