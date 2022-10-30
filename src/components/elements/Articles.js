import * as React from "react"
import WriterImg from "../../assets/images/author.png"
import ArticleImg from "../../assets/images/article-img.jpg"

const ArticleType = ({ data }) => {
    return (
        <div className="mx-auto py-12 px-4 max-w-7xl">
            <div className="bg-gray-700 text-white px-5 py-2 text-xl mb-5">Metabolic Health</div>
            <div class="grid lg:grid-cols-4 gap-5 mb-8">
                <div class="flex flex-col justify-between">
                    <div class="">
                        <h6 class="text-sm uppercase text-slate-700 pb-2">Article Type</h6>
                        <h2 class="lg:text-3xl text-2xl font-bold text-black mb-3">The ultimate guide to metabolic fitness</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                    </div>
                    <div class="flex flex-col flex-end">
                        <div class="flex flex-row w-full items-center justify-between mt-10">
                            <div class="flex flex-row gap-4 items-center">
                                <img src={WriterImg} width="35" height="35" />
                                <p className="text-slate-700 text-sm">Writer's name</p>
                            </div>
                            <p className="text-slate-700 text-sm">Aug 12th, 2021</p></div>
                        <div class="flex flex-row w-full items-center justify-between mt-4">
                            <div class="flex flex-row gap-4 items-center">
                                <img src={WriterImg} width="35" height="35" />
                                <p className="text-slate-700 text-sm">Reviewer's name</p></div>
                            <p className="text-slate-700 text-sm">Aug 12th, 2021</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-2"> <img src={ArticleImg} alt="" /></div>
                <div class="flex flex-col justify-between lg:border-l lg:pl-5">
                    <div>
                        <img src={ArticleImg} alt="" />
                        <h6 class="text-xs uppercase text-slate-700 my-2">Article Type</h6>
                        <h3 class="text-xl font-bold text-black mb-3">The ultimate guide to metabolic fitness</h3>

                    </div>
                    <div class="flex flex-row gap-4 justify-between">

                        <p className="text-slate-700 text-sm">Writer's name</p>
                        <p className="text-slate-700 text-sm">Aug 12th, 2021</p>
                    </div>
                </div>
            </div>
            <hr />
            <div class="grid lg:grid-cols-4 gap-4 my-5">
                <div class="flex flex-col justify-between lg:border-r lg:pr-4">
                    <div className="mb-10">
                        <img src={ArticleImg} alt="" />
                        <h6 class="text-xs uppercase text-slate-700 my-2">Article Type</h6>
                        <h3 class="text-xl font-bold text-black mb-3">The ultimate guide to metabolic fitness</h3>

                    </div>
                    <div class="flex flex-row gap-4 justify-between">

                        <p className="text-slate-700 text-sm">Writer's name</p>
                        <p className="text-slate-700 text-sm">Aug 12th, 2021</p>
                    </div>
                </div>
                <div class="flex flex-col justify-between lg:border-r lg:pr-4">
                    <div className="mb-10">
                        <img src={ArticleImg} alt="" />
                        <h6 class="text-xs uppercase text-slate-700 my-2">Article Type</h6>
                        <h3 class="text-xl font-bold text-black mb-3">The ultimate guide to metabolic fitness</h3>

                    </div>
                    <div class="flex flex-row gap-4 justify-between">

                        <p className="text-slate-700 text-sm">Writer's name</p>
                        <p className="text-slate-700 text-sm">Aug 12th, 2021</p>
                    </div>
                </div>
                <div class="flex flex-col justify-between lg:border-r lg:pr-4">
                    <div className="mb-10">
                        <img src={ArticleImg} alt="" />
                        <h6 class="text-xs uppercase text-slate-700 my-2">Article Type</h6>
                        <h3 class="text-xl font-bold text-black mb-3">The ultimate guide to metabolic fitness</h3>

                    </div>
                    <div class="flex flex-row gap-4 justify-between">

                        <p className="text-slate-700 text-sm">Writer's name</p>
                        <p className="text-slate-700 text-sm">Aug 12th, 2021</p>
                    </div>
                </div>
                <div class="flex flex-col justify-between lg:pr-4">
                    <div className="mb-10">
                        <img src={ArticleImg} alt="" />
                        <h6 class="text-xs uppercase text-slate-700 my-2">Article Type</h6>
                        <h3 class="text-xl font-bold text-black mb-3">The ultimate guide to metabolic fitness</h3>

                    </div>
                    <div class="flex flex-row gap-4 justify-between">
                        <p className="text-slate-700 text-sm">Writer's name</p>
                        <p className="text-slate-700 text-sm">Aug 12th, 2021</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-center w-full">
                <button class="rounded-full bg-teal-400 px-10 py-1 text-dark mt-5">Show All</button>
            </div>
        </div>

    )
}
export default ArticleType