import * as React from "react"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const PostsTitlesSlider = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        arrows: true,
        variableWidth: true,
        cssEase: "linear",
        centerPadding: "10px",
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                },
            },
        ]
    };

    return (
        <>

            <div className="bg-gray-100 py-10 mt-10">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold">Metabolic Fundamentals: Start Here</h2>
                    <div className="pt-6 fundamental-slider">
                        <Slider {...settings}>
                            <div>
                                <div className="flex flex-row gap-4 pr-2 mr-4 border-r border-gray-400">
                                    <div className="w-12 h-12 bg-black rounded-full"><div className="w-12 h-12 flex items-center justify-center text-white">1</div></div>
                                    <div className=""><p className="text-xl">Lorem ipsum dolor sit amet, consectetuer</p></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row gap-4 pr-2 mr-4 border-r border-gray-400">
                                    <div className="w-12 h-12 bg-black rounded-full"><div className="w-12 h-12 flex items-center justify-center text-white">2</div></div>
                                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetuer</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row gap-4 pr-2 mr-4 border-r border-gray-400">
                                    <div className="w-12 h-12 bg-black rounded-full"><div className="w-12 h-12 flex items-center justify-center text-white">3</div></div>
                                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetuer</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row gap-4 pr-2 mr-4 border-r border-gray-400">
                                    <div className="w-12 h-12 bg-black rounded-full"><div className="w-12 h-12 flex items-center justify-center text-white">4</div></div>
                                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetuer</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row gap-4 pr-2 mr-4 border-r border-gray-400">
                                    <div className="w-12 h-12 bg-black rounded-full"><div className="w-12 h-12 flex items-center justify-center text-white">5</div></div>
                                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetuer</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row gap-4 pr-2 mr-4 border-r border-gray-400">
                                    <div className="w-12 h-12 bg-black rounded-full"><div className="w-12 h-12 flex items-center justify-center text-white">6</div></div>
                                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetuer</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PostsTitlesSlider