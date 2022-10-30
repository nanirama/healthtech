import * as React from "react"

import ArticleImg from "../../assets/images/blog-hero.png"
import CategoryImg from "../../assets/images/article-img.jpg"
import Authorimg from "../../assets/images/author.png"

const CategorySection = () => {
    return (
        <>
            <div className="w-100 py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                        <div className="col-span-2 border-r border-gray-100 pr-4">
                            <div className=" flex flex-row gap-4 border-b-2 border-gray-400 pb-4">
                                <div class="w-1/2 flex flex-col justify-between">
                                    <div class="">
                                        <h6 class="text-sm uppercase text-slate-700 pb-2">category</h6>
                                        <h2 class="lg:text-3xl text-2xl font-bold text-black mb-3">The ultimate guide to metabolic fitness</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                                    </div>
                                    <div class="flex flex-col flex-end">
                                        <div class="flex flex-row w-full items-center justify-between mt-16">
                                            <p className="text-slate-700 text-sm">Writer's name</p>
                                            <p className="text-slate-700 text-sm">10min read</p></div>
                                    </div>
                                </div>
                                <div className="w-1/2"><img src={ArticleImg} alt="" /></div>
                            </div>
                            <div className="flex flex-row gap-4 pt-4">
                                <div class="w-1/2 flex flex-col justify-between">
                                    <div class="">
                                        <h6 class="text-sm uppercase text-slate-700 pb-2">category</h6>
                                        <h2 class="lg:text-3xl text-2xl font-bold text-black mb-3">The ultimate guide to metabolic fitness</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                                    </div>
                                    <div class="flex flex-col flex-end">
                                        <div class="flex flex-row w-full items-center justify-between mt-12">
                                            <p className="text-slate-700 text-sm">Writer's name</p>
                                            <p className="text-slate-700 text-sm">10min read</p></div>
                                    </div>
                                </div>
                                <div className="w-1/2"><img src={ArticleImg} alt="" /></div>
                            </div>
                        </div>
                        <div className="border-r border-gray-100 pr-4 flex flex-col">
                            <div className="">
                                <div class="flex flex-col justify-between border-b-2 border-gray-400 pb-4">
                                    <div>
                                        <img src={CategoryImg} alt="" height="200" />
                                        <h6 class="text-xs uppercase text-slate-700 my-2">category</h6>
                                        <h3 class="text-xl font-bold text-black mb-3">The ultimate guide to metabolic fitness</h3>

                                    </div>
                                    <div class="flex flex-row gap-4 justify-between">

                                        <p className="text-slate-700 text-sm">Writer's name</p>
                                        <p className="text-slate-700 text-sm">Aug 12th, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="">
                                    <div class="flex flex-col justify-between mt-4 pr-4 border-r border-gray-100">
                                        <div>
                                            <img src={CategoryImg} alt="" />
                                            <h6 class="text-xs uppercase text-slate-700 my-2">category</h6>
                                            <h3 class="text-xl font-bold text-black mb-3">The ultimate guide to metabolic fitness</h3>

                                        </div>
                                        <div class="flex flex-row justify-between">
                                            <p className="text-slate-700 text-sm">Writer's name</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div class="flex flex-col justify-between pt-4 pl-4">
                                        <div>
                                            <img src={CategoryImg} alt="" />
                                            <h6 class="text-xs uppercase text-slate-700 my-2">category</h6>
                                            <h3 class="text-xl font-bold text-black mb-3">The ultimate guide to metabolic fitness</h3>

                                        </div>
                                        <div class="flex flex-row justify-between">
                                            <p className="text-slate-700 text-sm">Writer's name</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="bg-gray-700 text-white text-3xl h-16 w-100 pl-5 items-center flex">Ultimate guides</h3>
                            <div className="flex flex-row justify-between mt-4 pb-4 border-b border-gray-100">
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-2xl font-bold text-black">The Levels theory of behavior change lorem ipsum</h4>
                                    <p className="text-slate-700 text-sm pt-2">Writer's name</p>
                                </div>
                                <img src={Authorimg} width={60} />
                            </div>
                            <div className="flex flex-row justify-between mt-4 pb-4 border-b border-gray-100">
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-2xl font-bold text-black">The Levels theory of behavior change lorem ipsum</h4>
                                    <p className="text-slate-700 text-sm pt-2">Writer's name</p>
                                </div>
                                <img src={Authorimg} width={60} />
                            </div>
                            <div className="flex flex-row justify-between mt-4 pb-4">
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-2xl font-bold text-black">The Levels theory of behavior change lorem ipsum</h4>
                                    <p className="text-slate-700 text-sm pt-2">Writer's name</p>
                                </div>
                                <img src={Authorimg} width={60} />
                            </div>
                            <div className="w-full mt-4">
                                <button className="bg-green-400 capitalize rounded-full w-full py-3 text-center">more ultimate guides</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategorySection