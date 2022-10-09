import * as React from "react"
import { Link } from 'gatsby'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const CategoryListsection = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 3000,
        slidesToShow: 7,
        slidesToScroll: 7,
        autoplay: false,
        autoplaySpeed: 0,
        arrows: false,
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
        <div className="max-w-7xl mx-auto px-4">
            <Slider {...settings}>
                <div>
                    <Link to="/" className="flex items-center justify-center text-center text-xs uppercase ttfont-bold text-gray-400 ltr-spacing py-2.5 px-5 ltr-spacing bg-green-900 rounded-full text-teal-300 hover:bg-green-900 hover:rounded-full">all</Link>
                </div>
                <div>
                    <Link to="/blog/category/mental-health" className="flex items-center justify-center text-center text-xs uppercase ttfont-bold text-gray-400 ltr-spacing py-2.5 px-5 ltr-spacing hover:text-teal-300 hover:bg-green-900 hover:rounded-full">mental health</Link>
                </div>
                <div>
                    <Link to="/blog/category/metabolic-basics" className="flex items-center justify-center text-center text-xs uppercase ttfont-bold text-gray-400 ltr-spacing py-2.5 px-5 ltr-spacing hover:text-teal-300 hover:bg-green-900 hover:rounded-full">metabolic basics</Link>
                </div>
                <div>
                    <Link to="/blog/category/nutrition" className="flex items-center justify-center text-center text-xs uppercase ttfont-bold text-gray-400 ltr-spacing py-2.5 px-5 ltr-spacing hover:text-teal-300 hover:bg-green-900 hover:rounded-full">nutrition</Link>
                </div>
                <div>
                    <Link to="/blog/category/testimonials" className="flex items-center justify-center text-center text-xs uppercase ttfont-bold text-gray-400 ltr-spacing py-2.5 px-5 ltr-spacing hover:text-teal-300 hover:bg-green-900 hover:rounded-full">personal stories</Link>
                </div>
                <div>
                    <Link to="/blog/category/physical-fitness" className="flex items-center justify-center text-center text-xs uppercase ttfont-bold text-gray-400 ltr-spacing py-2.5 px-5 ltr-spacing hover:text-teal-300 hover:bg-green-900 hover:rounded-full">weight loss</Link>
                </div>
                <div>
                    <Link to="/blog/category/weight-loss" className="flex items-center justify-center text-center text-xs uppercase ttfont-bold text-gray-400 ltr-spacing py-2.5 px-5 ltr-spacing hover:text-teal-300 hover:bg-green-900 hover:rounded-full">woman's health</Link>
                </div>
            </Slider>
        </div>
    )
}
export default CategoryListsection